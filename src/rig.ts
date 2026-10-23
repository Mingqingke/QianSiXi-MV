/**
 * 骨骼解算（正向运动学）。
 *
 * 全片只有这一套骨架：木偶的每一个动作、每一根丝线的连接点、
 * 衣袖的迟滞方向，全部由这里的 Pose 推导出来。
 * 好处是丝线永远长在关节上，镜头切换时比例与结构绝不会跑掉。
 *
 * 坐标系：y 向下为正，原点在木偶胯部，+x 是木偶的"面朝前方"。
 * 角度单位是度：0 表示"垂直向下"，正值表示向前（+x）抬起。
 */

export type Pose = {
  rise: number; // 丝线提起，整体上移（负方向）
  sway: number; // 整体横向位移
  lean: number; // 躯干前倾
  headTurn: number; // 面朝向 -1..1（用横向缩放模拟，不是真正的 3D）
  headTilt: number; // 头部倾斜
  shNear: number;
  shFar: number;
  elNear: number;
  elFar: number;
  wrNear: number;
  wrFar: number;
  thNear: number;
  thFar: number;
  knNear: number;
  knFar: number;
  sleeveLag: number; // 衣袖飘带迟滞（度）
  tassel: number; // 头饰流苏摆动
};

export const ZERO_POSE: Pose = {
  rise: 0,
  sway: 0,
  lean: 0,
  headTurn: 0,
  headTilt: 0,
  shNear: 6,
  shFar: -4,
  elNear: 8,
  elFar: 6,
  wrNear: 0,
  wrFar: 0,
  thNear: -2,
  thFar: 2,
  knNear: 3,
  knFar: 3,
  sleeveLag: 0,
  tassel: 0,
};

const L = {
  torso: 96,
  neck: 22,
  head: 30,
  upperArm: 46,
  foreArm: 40,
  hand: 20,
  thigh: 46,
  shin: 44,
  shoulderW: 19,
};

export type Pt = {x: number; y: number};

const dir = (deg: number): Pt => {
  const r = (deg * Math.PI) / 180;
  return {x: Math.sin(r), y: Math.cos(r)};
};
const add = (p: Pt, d: Pt, k: number): Pt => ({x: p.x + d.x * k, y: p.y + d.y * k});

export type Rig = {
  hip: Pt;
  chest: Pt;
  neck: Pt;
  head: Pt;
  shoulderNear: Pt;
  shoulderFar: Pt;
  elbowNear: Pt;
  elbowFar: Pt;
  handNear: Pt;
  handFar: Pt;
  tipNear: Pt;
  tipFar: Pt;
  kneeNear: Pt;
  kneeFar: Pt;
  footNear: Pt;
  footFar: Pt;
  /** 丝线连接点：与控制者的手一一对应 */
  anchors: {handNear: Pt; handFar: Pt; shoulderNear: Pt; shoulderFar: Pt; head: Pt};
};

export const solve = (p: Pose): Rig => {
  const hip: Pt = {x: p.sway, y: p.rise};
  // 躯干方向：lean=0 时指向上方（y 为负）
  const torsoDir: Pt = {x: Math.sin((p.lean * Math.PI) / 180), y: -Math.cos((p.lean * Math.PI) / 180)};
  const chest = add(hip, torsoDir, L.torso);
  const neck = add(chest, torsoDir, L.neck);
  // 头部：方向随 headTilt 变化，但同一个 torsoDir 体系，保证不脱节
  const headDir: Pt = {
    x: Math.sin(((p.lean + p.headTilt * 0.6) * Math.PI) / 180),
    y: -Math.cos(((p.lean + p.headTilt * 0.6) * Math.PI) / 180),
  };
  const head = add(neck, headDir, L.head);
  // 肩的横向偏移方向 = 躯干法线
  const nx = Math.cos((p.lean * Math.PI) / 180);
  const ny = Math.sin((p.lean * Math.PI) / 180);
  const shoulderNear: Pt = {x: chest.x + nx * L.shoulderW, y: chest.y + ny * L.shoulderW};
  const shoulderFar: Pt = {x: chest.x - nx * L.shoulderW * 0.9, y: chest.y - ny * L.shoulderW * 0.9};

  const arm = (sh: Pt, a1: number, el: number, wr: number) => {
    const d1 = dir(a1);
    const elbow = add(sh, d1, L.upperArm);
    const d2 = dir(a1 + el);
    const hand = add(elbow, d2, L.foreArm);
    const d3 = dir(a1 + el + wr);
    const tip = add(hand, d3, L.hand);
    return {elbow, hand, tip};
  };
  const near = arm(shoulderNear, p.shNear, p.elNear, p.wrNear);
  const far = arm(shoulderFar, p.shFar, p.elFar, p.wrFar);

  const leg = (t: number, kn: number, side: number) => {
    const hipSide: Pt = {x: hip.x + side * 7, y: hip.y};
    const knee = add(hipSide, dir(t), L.thigh);
    const foot = add(knee, dir(t + kn), L.shin);
    return {knee, foot};
  };
  const lgN = leg(p.thNear, p.knNear, 1);
  const lgF = leg(p.thFar, p.knFar, -1);

  return {
    hip,
    chest,
    neck,
    head,
    shoulderNear,
    shoulderFar,
    elbowNear: near.elbow,
    elbowFar: far.elbow,
    handNear: near.hand,
    handFar: far.hand,
    tipNear: near.tip,
    tipFar: far.tip,
    kneeNear: lgN.knee,
    kneeFar: lgF.knee,
    footNear: lgN.foot,
    footFar: lgF.foot,
    anchors: {
      handNear: near.hand,
      handFar: far.hand,
      shoulderNear,
      shoulderFar,
      head: {x: head.x, y: head.y - 26},
    },
  };
};

/** 立正谢幕姿态（第八幕末尾与第九幕开头共用，保证两幕无缝衔接） */
export const BOW_POSE: Pose = {
  ...ZERO_POSE,
  rise: -4,
  lean: 13, // 欠身：这是"谢幕"，不是站着
  headTilt: 7, // 头微微低下
  headTurn: -0.5, // 但脸仍偏向操偶者的方向
  shNear: 34, // 双手收在身前（万福的起势）
  shFar: 26,
  elNear: 96,
  elFar: 88,
  wrNear: -34,
  wrFar: -28,
  thNear: 2,
  thFar: 6,
  tassel: 8,
};

/** 空台余烬中同一姿态的微小衰变（不是跳变，是从谢幕姿继续下沉） */
export const BOW_SETTLE: Pose = {
  ...BOW_POSE,
  rise: 0,
  lean: 16,
  headTilt: 12,
  shNear: 18,
  shFar: 14,
  elNear: 62,
  elFar: 56,
  wrNear: -18,
  wrFar: -14,
  tassel: 12,
};
