# 《牵丝戏》Remotion 音乐视觉 MV

一座悬浮在黑暗里的东方戏台。台上的木偶被丝线牵着起舞，牵着牵着，观众会发现：
被牵着的不只是木偶，还有那只手。最后丝线一根根烧断，木偶独自把谢幕做完。

- 画幅：1920×1080 / 30fps / 16:9
- 时长：**239.3s / 7179 帧**（已按原版母版校准，见 `docs/LYRICS-SYNC.md`）
- 结构：**七幕**，全部由逐句歌词时间轴驱动（`src/timeline.ts` 的 `PHASES`）
- 字幕：逐句显示、按幕选位、帧驱动（`src/components/Subtitles.tsx`）
- 技术：React + TypeScript + SVG（Remotion 驱动），零位图素材，全部程序化图形
- 九幕叙事，幕与幕首尾相接；幕内所有动作都是"幕内进度 0..1"的函数

---

## 1. 目录

```
src/
  index.ts              入口（registerRoot）
  Root.tsx              注册合成 QiansiXi-MV
  Video.tsx             主时间轴：九幕 Sequence + 音频轨
  timeline.ts           ★ 时间轴配置（段落秒数 = 唯一需要对音频校准的地方）
  acts.tsx              九幕的"配方"：台/山/人/丝/火/雪/光/曝光 全部是进度的函数
  rig.ts                木偶骨骼解算（正向运动学）+ 丝线锚点 + 谢幕姿态
  theme.ts              设计系统：颜色、材质、光
  lib/
    motion.ts           插值、缓动、关键帧、包络（确定性）
    rand.ts             确定性伪随机 / 噪声（同一帧永远同一画面）
    tracks.ts           Pose 关键帧工具（0..1 进度）
  assets/grain.ts       预生成的纸纤维纹理（base64，替代逐帧 feTurbulence）
  components/
    Scene.tsx           场景装配器（所有元素的统一坐标与图层顺序）
    Stage.tsx           戏台：台板/纸屏/雕花立柱/帷幕/悬灯/脚灯/霜/旧
    Puppet.tsx          木偶：木雕关节 + 戏曲妆面 + 叠层袍 + 迟滞衣袖
    Puppeteer.tsx       操偶者：剪影、宽袖、衰老的手
    Threads.tsx         牵丝：张力弧度、微振、断线（先亮一下金红再失重）
    Fire.tsx            火焰：三层水滴形火舌 + 余烬
    Particles.tsx       尘埃 / 风雪 / 纸灰
    Mountains.tsx       山水长卷（视差）+ 古桥 + 风帘
    Camera.tsx          镜头：配置驱动的推拉摇移 + 手持微抖，输出 SVG <g transform>
    Paper.tsx           材质定义（渐变/滤镜/纸纹）+ 统一后期层
offline/                无浏览器环境的渲染通路（见第 5 节）
public/                 放 audio.mp3（以及 grain.png）
docs/RENDER-LOG.md      实测数据、限制与验证记录
```

---

## 2. 正常路径：Remotion（需要能跑 Chrome 的机器）

```bash
npm install
npm run studio                     # 打开 Remotion Studio 逐帧预览
npm run typecheck                  # tsc --noEmit
npm run still -- --frame=6300      # 导一张单帧检查
npm run render                     # 渲染整片 → out/QianSiXi-MV.mp4
```

`package.json` 里的渲染脚本已经带上 `--concurrency=2`（长视频稳定优先）。
机器够快可以改大：`npx remotion render QiansiXi-MV out/x.mp4 --concurrency=8`。

---

## 3. 音频：唯一需要校准的地方

工程没有内置任何音频（版权 + 你用的可能是不同剪辑版），所以：

1. 把你的合法音频放到 `public/audio.mp3`
2. 改 `src/timeline.ts`：
   ```ts
   export const AUDIO = {enabled: true, src: 'audio.mp3', durationSec: 239};
   ```
3. 把 `SECTIONS` 里每段的 `from / to`（秒）改成音频里实际的段落起点。
   目前这组秒数是**按 3:59 常见发行版估算的结构，未经验证**；边界是硬切，
   只要最后一段的 `to` 等于音频真实时长，画面就会铺满整首歌。
4. 幕内节奏不用改：每一幕内部全部用 0..1 进度写关键帧，段落变长变短都自动缩放。

更保险的写法（读真实时长覆盖配置，需要 `@remotion/media-utils`）：

```tsx
// src/Root.tsx
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {staticFile} from 'remotion';
// 在 calculateMetadata 里用 getAudioDurationInSeconds(staticFile('audio.mp3'))
// 的返回值作为 durationInFrames = Math.round(dur * fps)
```

关于"卡点"：`src/acts.tsx` 里有 `const BPM = 72` 与 `beatPulse()`，
它是**假设值**（没做音频分析）。拿到音频后把 BPM 换成实测值，
或直接用实测的节拍时间点替换 `beatPulse` 的返回值，鼓点驱动的
丝线绷紧 / 灯光脉冲 / 帷幕展开就会真正踩在重音上。

---

## 4. 九幕与"第八幕→第九幕"的衔接

| 幕 | 秒（估算） | 内容 | 关键做法 |
|---|---|---|---|
| 1 | 0–18 | 空戏台、一根丝线落下 | 极暗起步，尘埃，镜头只推到"未睁眼的木偶" |
| 2 | 18–44 | 木偶初醒 | 脸→手→全身；睁眼在 0.26–0.36 进度；丝线受力顺序 腕→肩→头 |
| 3 | 44–73 | 红台起舞 | 帷幕拉开、抬袖转身；提线木偶的关节先后与惯性 |
| 4 | 73–107 | 并肩行山水 | 台面化开为视差长卷，丝线从"约束"变"纽带" |
| 5 | 107–140 | 戏中戏 / 反转 | 镜中戏台、手开始抖、木偶在丝线未拉前先动 |
| 6 | 140–170 | 岁月侵蚀 | 褪色、裂纹、驼背、镜头越拉越远 |
| 7 | 170–200 | 风雪离别 | 彩绘泪痕、丝线松弛、两者距离拉开 |
| 8 | 200–219 | 火焰与断丝 | 火起 → 丝线一根根断（stagger）→ **木偶独自谢幕** |
| 9 | 219–239 | 空台余烬 | 从谢幕姿继续下沉 → 灯灭 → 拉远成黑暗中一座极小的台 |

**第八幕 → 第九幕（全片的落点）在代码里的保证：**

- `src/rig.ts` 导出 `BOW_POSE`（谢幕）与 `BOW_SETTLE`（余烬里同一姿态的轻微下沉）。
- 第八幕最后一帧的 `pose` **就是** `BOW_POSE`；第九幕第一帧的 `pose` **也是** `BOW_POSE`
  （`poseAt(p, [{p: 0, pose: BOW_POSE}, ...])`），中间没有 remap、没有跳变。
- 第九幕的 `stage.worn / warm / lantern / frost / open`、`cam`（zoom/x/y/rot）、`exposure`、
  `particles.ash` 的**起手值全部等于第八幕的收手值**，所以切点上看不出接缝。
- 断丝的顺序（`stagger: 0.15`）让"最后一根线断掉"发生在 0.62 进度，
  谢幕动作在 0.82–0.96 —— 也就是谢幕一定发生在**所有丝线都断了之后**。
  这正是"丝线断了以后，木偶仍然完成了最后一次谢幕"的实现方式：
  它不是特效时刻，而是 `poseAt` 里一段没有丝线支撑的姿态。

---

## 5. 云端渲染：GitHub Actions（本片实际出片的路径）

仓库：https://github.com/Mingqingke/QianSiXi-MV （public，Actions 免费不限时长）
工作流：`.github/workflows/render.yml`（`workflow_dispatch` 手动触发）

触发后它做四件事：`npm ci` → `tsc --noEmit` → 出 4 张检查帧 → `npx remotion render QiansiXi-MV out/QianSiXi-MV.mp4`
（**不传 `--concurrency`**，交给 Remotion 按核数决定）→ 把 MP4 上传成 Artifact。

本机实测（2026-10-23，ubuntu-latest）：

| 步骤 | 耗时（v2） |
|---|---|
| npm ci / tsc | 7s / 4s |
| 4 张 stills（含首次下载 Chrome Headless Shell） | 28s |
| **整片 7179 帧 1080p 渲染** | **69 分 12 秒**（≈1.73 帧/秒） |
| 产物 | `QianSiXi-MV.mp4`，118.8MB，1920×1080 / 30fps / H.264 High / 3967 kb/s / **03:59.30** |

拿到 MP4 的方式：Actions → 这次运行 → Artifacts → `QianSiXi-MV-mp4`。
（本机已把它下载到 `out/QianSiXi-MV.mp4`。）

> 不要给这个工作流传 `--concurrency=8`：免费机器核数有限，并发过高会 OOM 中断。

## 6. 无浏览器环境下的渲染通路（`offline/`）

Remotion 正常靠 Chrome 截图。本工程的当前开发沙箱是 Android proot：
Chrome 的子进程一启动就被内核干掉（`Failed to send GetTerminationStatus message to zygote`
/ `Network service crashed`），所以**这条路上无法出片**（详见 `docs/RENDER-LOG.md`）。

为了仍然能真的产出画面，工程内置了一条不改任何场景代码的离线通路：

```
Act 组件 → renderToStaticMarkup() → SVG 字符串 → 栅格化 → PNG 序列 → ffmpeg
```

关键在于场景代码只依赖 `useCurrentFrame()` / `useVideoConfig()`，
`offline/shim.tsx` 用同样签名的实现顶上，因此**浏览器渲染与离线渲染是同一套画面逻辑**。

```bash
npm run offline:build      # esbuild 打包 offline/main.tsx → offline/main.cjs

# 出几张检查帧（1080p）
node offline/main.cjs --frames 570,1500,6300,6690 --out out/stills

# 渲染一段（420p–1080p 用 --density 控制：72=1:1，48=1280×720，36=960×540）
node offline/main.cjs --from 6300 --to 6690 --out out/seg --workers 5 --density 48

# 编码
node_modules/@ffmpeg-installer/linux-arm64/ffmpeg -y -framerate 30 \
  -i out/seg/f%05d.png -c:v libx264 -pix_fmt yuv420p -crf 18 out/seg.mp4
```

- `--engine resvg`（默认）纯 Rust、快 2 倍；但在部分平台上"镜头缩放 > 2"的 SVG 会让它 panic，
  所以本机改用 `--engine sharp`（librsvg）。两者都支持本工程用到的滤镜。
- 逐帧写盘、自带断点续渲（已存在的帧会跳过），进程被杀后原命令重跑即可。

---

## 7. 已知限制 / 还没做

- **音频没接**：没有音频文件，`AUDIO.enabled=false`，所以 `out/QianSiXi-MV.mp4` 是**无声**的 3:59 成片。
- **节拍未分析**：`BPM = 72` 是假设值；段落秒数是结构估算值（见第 3 节）。
- **本机没渲完整片**：这台设备（8 核、可用内存 ~1GB、proot）实测 1080p 约 0.4–0.6 帧/秒，
  整片 7170 帧需要 3.5 小时以上；本次真实渲出的是 **6300–7169（29 秒，第八幕高潮 + 完整第九幕）**，
  即 `out/QianSiXi-act8-9-1080p.mp4`，另有各幕 1080p 静帧（见 `docs/RENDER-LOG.md`）。
- **美术还只是第一版**：构图、运镜、结构是齐的，但角色造型（尤其是木偶的比例与
  妆面细节、操偶者的剪影）只到"可辨认的风格化矢量"级别，离"电影级"还差几轮打磨。
  下一步优先级：① 木偶头部与手的细节密度 ② 戏台纵深（前中后景遮挡 + 景深）
  ③ 火焰与断丝的光影耦合 ④ 真正的音频卡点。
