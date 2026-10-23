/**
 * 时间轴配置 —— 全片唯一需要"对音频"的地方。
 *
 * ⚠️ 校准说明（重要）
 * 下面每一段的秒数都是按《牵丝戏》约 3:59 的常见发行版**估算**的结构，
 * 尚未与实际音频做过能量/节拍分析。拿到音频文件后按下面步骤校准即可：
 *   1) 把音频放到 public/audio.mp3
 *   2) npm run analyse  （输出静音段、能量峰值、候选切点，见 docs/RENDER-LOG.md）
 *   3) 把本文件里的 from/to 改成音频实际的段落起点
 * 段与段的边界是硬的（Sequence 首尾相接），所以只要秒数总和 = 音频时长，
 * 画面就自动铺满整首歌；单段改动不会影响其它段的内部节奏（内部全部用 0..1 进度）。
 */

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
};

export const AUDIO = {
  /** 是否挂载音频轨道。音频没放进去之前保持 false，避免渲染失败 */
  enabled: false,
  src: 'audio.mp3',
  /**
   * 歌曲总时长（秒）。已按原版母版校准：网易云 曲目 30352891（银临 / Aki阿杰）239.3s，
   * 即 3:59.30 → 239.3 × 30fps = 7179 帧（整数帧，不需要取整补偿）。
   */
  durationSec: 239.3,
};

export type Section = {
  id: string;
  act: number;
  name: string;
  from: number; // 秒
  to: number;
  /** 这一段画面上必须成立的事（给校准者看的备忘） */
  beat: string;
};

// SECTIONS 由 PHASES 派生（见文件末尾）

export const totalFrames = () => Math.round(AUDIO.durationSec * VIDEO.fps);

/** 把秒换算成帧；各幕在自己的 Sequence 里从 0 开始计时 */
export const secToFrames = (s: number) => Math.round(s * VIDEO.fps);

export const sectionFrames = (s: Section) => ({
  from: secToFrames(s.from),
  duration: Math.max(1, secToFrames(s.to) - secToFrames(s.from)),
});


/* ------------------------------------------------------------------ *
 * 真实歌曲结构（已用逐句 LRC 校准，见 docs/LYRICS-SYNC.md）
 *
 * 这一段是重构的"母版"：七个叙事阶段按原曲真实时间划分，
 * 阶段内再切镜头。改这里 = 改整部片的骨架。
 * ------------------------------------------------------------------ */
export type Phase = {
  id: string;
  name: string;
  from: number;
  to: number;
  /** 这一阶段里唱了哪几句（LYRICS 的下标区间，[a, b] 闭区间；空 = 纯器乐） */
  lyricRange?: [number, number];
  intent: string;
};

export const PHASES: Phase[] = [
  {
    id: 'p1',
    name: '一 · 孤独与相遇',
    from: 0,
    to: 44.95,
    lyricRange: [0, 3],
    intent: '0–23.65s 是 21.65 秒纯前奏：雪夜、破庙、白发老人、盖着布的女木偶。第一句唱词落下时，老人掀开布、擦拭、整理衣襟、检查关节。',
  },
  {
    id: 'p2',
    name: '二 · 相伴与相依',
    from: 44.95,
    to: 113.39,
    lyricRange: [4, 14],
    intent: '制作、修补、描妆；旅途、山水、石桥、夜灯；破旧衣袍 vs 精美戏服，粗糙手 vs 彩绘手指。',
  },
  {
    id: 'p3',
    name: '三 · 舞台与默契',
    from: 113.39,
    to: 135.31,
    intent: '21.92 秒无唱词的大空档：整部片唯一"完整一出戏"。控制杆—丝线—关节的关系必须看清；正面与幕后交叉剪辑。',
  },
  {
    id: 'p4',
    name: '四 · 岁月与矛盾',
    from: 135.31,
    to: 157.41,
    lyricRange: [15, 17],
    intent: '衰老、磨损、手抖、关节老化、环境破败；华丽与潦倒的反差；矛盾靠距离与光影表达。',
  },
  {
    id: 'p5',
    name: '五 · 风雪与告别',
    from: 157.41,
    to: 184.94,
    lyricRange: [18, 22],
    intent: '白发苍苍、昏灯、窗上风雪、颤抖的手、木偶彩绘泪痕。',
  },
  {
    id: 'p6',
    name: '六 · 焚毁与最后谢幕',
    from: 184.94,
    to: 225.34,
    lyricRange: [23, 29],
    intent: '把木偶投入火中 → 静止 → 火光中最后一次谢幕 → 丝线逐根断裂 → 老人只接住灰烬。谢幕动作必须复用前面的舞台姿态。',
  },
  {
    id: 'p7',
    name: '七 · 余烬与空戏台',
    from: 225.34,
    to: 239.3,
    intent: '13.96 秒纯尾奏：老人独坐灰烬旁，镜头拉远成空戏台，风雪停息，最后一点晨光。',
  },
];

/** 某个时刻属于哪一阶段 */
export const phaseAt = (sec: number): Phase => PHASES.find((p) => sec >= p.from && sec < p.to) ?? PHASES[PHASES.length - 1];


/** 分幕表：直接由七阶段派生，保证"阶段 / 镜头 / 字幕"只维护一套时间 */
export const SECTIONS: Section[] = PHASES.map((ph, i) => ({
  id: ph.id,
  act: i + 1,
  name: ph.name,
  from: ph.from,
  to: ph.to,
  beat: ph.intent,
}));
