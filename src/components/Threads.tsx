import React from 'react';
import {C} from '../theme';
import {Pt} from '../rig';
import {noise} from '../lib/rand';
import {clamp} from '../lib/motion';

/**
 * 牵丝。全片的主角之一。
 * 每根丝线不是一条直线，而是：下垂弧度（张力决定弯曲）、高频微振（噪声）、
 * 以及断开时的两段式坠落 —— 断点先亮一下金红，然后各自失重落下。
 */

export type Thread = {
  a: Pt; // 控制者手
  b: Pt; // 木偶身上锚点
  tension: number; // 0 松弛 → 1 绷紧
  broken?: number; // 0 未断 → 1 完全分离
  breakPoint?: number; // 断点位置 0..1（从控制者到手的方向）
  glow?: number; // 断开瞬间的亮光 0..1
  width?: number;
  opacity?: number;
};

const curve = (a: Pt, b: Pt, sag: number, wobble: number, seed: number): {d: string; mid: Pt} => {
  const mx = (a.x + b.x) / 2 + wobble * 0.3;
  const my = (a.y + b.y) / 2 + sag;
  const qx = a.x * 0.25 + mx * 0.5 + b.x * 0.25;
  const qy = a.y * 0.25 + my * 0.5 + b.y * 0.25 + wobble;
  void qx;
  return {d: `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`, mid: {x: mx, y: my}};
};

export const Threads: React.FC<{threads: Thread[]; frame: number}> = ({threads, frame}) => {
  return (
    <g>
      {threads.map((t, i) => {
        const seed = i * 3.77 + 1;
        const vib = (noise(frame * 0.14, seed) - 0.5) * 6 * (0.35 + t.tension * 0.9);
        const sag = (1 - clamp(t.tension)) * 46 + 3;
        const w = t.width ?? 0.9;
        const op = (t.opacity ?? 0.9) * (0.55 + 0.45 * t.tension);
        const b = t.broken ?? 0;
        const bp = t.breakPoint ?? 0.5;
        const cut = {x: t.a.x + (t.b.x - t.a.x) * bp, y: t.a.y + (t.b.y - t.a.y) * bp};

        if (b <= 0.001) {
          const {d} = curve(t.a, t.b, sag, vib, seed);
          return (
            <g key={i} opacity={op}>
              <path d={d} fill="none" stroke={C.goldDim} strokeWidth={w + 2.2} opacity={0.28} />
              <path d={d} fill="none" stroke={C.goldBright} strokeWidth={w} opacity={0.95} />
            </g>
          );
        }

        // 断开：上段从手里垂落，下段从木偶身上垂下 —— 要"看出来是断的"
        const fall = b * b;
        const upperEnd = {x: cut.x + fall * 10, y: cut.y + fall * 130};
        const lowerStart = {x: cut.x - fall * 5, y: cut.y + fall * 150};
        const lowerEnd = {x: t.b.x + fall * 14, y: t.b.y + fall * 190};
        const u = curve(t.a, upperEnd, sag * 1.4, vib * (1 + b), seed);
        const l = curve(lowerStart, lowerEnd, sag * 0.8, vib, seed + 9);
        return (
          <g key={i} opacity={op * (1 - b * 0.35)}>
            <path d={u.d} fill="none" stroke={C.goldBright} strokeWidth={w} opacity={0.9} />
            <path d={l.d} fill="none" stroke={C.gold} strokeWidth={w * 0.9} opacity={0.75} />
            {t.glow && t.glow > 0.01 ? (
              <g opacity={t.glow}>
                <circle cx={cut.x} cy={cut.y} r={4 + t.glow * 16} fill={C.flameHot} opacity={0.6} />
                <circle cx={cut.x} cy={cut.y} r={1.6 + t.glow * 5} fill="#FFF6E0" />
              </g>
            ) : null}
          </g>
        );
      })}
    </g>
  );
};

/** 顶部"提线架"：一排细横杆，所有丝线从它垂下来 */
export const StringBar: React.FC<{y: number; width: number; x: number; opacity?: number}> = ({y, width, x, opacity = 0.5}) => (
  <g opacity={opacity}>
    <rect x={x - width / 2} y={y} width={width} height={2.4} fill={C.goldDim} />
    <rect x={x - width / 2} y={y} width={width} height={0.8} fill={C.gold} opacity={0.8} />
  </g>
);
