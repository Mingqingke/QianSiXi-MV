import {interpolate} from 'remotion';

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** 平滑步进，用于"预备—加速—减速—收势"里的减速段 */
export const smooth = (t: number) => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};
/** 先慢后快（预备） */
export const easeIn = (t: number) => {
  const x = clamp(t);
  return x * x;
};
/** 先快后缓（收势 / 惯性） */
export const easeOut = (t: number) => {
  const x = clamp(t);
  return 1 - (1 - x) * (1 - x);
};
/** 略带过冲的弹性收尾，damping 越大越实 */
export const overshoot = (t: number, damping = 0.6) => {
  const x = clamp(t);
  const e = 1 - Math.exp(-5 * x) * Math.cos(x * Math.PI * 2.2 * damping);
  return e;
};

/** 关键帧：[帧, 值][]，按帧插值，两端外保持恒定 */
export const kf = (frame: number, frames: [number, number][], ease = smooth): number => {
  if (frames.length === 0) return 0;
  if (frame <= frames[0][0]) return frames[0][1];
  const last = frames[frames.length - 1];
  if (frame >= last[0]) return last[1];
  for (let i = 0; i < frames.length - 1; i++) {
    const [f0, v0] = frames[i];
    const [f1, v1] = frames[i + 1];
    if (frame >= f0 && frame <= f1) {
      const t = f1 === f0 ? 1 : (frame - f0) / (f1 - f0);
      return lerp(v0, v1, ease(t));
    }
  }
  return last[1];
};

/** 0→1 的进入/退出包络：前 inFrames 淡入，后 outFrames 淡出 */
export const envelope = (frame: number, dur: number, inF = 12, outF = 12) =>
  Math.min(interpolate(frame, [0, inF], [0, 1], {extrapolateRight: 'clamp'}), interpolate(frame, [dur - outF, dur], [1, 0], {extrapolateLeft: 'clamp'}));
