import React from 'react';
import {rnd} from '../lib/rand';
import {C} from '../theme';
import {clamp} from '../lib/motion';

/**
 * 粒子层：尘埃 / 风雪 / 纸灰。
 * 每个粒子的位置由 (索引种子 + 帧号) 计算，是纯函数 —— 同一帧永远一样，
 * 也不会在镜头切换时出现"粒子重新洗牌"的跳变。
 */

type Kind = 'dust' | 'snow' | 'ash';

export const Particles: React.FC<{
  frame: number;
  kind: Kind;
  count: number;
  intensity: number;
  width?: number;
  height?: number;
  wind?: number;
  scale?: number;
}> = ({frame, kind, count, intensity, width = 1920, height = 1080, wind = 0, scale = 1}) => {
  const k = clamp(intensity);
  if (k <= 0.01) return null;

  const cfg = {
    dust: {cycle: 620, speedX: 16, speedY: -9, rMin: 0.6, rMax: 2.3, fill: C.paper, opMin: 0.1, opMax: 0.4},
    snow: {cycle: 460, speedX: 42, speedY: 26, rMin: 1.0, rMax: 3.6, fill: C.snow, opMin: 0.25, opMax: 0.75},
    ash: {cycle: 700, speedX: 22, speedY: -5, rMin: 0.8, rMax: 2.6, fill: '#8C8378', opMin: 0.15, opMax: 0.5},
  }[kind];

  return (
    <g opacity={k}>
      {Array.from({length: count}).map((_, i) => {
        const phase = rnd(i, 61) * cfg.cycle;
        const life = ((frame + phase) % cfg.cycle) / cfg.cycle;
        const baseX = rnd(i, 62) * width;
        const x =
          kind === 'snow'
            ? (baseX + frame * cfg.speedX * (0.6 + rnd(i, 63) * 0.8) + Math.sin(frame * 0.012 + rnd(i, 64) * 6.28) * 30) % width
            : (baseX + frame * cfg.speedX * (0.4 + rnd(i, 63) * 0.9) + wind * life * 180) % width;
        const y =
          kind === 'snow'
            ? ((frame * cfg.speedY * (0.5 + rnd(i, 65) * 0.9) + rnd(i, 66) * height) % height)
            : height - life * height;
        const r = (cfg.rMin + rnd(i, 67) * (cfg.rMax - cfg.rMin)) * scale;
        const op = cfg.opMin + rnd(i, 68) * (cfg.opMax - cfg.opMin);
        const fadeEdge = kind === 'snow' ? 1 : Math.min(1, Math.sin(life * Math.PI) * 2.2);
        return <circle key={i} cx={x} cy={y} r={r} fill={cfg.fill} opacity={op * fadeEdge} />;
      })}
    </g>
  );
};
