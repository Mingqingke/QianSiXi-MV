# 渲染日志与验证记录

环境：Android arm64 / proot（Ubuntu 24.04.3）/ 8 核 / 可用内存 ~1GB（宿主机 7.5GB，常被占用）
日期：2026-10-23，中国标准时间

## 1. 工具链

| 项目 | 结果 |
|---|---|
| Node.js 20.18.0（官方 arm64 二进制） | ❌ 启动即 `Bus error`（exit 135），`--jitless` 同样失败 |
| Node.js 18.20.5（官方 arm64 二进制） | ✅ `v18.20.5`，npm 10.8.2 |
| `npm install`（remotion 4.0.538 等 259 个包） | ✅ node_modules 266MB |
| `npx tsc --noEmit` | ✅ 0 error |
| `npx remotion browser ensure` | ✅ chrome-headless-shell 93.6MB 下载并解压成功 |
| Remotion webpack 打包 | ✅ `Bundling 100%` / `Getting composition` 通过 |
| Remotion 截图（Chrome） | ❌ 见第 2 节 |
| resvg（Rust） | ⚠️ 快（1.77s/帧@1080p），但镜头缩放 ≥2 时 panic |
| sharp / librsvg | ✅ 慢一些（1.6–3.1s/帧@1080p），全帧通过 |
| ffmpeg | ✅ `@ffmpeg-installer/linux-arm64`（libx264 可用） |

说明：apt 走阿里云镜像实测 34 kB/s（13.6MB 用了 6 分 40 秒），npm registry / nodejs.org 实测
0.7–1.5 MB/s，所以工具链全部用官方二进制 + npm 安装，没走 apt。

## 2. 为什么本机不能走 Remotion 的 Chrome 渲染

Chromed/headless_shell 在这个 proot 里子进程一启动就被杀：

```
[ERROR:content/common/zygote/zygote_communication_linux.cc:313]
       Failed to send GetTerminationStatus message to zygote
[WARNING:content/common/zygote/zygote_communication_linux.cc:325] Socket closed prematurely.
[ERROR:content/browser/network_service_instance_impl.cc:652]
       Network service crashed or was terminated, restarting service.
```

Remotion 侧最终报：`Could not take a screenshot because Google Chrome ran out of memory or
disk space.`（这行是它的通用错误文案，实际是渲染进程崩溃）

试过的组合，全部失败：
`--no-sandbox --disable-dev-shm-usage`（Remotion 默认已带）、`--single-process`、`--no-zygote`、
`--in-process-gpu`、`--disable-gpu`、`--disable-gpu-rasterization`、`--disable-software-rasterizer`、
`--use-angle=swiftshader`、`--disable-features=VizDisplayCompositor`、独立的 `--screenshot` 直连。

结论：与项目代码无关，是本机 proot/内核层面的限制。任何正常 Linux / macOS / Windows 机器、
或 Docker（`node:20` 镜像 + `--shm-size=1g`）上，第 2 节的命令可以直接出片。

## 3. 离线栅格化通路（本机实际出片用的）

`offline/main.tsx`：`renderToStaticMarkup(Act)` → SVG → 栅格化 → PNG → ffmpeg。
场景代码零改动（`offline/shim.tsx` 提供同签名的 `useCurrentFrame` / `useVideoConfig`）。

### resvg 的 panic

```
thread '<unnamed>' panicked at .../crates/resvg/src/geom.rs:27:61:
called `Option::unwrap()` on a `None` value
```

已定位：与 `transform` 有关。逐元素二分确认——
- 去掉**全部** `transform` → 正常
- 保留 transform 但把镜头 `scale(2.85024)` 改成 `scale(1)` → 正常
- `scale(2)` → panic

即 resvg 在本内容 + 缩放 ≥2 时会崩（不是滤镜、不是 mix-blend-mode、不是 dasharray）。
所以 `--engine sharp`（librsvg）是本机的默认选择；resvg 通路保留给"缩放 ≤2 的镜头"或其它平台。

### 吞吐实测（本机）

| 设置 | 结果 |
|---|---|
| 1080p，单进程 | 1.6–3.1 s/帧 |
| 1080p，4 worker | 0.20 帧/秒（总）→ 整片约 2.5 小时 |
| `--density 48/36`，5–6 worker | 注意：sharp 对带固定 width/height 的 SVG **忽略 density**，实测输出仍是 1920×1080 |
| 1080p，5–6 worker（实际交付用的档位） | 0.4–0.6 帧/秒（总）→ 870 帧约 30 分钟，整片约 3.5–5 小时 |

100 帧 @720p / 5 worker 实测：**111 秒**（`user 5m20s`），即 0.72 帧/秒、每帧约 4 秒 CPU。
瓶颈是 `feGaussianBlur` 类滤镜 + 内存带宽；已把整帧 `feTurbulence` 换成预生成纸纹
（base64 平铺），单帧成本从 3.2s 降到 2.6s。

**因此本机没有渲完整片**（需要 ≥2.5 小时连续跑），交付的是：
- 第八幕火焰断丝 → 第九幕空台余烬：**帧 6300–7169（29 秒，1920×1080，真实渲染的 MP4）**
  `out/QianSiXi-act8-9-1080p.mp4`（870 帧，H.264 High / yuv420p / 30fps / 4129 kb/s / 14.98MB）
- 各幕的 1080p 检查帧（`out/stills/`）

## 4. 这次真的验证了什么

✅ TypeScript 全量类型检查通过
✅ Remotion 工程可打包（webpack 100%，composition `QiansiXi-MV` 被识别，7170 帧 / 30fps / 1920×1080）
✅ 九幕按 `timeline.ts` 的秒数首尾相接，总帧数 = 239 × 30 = 7170
✅ 同一帧重复渲染结果完全一致（确定性：无 `Math.random`、无真实时间、无 `Date.now`）
✅ 断点续渲可用（已存在帧跳过）
✅ 第八幕末帧与第九幕首帧姿态/机位/曝光逐项相同（`BOW_POSE` 共用 + 起手值对齐）
✅ MP4 由真实帧序列编码（见第 3 节的产物）

❌ 完整 3:59 的 1080p MP4：本机算力不够，未完成
❌ 音画同步 / 卡点：没有音频文件，`AUDIO.enabled=false`，`BPM=72` 是假设值

## 5. 在正常机器上补齐（命令照抄即可）

```bash
npm install
# 1) 放音频、改 timeline.ts（AUDIO.enabled = true、SECTIONS 的秒数）
# 2) 先验证链路
npx remotion still QiansiXi-MV out/check.png --frame=6300
# 3) 整片
npx remotion render QiansiXi-MV out/QianSiXi-MV.mp4 --concurrency=8
# 4) 校验音画
ffprobe -v error -show_entries format=duration -show_entries stream=width,height,r_frame_rate,codec_type out/QianSiXi-MV.mp4
```

如果目标机器也跑不了 Chrome，用离线通路（同一套画面代码）：

```bash
npm run offline:build
node offline/main.cjs --from 0 --to 7170 --out out/frames --workers 8 --density 72 --engine sharp
node_modules/@ffmpeg-installer/linux-arm64/ffmpeg -y -framerate 30 -i out/frames/f%05d.png \
  -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart out/QianSiXi-MV.mp4
```

## 6. 云端渲染（最终成片就在这里出）

本机渲不动整片，所以走了 GitHub Actions（public 仓库，免费，不限时长）：

- 仓库：`Mingqingke/QianSiXi-MV`，工作流 `.github/workflows/render.yml`（`workflow_dispatch`）
- 推送方式：本机 `git push`（github.com:443）被网络阻断（`Recv failure: Connection timed out`），
  改用 **GitHub REST API（Git Data API）**：逐文件 `POST /git/blobs` → `POST /git/trees` →
  `POST /git/commits` → `PATCH /git/refs/heads/main`。注意空仓库直接建 blob 会返回
  `409 Git Repository is empty`，需要先用 Contents API 建一个初始提交。
- 运行 `39978588880`，结论 `success`：

| 步骤 | 开始 → 结束 | 耗时 |
|---|---|---|
| Install (`npm ci`) | 15:28:51 → 15:28:58 | 7s |
| Typecheck | 15:28:58 → 15:29:02 | 4s |
| Stills（4 帧，含首次下载 Chrome） | 15:29:02 → 15:29:30 | 28s |
| **Render full MV（7170 帧）** | 15:29:31 → 16:21:37 | **52m06s ≈ 2.3 fps** |
| 整个 job | 15:28:45 → 16:21:45 | 53m |

产物（已下载并核验）：

```
out/QianSiXi-MV.mp4   107,348,783 B
Duration 00:03:59.00   H.264 High  1920x1080  yuv420p  30fps  3590 kb/s
```

下载坑：Artifact 的下载链接是 Azure SAS 签名 URL，**会过期**（过期后返回
`AuthenticationFailed`）；单连接实测只有 13–30 kB/s，但**并发 Range 分片可以跑到 ~10MB/分钟以上**，
所以是用 10 段并发 Range 拉取后拼接的。若某一段被截断（长度对不上），单独重取该段即可。

至此：git 里没有存任何密钥；本机 `/tmp/.ght` 里的 token 已在收尾时删除。
（提示：这两个 token 是明文贴出来的，用完请到 GitHub 设置里 Revoke 重建。）


## 7. 导演版 v2（七幕 + 逐句字幕）实测

改动要点：九幕 → **七幕**（按真实歌词时间轴重排）；木偶/操偶者按 `P.s` 正确缩放
（此前两者都是 1:1 绘制，丝线锚点却按 1.7 倍解算 —— 这是"丝线对不上人"的根因）；
新增**控制杆 + 提杆**（丝线唯一合法起点，不再凭空出现）；新增**逐句字幕层**
（Noto Serif CJK，按幕选位，帧驱动）。

运行 `39998194529`，结论 `success`：

| 步骤 | 耗时 |
|---|---|
| npm ci | 5s |
| **`apt-get install fonts-noto-cjk`（中文字幕必需）** | 15s |
| Typecheck | 3s |
| Stills（8 张，含首次 Chrome 下载） | 46s |
| **Render full MV（7179 帧）** | **69m12s ≈ 1.73 fps** |
| 整个 job | 70m40s |

产物核验：

```
out/QianSiXi-MV.mp4   118,756,728 B
Duration 00:03:59.30   H.264 High  1920x1080  yuv420p  30fps  3967 kb/s  无音轨
```

字幕核对：抽查 25.3s（第一句唱词）与 221.7s（"烟波里成灰"那句）两帧，
字幕出现位置与歌词时间点一致，CJK 字体正常，无豆腐块。

渲染耗时比 v1（52 分钟）长了 17 分钟，原因是角色按 1.7 倍真实尺度绘制、
丝线/杆件与粒子密度上升。若需更快，可在工作流里加 `--concurrency`（免费机器别超过 4）。
