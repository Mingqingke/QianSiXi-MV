import React from 'react';
import {rnd, noise} from '../lib/rand';
import {C} from '../theme';
import {lerp, clamp} from '../lib/motion';

/**
 * 东方山水长卷：多层山脊 + 纸云 + 远桥。
 * 每层用不同速度平移 = 视差；层数固定、点数固定，逐帧只做一次路径计算，成本可控。
 */

const ridge = (seed: number, w: number, baseY: number, amp: number, points: number): string => {
  let d = `M -${w} ${baseY + 200} L -${w} ${baseY}`;
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = -w + t * (w * 3);
    const n =
      Math.sin(t * Math.PI * (2.2 + rnd(seed, 1) * 1.6) + rnd(seed, 2) * 6.28) * 0.6 +
      Math.sin(t * Math.PI * (6.1 + rnd(seed, 3) * 3) + rnd(seed, 4) * 6.28) * 0.3 +
      (rnd(seed + i, 5) - 0.5) * 0.24;
    const y = baseY - amp * (0.45 + n * 0.55);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L ${w * 2} ${baseY + 200} Z`;
  return d;
};

export type MountainProps = {
  /** 0 = 未展开，1 = 完整长卷；决定层的透明度与位移 */
  reveal: number;
  /** 横向游历进度，各层按深度乘以不同系数 */
  travel: number;
  /** 0 暖（赭石、暖灰）→ 1 冷（青灰、雪白） */
  cold: number;
  opacity?: number;
};

const layers = [
  {seed: 11, y: 660, amp: 150, op: 0.30, speed: 0.18, tint: 0.8},
  {seed: 27, y: 726, amp: 190, op: 0.42, speed: 0.32, tint: 0.6},
  {seed: 43, y: 800, amp: 230, op: 0.55, speed: 0.5, tint: 0.42},
  {seed: 61, y: 880, amp: 260, op: 0.68, speed: 0.72, tint: 0.28},
];

export const Mountains: React.FC<MountainProps & {w?: number}> = ({reveal, travel, cold, opacity = 1, w = 1920}) => {
  const r = clamp(reveal);
  return (
    <g opacity={opacity * r}>
      {layers.map((L, i) => {
        const dx = -travel * 900 * L.speed;
        const warm = {r: 78, g: 58, b: 44};
        const cool = {r: 58, g: 66, b: 74};
        const mix = (a: number, b: number) => Math.round(lerp(a, b, cold));
        const fill = `rgb(${mix(warm.r, cool.r)},${mix(warm.g, cool.g)},${mix(warm.b, cool.b)})`;
        const d = ridge(L.seed, w, L.y, L.amp, 26);
        return (
          <g key={i} opacity={L.op * (0.55 + 0.45 * r)} transform={`translate(${dx} 0)`}>
            <path d={d} fill={fill} />
            {/* 山脊亮边：一条极细的纸白高光，制造剪纸层叠的"纸口" */}
            <path d={d} fill="none" stroke={C.paper} strokeWidth={0.9} opacity={0.22} />
          </g>
        );
      })}
      {/* 纸云：几片横向拉伸的椭圆，半透明，缓慢漂移 */}
      {[0, 1, 2, 3, 4].map((i) => {
        const x = ((rnd(i, 21) * 2400 + travel * 260 * (0.4 + rnd(i, 22))) % 2400) - 240;
        const y = 560 + rnd(i, 23) * 210;
        const rx = 180 + rnd(i, 24) * 260;
        return (
          <ellipse
            key={`c${i}`}
            cx={x}
            cy={y}
            rx={rx}
            ry={22 + rnd(i, 25) * 26}
            fill={C.paper}
            opacity={0.05 + 0.05 * rnd(i, 26)}
          />
        );
      })}
    </g>
  );
};

/** 远处古桥 + 一点灯火（第四幕用，暗示人间的方向） */
export const Bridge: React.FC<{x: number; y: number; opacity: number; cold?: number}> = ({x, y, opacity, cold = 0}) => (
  <g opacity={opacity} transform={`translate(${x} ${y})`}>
    <path d="M -90 0 Q 0 -52 90 0 L 90 8 Q 0 -40 -90 8 Z" fill={cold > 0.5 ? '#2A3138' : '#2B2118'} />
    <rect x={-96} y={6} width={192} height={5} fill={cold > 0.5 ? '#333B42' : '#332618'} />
    {[-60, -20, 20, 60].map((px, i) => (
      <rect key={i} x={px - 2} y={2} width={4} height={16} fill={cold > 0.5 ? '#262C32' : '#241A12'} />
    ))}
    <circle cx={0} cy={-26} r={3.2} fill={C.lampWarm} opacity={0.9} />
    <circle cx={0} cy={-26} r={13} fill={C.lampWarm} opacity={0.18} filter="url(#tinyGlow)" />
  </g>
);

/** 飘带的"风"：一层极淡的横向流动高光，让静止镜头也有空气感 */
export const WindVeil: React.FC<{frame: number; strength: number; w?: number; h?: number}> = ({frame, strength, w = 1920, h = 1080}) => {
  if (strength <= 0.01) return null;
  const t = frame * 0.006;
  return (
    <g opacity={strength * 0.5}>
      {[0, 1, 2].map((i) => {
        const y = 300 + i * 240 + noise(t + i, 3) * 40;
        const x = ((noise(t * 0.6 + i * 2, 4) * 1.4 - 0.2) * w) % (w * 1.4);
        return (
          <ellipse key={i} cx={x} cy={y} rx={420 - i * 70} ry={3 + i} fill={C.paper} opacity={0.055 - i * 0.012} />
        );
      })}
    </g>
  );
};
