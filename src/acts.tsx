import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Scene, SceneProps} from './components/Scene';
import {poseAt, puppeteerAt, cam} from './lib/tracks';
import {BOW_POSE, Pose, ZERO_POSE} from './rig';
import {clamp, lerp, kf} from './lib/motion';
import {PHASES} from './timeline';

/**
 * 七幕 = 原曲真实结构（见 docs/LYRICS-SYNC.md）。
 *
 * 每一幕内部的镜头切点都写在 cam 的 p 里，注释标了对应的真实秒数，
 * 方便你拿到自己的音频后再对一遍。
 *
 * 叙事骨架（与歌词对齐）：
 *   P1 0–44.95     孤独与相遇：21.65s 纯前奏里是雪夜、破台、白发老人、盖着的木偶
 *   P2 44.95–113.39 相伴与相依：描妆 → 挂丝（丝线第一次出现，有明确起点）→ 山水旅途 → 夜灯
 *   P3 113.39–135.31 舞台与默契：21.92s 无唱词，整部片完整的一出戏（正面/幕后交叉）
 *   P4 135.31–157.41 岁月与矛盾：手抖、关节老化、距离
 *   P5 157.41–184.94 风雪与告别：泪痕、颤手、拉远
 *   P6 184.94–225.34 焚毁与谢幕：投入火中 → 静止 → 抬头 → 断丝 → 独自谢幕 → 接灰烬
 *   P7 225.34–239.3  余烬与空戏台：独坐、拉远、风雪停、微弱晨光
 */

/** 把"秒"换算成幕内进度，避免手填百分比 */
const at = (sec: number, phaseFrom: number, phaseTo: number) => clamp((sec - phaseFrom) / (phaseTo - phaseFrom));

type Ctx = {
  f: number;
  d: number;
  p: number;
  W: number;
  H: number;
  horizon: number;
  floor: number;
  ps: number;
  px: number;
  py: number;
  os: number;
  oy: number;
};

const useCtx = (): Ctx => {
  const f = useCurrentFrame();
  const {durationInFrames: d, width: W, height: H} = useVideoConfig();
  const floor = H * 0.9;
  const ps = 1.7;
  const os = 1.2;
  return {
    f,
    d,
    p: d > 1 ? f / (d - 1) : 0,
    W,
    H,
    horizon: H * 0.54,
    floor,
    ps,
    px: W * 0.5,
    py: floor - 90 * ps - 80,
    os,
    oy: floor - 250 * os,
  };
};

/** 镜头中心对准某个世界坐标点 */
const focus = (cx: number, cy: number, z: number, W: number, H: number) => ({
  zoom: z,
  x: -(cx - W / 2) * z,
  y: -(cy - H / 2) * z,
});

/* ================================================================== *
 * 一 · 孤独与相遇（0 – 44.95）
 * 前奏 21.65 秒没有一句唱词：这一段只干一件事——把"孤独"和"珍视"立住。
 * 丝线在这 45 秒里完全不存在（她还没上丝）。
 * ================================================================== */
export const Act1: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;
  const headY = c.py - 150 * c.ps;

  // 镜头：远景 → 掀布的手 → 木偶的脸 → 关节 → 中景双人
  const k = (sec: number) => at(sec, 0, 44.95);
  const shots = [
    {p: 0, ...focus(c.px, c.horizon + 60, 1.0, W, H)},
    {p: k(20.4), ...focus(c.px, c.horizon + 90, 1.16, W, H)},
    {p: k(23.4), ...focus(c.px + 20, headY + 40, 3.27, W, H)},
    {p: k(26.2), ...focus(c.px + 10, headY + 10, 4.36, W, H)},
    {p: k(34.4), ...focus(c.px + 90, c.py - 40 * c.ps, 3.64, W, H)},
    {p: k(40.2), ...focus(c.px + 40, c.py - 70 * c.ps, 2.0, W, H)},
    {p: 1, ...focus(c.px + 30, c.py - 60 * c.ps, 1.75, W, H)},
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.35, 0.004),
    stageVisible: 0.62,
    stage: {open: 0, worn: 1, warm: lerp(0.03, 0.1, p), lantern: lerp(0, 0.16, clamp(p / 0.5)), frost: 1},
    mountains: {reveal: lerp(0.2, 0.42, p), travel: 0, cold: 1, opacity: 0.3},
    puppeteer: {
      x: W * 0.66,
      y: c.oy + 26,
      scale: c.os,
      pose: puppeteerAt(p, [
        // 弯下腰擦木偶：靠前倾角度表达"蹲伏"，不假装跪
        {p: 0, pose: {lean: 34, armNear: 62, armFar: 48, elbowNear: 52, elbowFar: 40, age: 0.85, tremor: 0.6}},
        {p: 0.52, pose: {lean: 40, armNear: 74, armFar: 58, elbowNear: 62, elbowFar: 48, age: 0.85, tremor: 0.8}},
        {p: 0.72, pose: {lean: 30, armNear: 66, armFar: 52, elbowNear: 48, elbowFar: 38, age: 0.85, tremor: 0.7}},
        {p: 1, pose: {lean: 24, armNear: 40, armFar: 34, elbowNear: 28, elbowFar: 24, age: 0.85, tremor: 0.9}},
      ]),
      opacity: 1,
      depth: 'behind',
    },
    puppet: {
      x: c.px - 10,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 静止、垂首、闭眼；被擦拭时只有极小的迟滞
        {p: 0, pose: {lean: 6, headTilt: 8, headTurn: 0.15, shNear: 4, shFar: 2, elNear: 6, elFar: 5, rise: 0}},
        {p: 0.5, pose: {lean: 5, headTilt: 9, headTurn: 0.1, shNear: 5, shFar: 3, elNear: 8, elFar: 6, rise: -1}},
        {p: 0.72, pose: {lean: 3, headTilt: 4, headTurn: 0.2, shNear: 8, shFar: 4, elNear: 10, elFar: 8, rise: -2, sleeveLag: 3}},
        {p: 1, pose: {lean: 2, headTilt: 1, headTurn: 0.25, shNear: 10, shFar: 5, elNear: 12, elFar: 9, rise: -2, sleeveLag: 4, tassel: 2}},
      ]),
      eyesOpen: kf(c.f, [
        [0, 0],
        [k(23.65) * c.d, 0],
        [k(25.6) * c.d, 0.18],
        [k(31) * c.d, 0.55],
        [c.d, 0.6],
      ]),
      crack: 0.12,
      opacity: 1,
    },
    // 还没有丝线，也没有控制杆
    threads: {tension: 0, opacity: 0, visible: 0, bar: 0, mount: 0},
    particles: {snow: 0.9, dust: 0.4, wind: 0.4},
    light: {x: W * 0.46, y: c.horizon - H * 0.12, r: W * 0.4, intensity: lerp(0.26, 0.4, p), cool: 0.85},
    exposure: lerp(0.62, 0.82, clamp(p / 0.6)),
    film: {grain: 0.8, vignette: 1},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 二 · 相伴与相依（44.95 – 113.39）
 * 两件关键事：① 描妆 ② 挂丝 —— 丝线在这里第一次出现，有杆、有手、有顺序。
 * ================================================================== */
export const Act2: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;
  const headY = c.py - 150 * c.ps;
  const K = (sec: number) => at(sec, 44.95, 113.39);

  const shots = [
    {p: 0, ...focus(c.px + 4, headY + 6, 3.76, W, H)}, // 描妆特写
    {p: K(58), ...focus(c.px + 6, headY + 2, 3.39, W, H)},
    {p: K(75), ...focus(c.px, c.py - 250 * c.ps, 1.82, W, H)}, // 挂丝：看得到杆与手
    {p: K(91), ...focus(c.px + 130, c.horizon, 1.05, W, H)}, // 旅途远景
    {p: K(104), ...focus(c.px + 190, c.horizon - 20, 1.2, W, H)},
    {p: 1, ...focus(c.px + 30, c.py - 110 * c.ps, 1.39, W, H)},
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.3, 0.005),
    stageVisible: lerp(1, 0.34, clamp((p - 0.26) / 0.2) * (1 - clamp((p - 0.78) / 0.14))),
    stage: {
      open: 0,
      worn: lerp(0.95, 0.55, clamp((p - 0.26) / 0.3)),
      warm: lerp(0.12, 0.5, clamp(p / 0.6)),
      lantern: lerp(0.2, 0.6, clamp(p / 0.5)),
      frost: lerp(1, 0.3, clamp(p / 0.5)),
    },
    mountains: {
      reveal: lerp(0.4, 1, clamp((p - 0.26) / 0.3)),
      travel: clamp((p - 0.26) / 0.5) * 1.4,
      cold: lerp(0.9, 0.1, clamp((p - 0.3) / 0.4)),
      opacity: lerp(0.35, 0.95, clamp((p - 0.26) / 0.3)),
    },
    bridge: {x: W * 0.82 - clamp((p - 0.3) / 0.4) * 240, y: H * 0.66, opacity: clamp((p - 0.34) / 0.2) * 0.85},
    puppeteer: {
      x: lerp(W * 0.7, W * 0.78, p),
      y: c.oy + lerp(24, 0, clamp((p - 0.26) / 0.2)),
      scale: c.os,
      pose: puppeteerAt(p, [
        // 描妆：极轻的手上动作
        {p: 0, pose: {lean: 30, armNear: 70, armFar: 40, elbowNear: 58, elbowFar: 30, age: 0.84, tremor: 0.7}},
        {p: 0.24, pose: {lean: 28, armNear: 66, armFar: 36, elbowNear: 54, elbowFar: 28, age: 0.84, tremor: 0.9}},
        // 挂丝：两只手一起抬到控制杆
        {p: 0.34, pose: {lean: 16, armNear: 74, armFar: 66, elbowNear: 44, elbowFar: 40, age: 0.83, tremor: 0.8}},
        // 旅途：正常牵线行走
        {p: 0.5, pose: {lean: 10, armNear: 54, armFar: 48, elbowNear: 30, elbowFar: 26, age: 0.8, tremor: 0.9}},
        {p: 0.78, pose: {lean: 12, armNear: 50, armFar: 44, elbowNear: 28, elbowFar: 24, age: 0.82, tremor: 1.1}},
        {p: 1, pose: {lean: 10, armNear: 56, armFar: 50, elbowNear: 32, elbowFar: 28, age: 0.84, tremor: 1.2}},
      ]),
      opacity: clamp((p - 0.06) / 0.1),
      depth: 'behind',
    },
    puppet: {
      x: c.px - 10,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        {p: 0, pose: {lean: 2, headTilt: 2, headTurn: 0.25, shNear: 10, shFar: 5, elNear: 12, elFar: 9, rise: -2}},
        // 上丝后第一次被提起：肩先动，头后动
        {p: 0.34, pose: {lean: 0, headTilt: -2, headTurn: 0.1, shNear: 24, shFar: 14, elNear: 22, elFar: 16, rise: -8, sleeveLag: 6}},
        // 旅途上的行走：交替前后摆
        {p: 0.46, pose: {lean: 5, headTilt: 2, headTurn: 0.3, shNear: 34, shFar: 22, elNear: 28, elFar: 20, thNear: -6, thFar: 6, rise: -4, sleeveLag: 10}},
        {p: 0.56, pose: {lean: 3, headTilt: -2, headTurn: 0.45, shNear: 26, shFar: 30, elNear: 20, elFar: 26, thNear: 6, thFar: -4, rise: -6, sleeveLag: -8, tassel: 4}},
        {p: 0.66, pose: {lean: 6, headTilt: 3, headTurn: 0.2, shNear: 36, shFar: 18, elNear: 30, elFar: 22, thNear: -4, thFar: 8, rise: -3, sleeveLag: 12}},
        // 回到灯下：试着抬袖
        {p: 0.84, pose: {lean: 1, headTilt: -4, headTurn: 0.35, shNear: 72, shFar: 40, elNear: 46, elFar: 30, rise: -10, sleeveLag: 14, tassel: -5}},
        {p: 1, pose: {lean: 4, headTilt: 0, headTurn: 0.2, shNear: 44, shFar: 28, elNear: 32, elFar: 24, rise: -5, sleeveLag: 8}},
      ]),
      eyesOpen: 0.75,
      crack: 0.1,
    },
    threads: {
      tension: kf(c.f, [
        [0, 0.1],
        [K(75) * c.d, 0.35],
        [K(85) * c.d, 0.62],
        [c.d, 0.7],
      ]),
      opacity: 0.9,
      visible: 1,
      // 挂丝：杆先亮起来，再一根根把线挂上
      bar: clamp((p - 0.3) / 0.06),
      mount: clamp((p - 0.33) / 0.07),
      stagger: 0.05,
    },
    particles: {snow: lerp(0.8, 0.15, clamp(p / 0.5)), dust: 0.5, wind: lerp(0.4, 0.6, p)},
    light: {x: W * 0.5, y: c.horizon - H * 0.18, r: W * 0.5, intensity: lerp(0.35, 0.55, p), cool: lerp(0.9, 0.1, clamp(p / 0.6))},
    exposure: lerp(0.82, 0.96, clamp(p / 0.4)),
    film: {grain: 0.65, vignette: 0.95},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 三 · 舞台与默契（113.39 – 135.31）
 * 21.92 秒、一句唱词都没有：这是整部片唯一"完整的一出戏"。
 * 起势 → 抬袖 → 转身 → 亮相 → 旋身 → 收势定格。
 * ================================================================== */
export const Act3: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;

  const shots = [
    {p: 0, zoom: 1.04, y: 46, x: 0}, // 正面低机位
    {p: 0.2, zoom: 1.22, y: 60, x: 0},
    {p: 0.38, zoom: 1.3, y: 30, x: -70, rot: -5}, // 侧向环绕
    {p: 0.56, zoom: 1.55, y: 10, x: -40, rot: -3}, // 幕后
    {p: 0.7, zoom: 2.61, x: 90, y: 120, rot: 0}, // 杆与丝线特写
    {p: 0.84, zoom: 1.9, x: 20, y: 40, rot: 0},
    {p: 1, zoom: 1.16, x: 0, y: 30, rot: 0}, // 收势后拉回
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.55, 0.006),
    stageVisible: 1,
    stage: {open: lerp(0, 1, clamp(p / 0.16)), worn: 0.28, warm: 0.62, lantern: 0.9},
    mountains: {reveal: 0.45, travel: 0.3, cold: 0.1, opacity: 0.45},
    foreground: 0.5, // 台口虚焦，压出纵深
    puppeteer: {
      x: W * 0.74,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        {p: 0, pose: {lean: 12, armNear: 56, armFar: 50, elbowNear: 34, elbowFar: 30, age: 0.82, tremor: 0.8}},
        {p: 0.3, pose: {lean: 10, armNear: 62, armFar: 44, elbowNear: 38, elbowFar: 26, age: 0.82, tremor: 0.9}},
        {p: 0.55, pose: {lean: 14, armNear: 70, armFar: 58, elbowNear: 44, elbowFar: 36, age: 0.83, tremor: 1.0}},
        {p: 0.8, pose: {lean: 9, armNear: 52, armFar: 46, elbowNear: 30, elbowFar: 26, age: 0.83, tremor: 1.1}},
        {p: 1, pose: {lean: 11, armNear: 58, armFar: 50, elbowNear: 34, elbowFar: 28, age: 0.84, tremor: 1.2}},
      ]),
      opacity: 1,
      depth: p > 0.45 && p < 0.62 ? 'front' : 'behind', // 这一段之后切到幕后视角
    },
    puppet: {
      x: c.px - 30,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 起势：垂袖、低头
        {p: 0, pose: {lean: 6, headTilt: 6, headTurn: 0.2, shNear: 8, shFar: 4, elNear: 10, elFar: 8, rise: 0}},
        // 抬袖：肩先被拉
        {p: 0.14, pose: {lean: 0, headTilt: -4, headTurn: 0.4, shNear: 88, shFar: 30, elNear: 54, elFar: 38, wrNear: -18, rise: -8, sleeveLag: 16}},
        // 转身：躯干、头、飘带依次
        {p: 0.32, pose: {lean: 9, headTilt: 8, headTurn: 0.75, shNear: 130, shFar: 62, elNear: 22, elFar: 32, rise: -4, thNear: -8, thFar: 10, sleeveLag: -12, tassel: 9}},
        // 亮相：正面、双臂展开、抬头
        {p: 0.5, pose: {lean: -3, headTilt: -6, headTurn: 0.1, shNear: 104, shFar: 96, elNear: 40, elFar: 44, wrNear: -8, wrFar: 8, rise: -12, sleeveLag: 6}},
        // 旋身：后半圈，动作幅度最大
        {p: 0.66, pose: {lean: 12, headTilt: 10, headTurn: -0.6, shNear: 120, shFar: 40, elNear: 30, elFar: 54, rise: -3, thNear: 10, thFar: -6, sleeveLag: -16, tassel: -8}},
        // 收势：慢慢落回，最后一拍停住
        {p: 0.88, pose: {lean: 3, headTilt: -2, headTurn: 0.3, shNear: 46, shFar: 30, elNear: 34, elFar: 26, rise: -6, sleeveLag: 10}},
        {p: 1, pose: {lean: 2, headTilt: 0, headTurn: 0.25, shNear: 42, shFar: 28, elNear: 32, elFar: 24, rise: -5, sleeveLag: 6}},
      ]),
      eyesOpen: 1,
    },
    threads: {
      tension: 0.82,
      opacity: 0.95,
      visible: 1,
      bar: 1,
      mount: 1,
    },
    particles: {dust: 0.55, wind: 0.25},
    light: {x: W * 0.46, y: c.horizon - H * 0.2, r: W * 0.44, intensity: 0.6},
    exposure: 0.98,
    film: {grain: 0.45, vignette: 0.78},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 四 · 岁月与矛盾（135.31 – 157.41）
 * 手抖、关节老化、距离。不靠表情，靠"看"和"不看"。
 * ================================================================== */
export const Act4: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;

  const shots = [
    {p: 0, zoom: 3.03, x: 260, y: 220}, // 老人手部特写（发抖）
    {p: 0.26, zoom: 2.67, x: 60, y: 150}, // 木偶关节
    {p: 0.5, zoom: 1.6, x: 0, y: 40}, // 中景：两人距离
    {p: 0.78, zoom: 1.2, x: -20, y: 20},
    {p: 1, zoom: 0.95, x: -30, y: 0}, // 拉远
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.22, 0.003),
    stageVisible: 1,
    stage: {open: 0.7, worn: lerp(0.5, 0.96, clamp(p / 0.7)), warm: lerp(0.34, 0.16, p), lantern: lerp(0.5, 0.22, p), frost: 0.35},
    mountains: {reveal: 0.6, travel: 0.4, cold: lerp(0.3, 0.75, p), opacity: 0.28},
    puppeteer: {
      x: W * 0.78,
      y: c.oy + 10 * p,
      scale: c.os,
      pose: puppeteerAt(p, [
        {p: 0, pose: {lean: 16, armNear: 48, armFar: 42, elbowNear: 26, elbowFar: 22, age: 0.88, tremor: 3.0}},
        {p: 0.4, pose: {lean: 20, armNear: 40, armFar: 36, elbowNear: 20, elbowFar: 18, age: 0.92, tremor: 3.6}},
        // 矛盾：手垂下，又抬起来
        {p: 0.6, pose: {lean: 24, armNear: 22, armFar: 20, elbowNear: 10, elbowFar: 9, age: 0.94, tremor: 4.2}},
        {p: 0.8, pose: {lean: 18, armNear: 44, armFar: 38, elbowNear: 24, elbowFar: 20, age: 0.95, tremor: 4.6}},
        {p: 1, pose: {lean: 20, armNear: 38, armFar: 34, elbowNear: 20, elbowFar: 17, age: 0.96, tremor: 5.0}},
      ]),
      opacity: 0.95,
      depth: 'behind',
    },
    puppet: {
      x: c.px - 40,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        {p: 0, pose: {lean: 3, headTilt: 2, headTurn: -0.5, shNear: 30, shFar: 20, elNear: 24, elFar: 18, rise: -3}},
        // 被放下时失重下沉，再勉强站住
        {p: 0.55, pose: {lean: 8, headTilt: 10, headTurn: -0.2, shNear: 14, shFar: 10, elNear: 10, elFar: 8, rise: 5, sleeveLag: -8}},
        {p: 0.8, pose: {lean: 4, headTilt: 6, headTurn: -0.55, shNear: 22, shFar: 15, elNear: 16, elFar: 13, rise: 1, sleeveLag: -4}},
        {p: 1, pose: {lean: 5, headTilt: 8, headTurn: -0.6, shNear: 16, shFar: 12, elNear: 12, elFar: 10, rise: 3}},
      ]),
      eyesOpen: lerp(0.9, 0.4, clamp(p / 0.8)),
      crack: clamp(p / 0.85),
      ash: clamp((p - 0.5) / 0.5) * 0.25,
      tear: 0.5,
    },
    threads: {
      tension: lerp(0.7, 0.24, p),
      opacity: lerp(0.85, 0.6, p),
      visible: 1,
      bar: 1,
      mount: 1,
    },
    particles: {dust: 0.6, snow: 0.25, wind: 0.3},
    light: {x: W * 0.48, y: c.horizon - H * 0.2, r: W * 0.36, intensity: lerp(0.45, 0.28, p), cool: lerp(0.2, 0.6, p)},
    exposure: lerp(0.94, 0.86, p),
    film: {grain: 0.6, vignette: 1},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 五 · 风雪与告别（157.41 – 184.94）
 * 泪痕 → 颤手 → 拉远。丝线开始松弛，个别已经拉不住。
 * ================================================================== */
export const Act5: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;
  const headY = c.py - 150 * c.ps;

  const z = p < 0.24 ? 6.8 : p < 0.46 ? 5.4 : lerp(2.6, 0.92, clamp((p - 0.46) / 0.54));
  const cxw = p < 0.24 ? c.px + 14 : p < 0.46 ? W * 0.78 : lerp(c.px - 60, c.px - 100, clamp((p - 0.46) / 0.54));
  const cyw = p < 0.24 ? headY + 26 : p < 0.46 ? c.oy - 150 * c.os : lerp(headY + 80, c.py - 40, clamp((p - 0.46) / 0.54));

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: {kfs: [{at: 0, ...focus(cxw, cyw, z, W, H)}], shake: 0.3, breath: 0.004},
    stageVisible: 1,
    stage: {open: 0.3, worn: 0.85, warm: 0.12, lantern: 0.3, frost: 1},
    mountains: {reveal: 0.55, travel: 0.5, cold: 1, opacity: 0.22},
    puppeteer: {
      x: lerp(W * 0.76, W * 0.8, p),
      y: c.oy + 8,
      scale: c.os,
      pose: puppeteerAt(p, [
        {p: 0, pose: {lean: 22, armNear: 34, armFar: 30, elbowNear: 16, elbowFar: 14, age: 0.96, tremor: 4.4}},
        {p: 0.5, pose: {lean: 25, armNear: 26, armFar: 24, elbowNear: 12, elbowFar: 11, age: 0.97, tremor: 5.2}},
        {p: 1, pose: {lean: 26, armNear: 20, armFar: 18, elbowNear: 9, elbowFar: 8, age: 0.98, tremor: 5.6}},
      ]),
      opacity: 0.92,
      depth: 'behind',
    },
    puppet: {
      x: c.px - 130,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        {p: 0, pose: {lean: 5, headTilt: 4, headTurn: -0.55, shNear: 24, shFar: 16, elNear: 18, elFar: 14, rise: 3}},
        {p: 0.3, pose: {lean: 3, headTilt: 10, headTurn: -0.7, shNear: 18, shFar: 12, elNear: 14, elFar: 11, rise: 4, tassel: 9}},
        {p: 0.72, pose: {lean: 6, headTilt: 6, headTurn: -0.5, shNear: 12, shFar: 9, elNear: 9, elFar: 7, rise: 6, sleeveLag: -12}},
        {p: 1, pose: {lean: 7, headTilt: 3, headTurn: -0.35, shNear: 9, shFar: 7, elNear: 7, elFar: 6, rise: 7, sleeveLag: -14}},
      ]),
      eyesOpen: 0.75,
      tear: clamp((p - 0.12) / 0.2),
      crack: 0.7,
      ash: 0.25,
    },
    threads: {
      tension: lerp(0.55, 0.16, p),
      broken: clamp((p - 0.55) / 0.6) * 0.3, // 个别先断，还没断完
      opacity: 0.55,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.2,
    },
    particles: {snow: 1, dust: 0.2, wind: 0.7},
    light: {x: W * 0.4, y: c.horizon - H * 0.2, r: W * 0.4, intensity: lerp(0.3, 0.2, p), cool: 1},
    exposure: lerp(0.9, 0.84, p),
    film: {grain: 0.55, vignette: 1},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 六 · 焚毁与最后谢幕（184.94 – 225.34）
 * 全片的戏眼：投入火中 → 静止 → 抬头 → 断丝 → 独自谢幕 → 老人只接住灰烬。
 * 谢幕姿态 = BOW_POSE，与前面第三幕的收势同源。
 * ================================================================== */
export const Act6: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;

  const fireI = kf(c.f, [
    [0, 0],
    [0.06 * c.d, 0.2],
    [0.2 * c.d, 0.45],
    [0.3 * c.d, 0.8],
    [0.45 * c.d, 1],
    [0.88 * c.d, 1],
    [0.96 * c.d, 0.35],
    [c.d, 0.12],
  ]);
  const broken = kf(c.f, [
    [0, 0],
    [0.5 * c.d, 0],
    [0.68 * c.d, 1],
    [c.d, 1],
  ]);

  const shots = [
    {p: 0, zoom: 1.02, y: 40, x: 0}, // 抱着木偶走向柴堆
    {p: 0.16, zoom: 1.3, y: 60, x: -30},
    {p: 0.28, zoom: 1.8, y: 70, x: 20}, // 投入火中
    {p: 0.44, zoom: 1.58, y: 60, x: 10}, // 火中静止、抬头
    {p: 0.58, zoom: 1.82, y: 50, x: 0, rot: -1}, // 断丝
    {p: 0.74, zoom: 1.95, y: 95, x: 10, rot: 0}, // 谢幕（火要完整在画面里）
    {p: 0.9, zoom: 1.6, y: 80, x: 0}, // 老人伸手
    {p: 1, zoom: 1.45, y: 70, x: 0},
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.5, 0.005),
    stageVisible: lerp(1, 0.7, p),
    stage: {open: 0.34, worn: 0.98, warm: 0.1, lantern: lerp(0.22, 0.06, p), frost: 0.5},
    mountains: {reveal: 0.3, travel: 0.4, cold: 0.9, opacity: 0.16},
    puppeteer: {
      x: W * 0.78,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        {p: 0, pose: {lean: 26, armNear: 20, armFar: 18, elbowNear: 10, elbowFar: 9, age: 0.98, tremor: 5}},
        // 放下：双手前伸
        {p: 0.2, pose: {lean: 34, armNear: 76, armFar: 70, elbowNear: 30, elbowFar: 26, age: 0.98, tremor: 4}},
        {p: 0.3, pose: {lean: 38, armNear: 88, armFar: 82, elbowNear: 20, elbowFar: 18, age: 0.98, tremor: 3}},
        // 丝线断了，手慢慢落下
        {p: 0.62, pose: {lean: 30, armNear: 44, armFar: 40, elbowNear: 16, elbowFar: 14, age: 0.98, tremor: 2}},
        // 最后的徒劳：伸手去接
        {p: 0.86, pose: {lean: 40, armNear: 84, armFar: 78, elbowNear: 26, elbowFar: 22, age: 0.99, tremor: 3.4}},
        {p: 1, pose: {lean: 44, armNear: 72, armFar: 66, elbowNear: 34, elbowFar: 30, age: 1, tremor: 2.6}},
      ]),
      opacity: lerp(0.95, 0.8, p),
      depth: 'behind',
    },
    puppet: {
      x: c.px - 60,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        // 被抱/被举：身体微微后仰，四肢松弛
        {p: 0, pose: {lean: -4, headTilt: 8, headTurn: -0.2, shNear: 16, shFar: 12, elNear: 12, elFar: 10, rise: -4}},
        {p: 0.14, pose: {lean: -8, headTilt: 12, headTurn: 0, shNear: 10, shFar: 8, elNear: 8, elFar: 6, rise: -10, sleeveLag: -10}},
        // 落进火里：失重
        {p: 0.26, pose: {lean: 10, headTilt: 14, headTurn: 0.1, shNear: 4, shFar: 4, elNear: 4, elFar: 4, rise: 8, sleeveLag: -14}},
        // 静止，然后抬头（主动，不是被拉）
        {p: 0.4, pose: {lean: 2, headTilt: 6, headTurn: -0.1, shNear: 8, shFar: 6, elNear: 6, elFar: 5, rise: 4}},
        {p: 0.52, pose: {lean: -2, headTilt: -8, headTurn: -0.35, shNear: 20, shFar: 14, elNear: 16, elFar: 12, rise: 0}},
        // 断丝之后：抬手、转向老人
        {p: 0.62, pose: {lean: -3, headTilt: -10, headTurn: -0.5, shNear: 44, shFar: 26, elNear: 34, elFar: 22, rise: -2, sleeveLag: 8}},
        // 独自谢幕（与第三幕收势同源）
        {p: 0.76, pose: {...BOW_POSE, lean: -9, headTilt: -12, rise: -8}},
        {p: 0.86, pose: BOW_POSE},
        {p: 1, pose: BOW_POSE},
      ]),
      eyesOpen: p < 0.5 ? 0.85 : 1,
      crack: 0.6,
      ash: lerp(0.15, 0.5, p),
      tear: 0.7,
    },
    threads: {
      tension: lerp(0.6, 0.1, clamp(p / 0.45)),
      broken,
      glow: 1,
      opacity: 0.95,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.1,
    },
    fire: {intensity: fireI, x: c.px - 70, y: c.floor + 4, width: W * 0.5, height: H * 0.4, embers: 60},
    particles: {ash: 0.6, dust: 0.3, wind: 0.4},
    light: {x: c.px - 70, y: c.floor - H * 0.24, r: W * 0.5, intensity: lerp(0.7, 0.85, p)},
    exposure: lerp(0.98, 0.93, p),
    film: {grain: 0.65, vignette: 1},
  };
  return <Scene {...spec} />;
};

/* ================================================================== *
 * 七 · 余烬与空戏台（225.34 – 239.3）
 * 结尾不黑屏：留下老人、断丝、灰烬与一点晨光。
 * 第一帧接着第六幕的最后一帧（同一姿态、同一机位、同一曝光）。
 * ================================================================== */
export const Act7: React.FC = () => {
  const c = useCtx();
  const {p, W, H} = c;

  const shots = [
    {p: 0, zoom: 1.5, y: 26, x: 0},
    {p: 0.28, zoom: 1.16, y: 22, x: 0},
    {p: 0.62, zoom: 0.72, y: 0, x: 0},
    {p: 0.86, zoom: 0.56, y: -8, x: 0},
    {p: 1, zoom: 0.52, y: -12, x: 0},
  ];

  const spec: SceneProps = {
    frame: c.f,
    width: W,
    height: H,
    cam: cam(c.d, shots, 0.12, 0.002),
    stageVisible: lerp(0.7, 0.42, clamp(p / 0.7)),
    stage: {open: 0.34, worn: 1, warm: lerp(0.1, 0.06, p), lantern: lerp(0.06, 0, clamp(p / 0.4)), frost: 0.4},
    mountains: {reveal: 0.3, travel: 0.4, cold: lerp(0.9, 0.55, p), opacity: lerp(0.16, 0.06, p)},
    puppeteer: {
      x: W * 0.78,
      y: c.oy,
      scale: c.os,
      pose: puppeteerAt(p, [
        // 独坐：整个身体沉下去
        {p: 0, pose: {lean: 44, armNear: 72, armFar: 66, elbowNear: 34, elbowFar: 30, age: 1, tremor: 2.4}},
        {p: 0.4, pose: {lean: 50, armNear: 30, armFar: 28, elbowNear: 16, elbowFar: 14, age: 1, tremor: 1.4}},
        {p: 1, pose: {lean: 52, armNear: 22, armFar: 20, elbowNear: 10, elbowFar: 9, age: 1, tremor: 0.8}},
      ]),
      opacity: lerp(0.8, 0.7, p),
      depth: 'behind',
    },
    puppet: {
      x: c.px - 60,
      y: c.py,
      scale: c.ps,
      pose: poseAt(p, [
        {p: 0, pose: BOW_POSE},
        {p: 0.3, pose: {...BOW_POSE, rise: 2, headTilt: -8}},
        {p: 1, pose: {...BOW_POSE, rise: 2, headTilt: -8}},
      ]),
      eyesOpen: lerp(1, 0.2, clamp(p / 0.25)),
      crack: 0.9,
      ash: 0.8,
      tear: 0.8,
      // 她已经不在了：只留一小段残影，然后化掉
      opacity: lerp(0.85, 0, clamp((p - 0.06) / 0.22)),
    },
    threads: {
      tension: 0.06,
      broken: 1,
      glow: 0,
      opacity: 0.45,
      visible: 1,
      bar: 1,
      mount: 1,
      stagger: 0.1,
    },
    fire: {intensity: lerp(0.12, 0, clamp(p / 0.3)), x: c.px - 70, y: c.floor + 4, width: W * 0.3, height: H * 0.14},
    particles: {ash: lerp(0.6, 0.15, clamp(p / 0.6)), snow: 0.35 * (1 - clamp(p / 0.4)), dust: 0.3, wind: 0.3},
    // 晨光：冷 → 极淡的暖，最后一点光落在台上
    light: {x: W * 0.42, y: c.horizon - H * 0.1, r: W * 0.5, intensity: lerp(0.24, 0.42, clamp((p - 0.4) / 0.4)), cool: lerp(1, 0.25, clamp((p - 0.5) / 0.5))},
    exposure: kf(c.f, [
      [0, 0.9],
      [0.3 * c.d, 0.82],
      [0.7 * c.d, 0.7],
      [0.94 * c.d, 0.62],
      [c.d, 0.5],
    ]),
    film: {grain: 0.7, vignette: 1},
  };
  return <Scene {...spec} />;
};

export const ACTS = [Act1, Act2, Act3, Act4, Act5, Act6, Act7];

void PHASES;
void ZERO_POSE;
export const __PHASE_COUNT = PHASES.length;
