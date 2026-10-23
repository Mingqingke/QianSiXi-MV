import {Pose, ZERO_POSE} from '../rig';
import {PUPPETEER_REST, PuppeteerPose} from '../components/Puppeteer';
import {CamKf, CamSpec} from '../components/Camera';
import {kf, smooth, easeOut, easeIn} from './motion';

/**
 * 关键帧工具：全部用 0..1 的"幕内进度"写，而不是绝对帧。
 * 这样改音频段落长度时，动作节奏自动跟着缩放，不用重写任何一幕。
 */

export type PoseKey = {p: number; pose: Partial<Pose>};
export type PuppetKey = {p: number; pose: Partial<PuppeteerPose>};

const fieldsOf = <T extends object>(keys: {p: number; pose: Partial<T>}[]): (keyof T)[] => {
  const set = new Set<keyof T>();
  for (const k of keys) for (const f of Object.keys(k.pose) as (keyof T)[]) set.add(f);
  return [...set];
};

export const poseAt = (progress: number, keys: PoseKey[], ease = smooth): Pose => {
  const out: Pose = {...ZERO_POSE};
  for (const f of fieldsOf<Pose>(keys)) {
    const track: [number, number][] = [];
    let last = (keys[0].pose[f] ?? ZERO_POSE[f]) as number;
    // 第一个关键帧之前保持第一个值；中间缺省沿用上一个显式值
    for (const k of keys) {
      if (k.pose[f] !== undefined) {
        last = k.pose[f] as number;
        track.push([k.p * 1000, last]);
      }
    }
    if (track.length === 0) continue;
    if (track[0][0] > 0) track.unshift([0, track[0][1]]);
    out[f] = kf(progress * 1000, track, ease) as Pose[typeof f];
  }
  return out;
};

export const puppeteerAt = (progress: number, keys: PuppetKey[], ease = smooth): PuppeteerPose => {
  const out: PuppeteerPose = {...PUPPETEER_REST};
  for (const f of fieldsOf<PuppeteerPose>(keys)) {
    const track: [number, number][] = [];
    for (const k of keys) {
      if (k.pose[f] !== undefined) track.push([k.p * 1000, k.pose[f] as number]);
    }
    if (track.length === 0) continue;
    if (track[0][0] > 0) track.unshift([0, track[0][1]]);
    out[f] = kf(progress * 1000, track, ease) as PuppeteerPose[typeof f];
  }
  return out;
};

/** 把 0..1 进度上的镜头关键帧转成 CamSpec（帧号 = 进度 × 幕长） */
export const cam = (duration: number, keys: (Omit<CamKf, 'at'> & {p: number})[], shake = 0, breath = 0): CamSpec => ({
  kfs: keys.map(({p, ...rest}) => ({at: p * duration, ...rest})),
  shake,
  breath,
});

export const easeOutFn = easeOut;
export const easeInFn = easeIn;
