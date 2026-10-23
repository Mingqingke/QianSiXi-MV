import React from 'react';
import {C} from '../theme';
import {noise, rnd} from '../lib/rand';
import {clamp} from '../lib/motion';

/**
 * 火焰（第三版）。
 * 结构：热光 → 烟柱 → 外焰 → 中焰 → 内焰（白热）→ 火底白热 → 火星
 * 每层水滴形火舌的高度/倾角由确定性噪声驱动；整体随帧闪动。
 * 这样火焰有"芯"、有体积、有向上的方向，而不是几块红三角。
 */

const lobe = (cx: number, w: number, h: number, lean: number): string => {
  const tx = cx + lean;
  return `M ${cx - w} 2
    C ${cx - w * 1.02} ${-h * 0.34} ${cx - w * 0.66} ${-h * 0.62} ${tx - w * 0.34} ${-h * 0.8}
    C ${tx - w * 0.12} ${-h * 0.92} ${tx - w * 0.04} ${-h * 0.99} ${tx} ${-h}
    C ${tx + w * 0.12} ${-h * 0.96} ${tx + w * 0.3} ${-h * 0.84} ${tx + w * 0.45} ${-h * 0.66}
    C ${cx + w * 0.78} ${-h * 0.46} ${cx + w * 1.02} ${-h * 0.2} ${cx + w} 2
    Q ${cx} ${9 + Math.sin(cx) * 3} ${cx - w} 2 Z`;
};

export const Fire: React.FC<{
  frame: number;
  intensity: number;
  seed?: number;
  width?: number;
  height?: number;
  y?: number;
}> = ({frame, intensity, seed = 1, width = 520, height = 320, y = 0}) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;
  const t = frame * 0.15;
  const flick = 0.86 + 0.14 * noise(frame * 0.19, 5);

  const layers = [
    {op: 0.5, count: 13, spread: 0.46, hMin: 0.28, hMax: 0.86, fill: '#6E160F', wf: 0.17},
    {op: 0.68, count: 11, spread: 0.34, hMin: 0.34, hMax: 0.92, fill: '#A82A20', wf: 0.18},
    {op: 0.88, count: 8, spread: 0.22, hMin: 0.3, hMax: 0.64, fill: '#D9492A', wf: 0.19},
    {op: 0.95, count: 5, spread: 0.1, hMin: 0.18, hMax: 0.36, fill: '#FFC06A', wf: 0.2},
  ];

  return (
    <g transform={`translate(0 ${y})`} opacity={k}>
      {/* 热光 */}
      <ellipse cx={0} cy={-height * 0.34} rx={width * 0.56} ry={height * 0.52} fill={C.cinnabarLight} opacity={0.24 * k * flick} filter="url(#softGlow)" />

      {/* 烟：向上飘的暗色团，让火焰"接天" */}
      <g opacity={0.5 * k}>
        {[0, 1, 2, 3].map((i) => {
          const life = ((frame * 0.5 + i * 60) % 240) / 240;
          const cx = (noise(t * 0.5 + i, 41) - 0.5) * width * 0.5;
          const cy = -height * (0.55 + life * 0.9);
          const rr = width * (0.16 + life * 0.22);
          return <ellipse key={i} cx={cx} cy={cy} rx={rr} ry={rr * 0.62} fill="#14100F" opacity={0.35 * (1 - life) * k} />;
        })}
      </g>

      {/* 火舌：四层 */}
      {layers.map((L, li) => (
        <g key={li} opacity={L.op * flick}>
          {Array.from({length: L.count}).map((_, i) => {
            const spread = L.count === 1 ? 0 : (i - (L.count - 1) / 2) / ((L.count - 1) / 2);
            const jitter = (rnd(i + li * 17, seed + 9) - 0.5) * 0.42 + (noise(t * 0.6 + i * 3.1 + li, seed + li) - 0.5) * 0.1;
            const cx = (spread + jitter * 0.7) * width * L.spread;
            const n = noise(t + i * 1.9 + li * 4.7 + seed, seed + li + 3);
            const h = height * (L.hMin + (L.hMax - L.hMin) * (0.18 + n * 0.82)) * (1 - Math.abs(spread) * 0.32);
            const w = h * L.wf * (0.85 + rnd(i, li + 11) * 0.3);
            const lean = (noise(t * 0.5 + i * 2.3 + li, seed + 5) - 0.5) * (34 - li * 6);
            return <path key={i} d={lobe(cx, w, h, lean)} fill={L.fill} />;
          })}
        </g>
      ))}

      {/* 火底白热 */}
      <ellipse cx={0} cy={-10} rx={width * 0.19} ry={height * 0.06} fill="#FFF6DC" opacity={0.55 * k * flick} filter="url(#tinyGlow)" />
    </g>
  );
};

/** 余烬：受热上升的火星，断丝与燃烧共用 */
export const Embers: React.FC<{frame: number; count: number; intensity: number; width?: number; height?: number; y?: number}> = ({
  frame,
  count,
  intensity,
  width = 900,
  height = 600,
  y = 0,
}) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;
  const cycle = 210;
  return (
    <g transform={`translate(0 ${y})`} opacity={k}>
      {Array.from({length: count}).map((_, i) => {
        const life = ((frame + rnd(i, 51) * cycle) % cycle) / cycle;
        const x = (rnd(i, 52) - 0.5) * width + Math.sin(life * 6 + rnd(i, 53) * 6) * 26 * life;
        const yy = -life * height * (0.6 + rnd(i, 54) * 0.6);
        const r = (0.7 + rnd(i, 55) * 2.1) * (1 - life * 0.5);
        const op = Math.sin(life * Math.PI) * (0.5 + rnd(i, 56) * 0.5);
        return <circle key={i} cx={x} cy={yy} r={r} fill={rnd(i, 57) > 0.4 ? C.flameHot : C.cinnabarLight} opacity={op * k} />;
      })}
    </g>
  );
};
