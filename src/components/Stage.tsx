import React from 'react';
import {C} from '../theme';
import {rnd} from '../lib/rand';
import {clamp, lerp} from '../lib/motion';

/**
 * 戏台。一座悬浮在黑暗里的东方舞台：
 * 台板（梯形透视）+ 后纸屏 + 雕花立柱 + 红帷幕 + 悬灯。
 * 所有参数都是连续量（open / worn / snow / warm），因此从"华美"到"残破"是渐变，不是换景。
 */

export type StageProps = {
  width: number;
  height: number;
  horizon: number; // 台面远端的 y
  open: number; // 帷幕拉开 0..1
  worn: number; // 陈旧 0..1（褪色、裂纹、下沉）
  warm: number; // 灯光暖度 0..1（到结尾降为 0）
  lantern: number; // 悬灯亮度
  frost: number; // 覆霜（风雪）
  mirror?: number; // 镜中戏台（第五幕），0 = 关闭
  floorY?: number;
};

const Carving: React.FC<{x: number; y: number; h: number; flip?: boolean; worn: number}> = ({x, y, h, flip, worn}) => {
  const s = flip ? -1 : 1;
  const gold = lerp(0.85, 0.28, worn);
  return (
    <g transform={`translate(${x} ${y}) scale(${s} 1)`} opacity={gold}>
      {/* 立柱 */}
      <rect x={-16} y={-h} width={32} height={h} fill="url(#woodGrad)" stroke={C.goldDim} strokeWidth={1.2} />
      <rect x={-16} y={-h} width={6} height={h} fill="#000" opacity={0.25} />
      {/* 缠枝雕花：几段对称的卷草，用弧线拼，避免节点爆炸 */}
      {[0.18, 0.38, 0.58, 0.78].map((p, i) => (
        <g key={i} transform={`translate(0 ${-h * p})`} opacity={0.9 - worn * 0.4}>
          <path d="M 0 0 C 10 -6 16 4 8 10 C 2 14 -6 8 0 2" fill="none" stroke={C.gold} strokeWidth={1.4} />
          <path d="M 0 0 C -10 -6 -16 4 -8 10 C -2 14 6 8 0 2" fill="none" stroke={C.gold} strokeWidth={1.4} />
          <circle cx={0} cy={0} r={1.6} fill={C.goldBright} />
        </g>
      ))}
      {/* 柱头 */}
      <rect x={-22} y={-h - 12} width={44} height={12} fill="#241611" stroke={C.gold} strokeWidth={1.1} />
    </g>
  );
};

export const Stage: React.FC<StageProps> = ({
  width,
  height,
  horizon,
  open,
  worn,
  warm,
  lantern,
  frost,
  mirror = 0,
  floorY,
}) => {
  const W = width;
  const H = height;
  const fy = floorY ?? H * 0.92;
  const deckBackW = W * 0.34;
  const deckFrontW = W * 0.52;
  const cx = W / 2;

  return (
    <g>
      {/* ---- 幕后纸屏 ---- */}
      <g opacity={0.2 - worn * 0.09}>
        <rect x={cx - W * 0.36} y={horizon - H * 0.4} width={W * 0.72} height={H * 0.4} fill="url(#paperScreen)" />
        {/* 屏格 */}
        {Array.from({length: 7}).map((_, i) => (
          <g key={i}>
            <line
              x1={cx - W * 0.36 + (W * 0.72 * (i + 1)) / 8}
              y1={horizon - H * 0.4}
              x2={cx - W * 0.36 + (W * 0.72 * (i + 1)) / 8}
              y2={horizon}
              stroke={C.paperDim}
              strokeWidth={0.8}
              opacity={0.35}
            />
          </g>
        ))}
        {/* 横向格线：与竖线一起构成屏格，墙才有结构 */}
        {Array.from({length: 4}).map((_, i) => (
          <line
            key={`h${i}`}
            x1={cx - W * 0.36}
            y1={horizon - H * 0.4 + (H * 0.4 * (i + 1)) / 5}
            x2={cx + W * 0.36}
            y2={horizon - H * 0.4 + (H * 0.4 * (i + 1)) / 5}
            stroke={C.paperDim}
            strokeWidth={0.7}
            opacity={0.2}
          />
        ))}
        {/* 屏内暗角：把中间压亮、四周压暗，后墙立刻有纵深 */}
        <rect x={cx - W * 0.36} y={horizon - H * 0.4} width={W * 0.72} height={H * 0.4} fill="url(#screenShade)" opacity={0.9} />
        <rect
          x={cx - W * 0.36}
          y={horizon - H * 0.4}
          width={W * 0.72}
          height={H * 0.4}
          fill="none"
          stroke={C.goldDim}
          strokeWidth={1.4}
          opacity={0.22}
        />
        {/* 屏上水墨：三层远山，越远越淡 —— 戏台后墙不是空墙 */}
        {[
          {y: horizon - 6, amp: H * 0.16, op: 0.3, seed: 3},
          {y: horizon + 2, amp: H * 0.1, op: 0.22, seed: 9},
        ].map((L, li) => {
          let d = `M ${cx - W * 0.36} ${horizon}`;
          const n = 9;
          for (let i = 0; i <= n; i++) {
            const t = i / n;
            const x = cx - W * 0.36 + W * 0.72 * t;
            const h = L.amp * (0.5 + 0.5 * Math.sin(t * 7 + rnd(L.seed, li + 1) * 6.28)) * (1 - Math.abs(t - 0.5));
            d += ` L ${x.toFixed(0)} ${(L.y - h).toFixed(0)}`;
          }
          d += ` L ${cx + W * 0.36} ${horizon} Z`;
          return <path key={li} d={d} fill={C.inkWarm} opacity={L.op} />;
        })}
      </g>

      {/* ---- 台板 ---- */}
      <path
        d={`M ${cx - deckBackW / 2} ${horizon} L ${cx + deckBackW / 2} ${horizon} L ${cx + deckFrontW / 2} ${fy} L ${cx - deckFrontW / 2} ${fy} Z`}
        fill="#17100D"
        stroke={C.ink}
        strokeWidth={2}
      />
      {/* 台板木纹与接缝：8 条透视横线 + 木纹滤镜 */}
      <g opacity={0.5}>
        {Array.from({length: 9}).map((_, i) => {
          const t = i / 8;
          const y = lerp(horizon, fy, t * t);
          const w = lerp(deckBackW, deckFrontW, t * t);
          return <line key={i} x1={cx - w / 2} y1={y} x2={cx + w / 2} y2={y} stroke="#000" strokeWidth={0.9} opacity={0.5} />;
        })}
        {Array.from({length: 11}).map((_, i) => {
          const t = i / 10;
          const xTop = cx - deckBackW / 2 + deckBackW * t;
          const xBot = cx - deckFrontW / 2 + deckFrontW * t;
          return <line key={`p${i}`} x1={xTop} y1={horizon} x2={xBot} y2={fy} stroke="#000" strokeWidth={0.7} opacity={0.35} />;
        })}
      </g>
      <rect x={cx - deckFrontW / 2} y={fy} width={deckFrontW} height={10} fill="#0C0806" />
      {/* 台口金边 */}
      <path
        d={`M ${cx - deckFrontW / 2} ${fy} L ${cx + deckFrontW / 2} ${fy}`}
        stroke={C.gold}
        strokeWidth={2.2}
        opacity={0.8 * (1 - worn * 0.6)}
      />
      {/* 脚灯：台口一排小灯，把台面下缘托亮 */}
      <g opacity={0.75 * warm}>
        <ellipse cx={cx} cy={fy + 4} rx={deckFrontW * 0.46} ry={16} fill={C.lampWarm} opacity={0.25} filter="url(#softGlow)" />
        {[-0.36, -0.18, 0, 0.18, 0.36].map((t, i) => (
          <g key={i}>
            <circle cx={cx + deckFrontW * t} cy={fy - 2} r={3.4} fill={C.flameHot} opacity={0.85} />
            <circle cx={cx + deckFrontW * t} cy={fy - 2} r={10} fill={C.lampWarm} opacity={0.22} filter="url(#tinyGlow)" />
          </g>
        ))}
      </g>

      {/* ---- 立柱（左右） ---- */}
      <Carving x={cx - W * 0.41} y={horizon} h={H * 0.62} worn={worn} />
      <Carving x={cx + W * 0.41} y={horizon} h={H * 0.62} flip worn={worn} />

      {/* ---- 横幅与雕花额枋 ---- */}
      <g opacity={0.92 - worn * 0.3}>
        <rect x={cx - W * 0.44} y={horizon - H * 0.62 - 54} width={W * 0.88} height={44} fill="url(#woodGrad)" stroke={C.goldDim} strokeWidth={1.4} />
        {Array.from({length: 13}).map((_, i) => (
          <g key={i} transform={`translate(${cx - W * 0.4 + i * (W * 0.8 / 12)} ${horizon - H * 0.62 - 32})`} opacity={0.55}>
            <path d="M -8 0 Q 0 -12 8 0 Q 0 8 -8 0 Z" fill="none" stroke={C.gold} strokeWidth={1.2} />
          </g>
        ))}
      </g>

      {/* ---- 红帷幕：两片，从台口顶部一直垂到台面，随 open 向两侧收拢 ---- */}
      {[0, 1].map((side) => {
        const dir = side === 0 ? -1 : 1;
        const slide = open * W * 0.44;
        const baseX = cx + dir * (W * 0.02);
        const panelW = W * 0.5;
        const top = -H * 0.06;
        const bottom = fy + 14;
        return (
          <g key={side} transform={`translate(${dir * slide} 0)`} opacity={1 - worn * 0.18}>
            <path
              d={`M ${baseX} ${top}
                  L ${baseX + dir * panelW} ${top}
                  L ${baseX + dir * panelW} ${bottom}
                  L ${baseX} ${bottom} Z`}
              fill="#3E0C0A"
            />
            {/* 褶皱：竖向渐变条，交替明暗 */}
            {Array.from({length: 9}).map((_, i) => {
              const t = (i + 0.5) / 9;
              const x = baseX + dir * panelW * t;
              const w = panelW * (0.05 + rnd(i + side * 10, 31) * 0.06);
              return (
                <rect
                  key={i}
                  x={dir > 0 ? x : x - w}
                  y={top}
                  width={w}
                  height={bottom - top}
                  fill={i % 2 === 0 ? '#000' : C.cinnabarLight}
                  opacity={i % 2 === 0 ? 0.3 : 0.16}
                />
              );
            })}
            {/* 靠台口一侧的亮边：受灯照的一面 */}
            <rect
              x={dir > 0 ? baseX + dir * panelW * 0.86 : baseX + dir * panelW * 0.14}
              y={top}
              width={panelW * 0.14}
              height={bottom - top}
              fill={C.cinnabar}
              opacity={0.35}
            />
            {/* 幕底金穗 */}
            <rect
              x={dir > 0 ? baseX : baseX + dir * panelW}
              y={bottom - 10}
              width={panelW}
              height={8}
              fill={C.goldDim}
              opacity={0.55}
            />
          </g>
        );
      })}

      {/* ---- 悬灯 ---- */}
      {[0, 1].map((i) => {
        const x = cx + (i === 0 ? -W * 0.3 : W * 0.3);
        const y = horizon - H * 0.56;
        return (
          <g key={i} opacity={lantern}>
            <line x1={x} y1={horizon - H * 0.62 - 6} x2={x} y2={y - 26} stroke={C.goldDim} strokeWidth={1} />
            <ellipse cx={x} cy={y + 26} rx={30} ry={34} fill={C.cinnabar} opacity={0.85} />
            <ellipse cx={x} cy={y + 26} rx={30} ry={34} fill="url(#lampGrad)" opacity={0.5} />
            <rect x={x - 13} y={y - 6} width={26} height={6} fill={C.goldDim} />
            <rect x={x - 13} y={y + 56} width={26} height={5} fill={C.goldDim} />
            <circle cx={x} cy={y + 26} r={44} fill="url(#lampGrad)" opacity={0.55 * lantern} />
            <circle cx={x} cy={y + 26} r={24} fill={C.lampWarm} opacity={0.28} filter="url(#tinyGlow)" />
          </g>
        );
      })}

      {/* ---- 镜中戏台（第五幕的"戏中戏"）：一个偏置、缩小、半透的复制 ---- */}
      {mirror > 0.01 ? (
        <g opacity={mirror * 0.34} transform={`translate(${cx + W * 0.14} ${horizon - H * 0.05}) scale(0.52)`}>
          <rect x={-W * 0.5} y={-H * 0.5} width={W} height={H * 0.5} fill="none" stroke={C.gold} strokeWidth={2} />
          <path d={`M -W * 0.28 ${H * 0.42} L W * 0.28 ${H * 0.42} L W * 0.2 ${H * 0.2} L -W * 0.2 ${H * 0.2} Z`} fill="url(#woodGrad)" />
          <g opacity={0.9}>
            <path d={`M -W * 0.34 ${-H * 0.5} L -W * 0.1 ${-H * 0.5} L -W * 0.1 ${H * 0.1} L -W * 0.34 ${H * 0.1} Z`} fill="url(#curtainGrad)" />
            <path d={`M W * 0.34 ${-H * 0.5} L W * 0.1 ${-H * 0.5} L W * 0.1 ${H * 0.1} L W * 0.34 ${H * 0.1} Z`} fill="url(#curtainGrad)" />
          </g>
        </g>
      ) : null}

      {/* ---- 霜 / 旧：一层极淡的冷白与裂纹 ---- */}
      {frost > 0.01 ? (
        <g opacity={frost * 0.5}>
          <path
            d={`M ${cx - deckFrontW / 2} ${fy} L ${cx + deckFrontW / 2} ${fy} L ${cx + deckBackW / 2} ${horizon} L ${cx - deckBackW / 2} ${horizon} Z`}
            fill={C.snow}
            opacity={0.22}
          />
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M ${cx - 300 + i * 180} ${horizon + 20 + i * 24} q ${30 + i * 8} -14 ${62 + i * 10} 4`}
              stroke={C.snow}
              strokeWidth={1.6}
              fill="none"
              opacity={0.35}
            />
          ))}
        </g>
      ) : null}
      {worn > 0.01 ? (
        <g opacity={clamp(worn) * 0.7} stroke={C.ink} strokeWidth={0.9} fill="none">
          <path d={`M ${cx - 240} ${horizon + 40} l 26 30 l -12 34`} />
          <path d={`M ${cx + 120} ${horizon + 70} l -18 36 l 14 26`} />
          <path d={`M ${cx - 40} ${horizon - H * 0.2} l 22 24 l -10 30`} opacity={0.6} />
        </g>
      ) : null}

      {/* ---- 环境光：暖色从灯处向台下铺开，warm 归零时只剩冷灰 ---- */}
      <ellipse cx={cx} cy={horizon + 30} rx={W * 0.34} ry={H * 0.16} fill={C.lampWarm} opacity={0.1 * warm} filter="url(#softGlow)" />
    </g>
  );
};
