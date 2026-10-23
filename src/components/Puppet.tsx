import React from 'react';
import {C} from '../theme';
import {Rig, solve, Pose, Pt} from '../rig';

/**
 * 提线木偶。
 *
 * 这一版重做的是"形体"：
 *   - 肢体是**锥形**（近关节粗、末端细），不是等宽线条 —— 这一条最影响"纸片感"
 *   - 袍身有明确的剪影（领口/腰封/下摆），带侧面暗部、褶线、暗金滚边与缠枝纹
 *   - 头是木雕 + 戏曲妆面：额头、颧骨、收窄的下颌、朱砂眼尾、花钿、唇、木纹
 *   - 关节是球关节（木球 + 金销），并带上一侧轮廓光（rim）与火光补光
 * 所有几何都由 rig.ts 的关节点驱动，换镜头不会失去结构。
 */

const taper = (a: Pt, b: Pt, wa: number, wb: number): string => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return `M ${a.x + nx * wa} ${a.y + ny * wa} L ${b.x + nx * wb} ${b.y + ny * wb} L ${b.x - nx * wb} ${b.y - ny * wb} L ${a.x - nx * wa} ${a.y - ny * wa} Z`;
};

const Joint: React.FC<{p: Pt; r?: number}> = ({p, r = 4}) => (
  <g>
    <circle cx={p.x} cy={p.y} r={r} fill="url(#jointGrad)" stroke={C.woodDark} strokeWidth={0.7} />
    <circle cx={p.x} cy={p.y} r={r * 0.32} fill={C.goldBright} opacity={0.9} />
    <path d={`M ${p.x - r * 0.75} ${p.y - r * 0.5} Q ${p.x} ${p.y - r * 0.95} ${p.x + r * 0.7} ${p.y - r * 0.45}`} stroke="#fff" strokeWidth={0.6} fill="none" opacity={0.5} />
  </g>
);

/** 手：掌 + 五指，指节有粗细变化 */
const Hand: React.FC<{p: Pt; ang: number; scale?: number}> = ({p, ang, scale = 1}) => {
  const r = (ang * Math.PI) / 180;
  const dx = Math.sin(r);
  const dy = Math.cos(r);
  const px = -dy;
  const py = dx;
  const fingers = [0, 1, 2, 3].map((i) => {
    const spread = (i - 1.5) * 5.4;
    const len = (13.5 - Math.abs(i - 1.4) * 1.7) * scale;
    const kn = {x: p.x + dx * 7.5 * scale + px * spread * 0.62, y: p.y + dy * 7.5 * scale + py * spread * 0.62};
    const tip = {x: kn.x + (dx * 0.88 + px * 0.3) * len, y: kn.y + (dy * 0.88 + py * 0.3) * len};
    return {kn, tip, spread};
  });
  return (
    <g>
      <path d={taper(p, {x: p.x + dx * 9 * scale, y: p.y + dy * 9 * scale}, 5.4 * scale, 4.6 * scale)} fill="url(#skinGrad)" stroke={C.wood} strokeWidth={0.55} />
      {fingers.map((f, i) => (
        <g key={i}>
          <path d={taper(f.kn, f.tip, 1.35 * scale, 0.85 * scale)} fill="url(#skinGrad)" stroke={C.wood} strokeWidth={0.4} />
          <circle cx={f.kn.x} cy={f.kn.y} r={1.15 * scale} fill={C.wood} opacity={0.65} />
        </g>
      ))}
      {/* 拇指 */}
      <path
        d={taper({x: p.x + px * 4 * scale + dx * 3 * scale, y: p.y + py * 4 * scale + dy * 3 * scale}, {x: p.x + px * 11 * scale + dx * 8 * scale, y: p.y + py * 11 * scale + dy * 8 * scale}, 1.7 * scale, 1.1 * scale)}
        fill="url(#skinGrad)"
        stroke={C.wood}
        strokeWidth={0.45}
      />
    </g>
  );
};

export type PuppetProps = {
  pose: Pose;
  eyesOpen?: number;
  tear?: number;
  crack?: number;
  ash?: number;
  opacity?: number;
  detail?: 'near' | 'far';
  /** 侧逆光（轮廓光）0..1 */
  rim?: number;
  /** 火光补光 0..1 */
  fireGlow?: number;
};

export const Puppet: React.FC<PuppetProps> = ({
  pose,
  eyesOpen = 0,
  tear = 0,
  crack = 0,
  ash = 0,
  opacity = 1,
  detail = 'near',
  rim = 0.55,
  fireGlow = 0,
}) => {
  const r: Rig = solve(pose);
  const near = detail === 'near';
  const open = Math.max(0.05, eyesOpen);
  const hip = r.hip;
  const waist = {x: hip.x * 0.55 + r.chest.x * 0.45, y: hip.y * 0.55 + r.chest.y * 0.45};
  const hemY = hip.y + 96;
  const hemShift = pose.sleeveLag * 0.28;
  const hemL = {x: hip.x - 30 + hemShift, y: hemY};
  const hemR = {x: hip.x + 30 + hemShift, y: hemY};

  const bodyPath = `M ${r.shoulderFar.x - 4} ${r.shoulderFar.y - 10}
    C ${r.shoulderFar.x - 12} ${r.chest.y + 34} ${waist.x - 20} ${waist.y - 6} ${waist.x - 19} ${waist.y + 6}
    C ${waist.x - 26} ${hip.y + 24} ${hemL.x - 4} ${hemY - 22} ${hemL.x} ${hemY}
    Q ${hip.x + hemShift} ${hemY + 13} ${hemR.x} ${hemY}
    C ${hemR.x + 2} ${hemY - 26} ${waist.x + 24} ${hip.y + 20} ${waist.x + 19} ${waist.y + 4}
    C ${waist.x + 18} ${waist.y - 8} ${r.shoulderNear.x + 10} ${r.chest.y + 30} ${r.shoulderNear.x + 4} ${r.shoulderNear.y - 10}
    Q ${r.neck.x} ${r.neck.y + 16} ${r.shoulderFar.x - 4} ${r.shoulderFar.y - 10} Z`;

  const sleeve = (sh: Pt, el: Pt, flip: boolean) => {
    const dx = el.x - sh.x;
    const dy = el.y - sh.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = (-dy / len) * 1;
    const ny = (dx / len) * 1;
    const o = flip ? -1 : 1;
    const drop = 46 + pose.sleeveLag * 0.5;
    return `M ${sh.x + nx * 9 * o} ${sh.y + ny * 9 * o - 4}
      C ${sh.x + nx * 16 * o + dx * 0.4} ${sh.y + ny * 16 * o + dy * 0.4} ${el.x + nx * 22 * o} ${el.y + ny * 22 * o - 6} ${el.x + nx * 26 * o} ${el.y + ny * 26 * o + 8}
      C ${el.x + nx * 32 * o + 6} ${el.y + drop * 0.7} ${el.x + 10 * o} ${el.y + drop} ${el.x - 6 * o} ${el.y + drop - 4}
      C ${el.x - nx * 12 * o} ${el.y + drop * 0.5} ${sh.x - nx * 4 * o} ${sh.y + ny * 8 * o + 16} ${sh.x - nx * 9 * o} ${sh.y + 8} Z`;
  };

  return (
    <g opacity={opacity}>
      {/* ============ 远侧手臂（身后） ============ */}
      <g opacity={near ? 0.82 : 1}>
        <path d={taper(r.shoulderFar, r.elbowFar, 6.4, 5)} fill="url(#woodLimbFar)" />
        <path d={taper(r.elbowFar, r.handFar, 4.6, 3.6)} fill="url(#woodLimbFar)" />
        {near ? <Hand p={r.handFar} ang={pose.shFar + pose.elFar + pose.wrFar} scale={0.9} /> : null}
        <path d={sleeve(r.shoulderFar, r.elbowFar, true)} fill="url(#robeDark)" stroke={C.goldDim} strokeWidth={0.8} opacity={0.96} />
      </g>

      {/* ============ 腿与足 ============ */}
      <g>
        <path d={taper(r.hip, r.kneeFar, 7.4, 5.4)} fill="url(#woodLimbFar)" />
        <path d={taper(r.kneeFar, r.footFar, 5.2, 3.8)} fill="url(#woodLimbFar)" />
        <path d={taper(r.hip, r.kneeNear, 8.2, 6)} fill="url(#woodLimb)" />
        <path d={taper(r.kneeNear, r.footNear, 5.8, 4.2)} fill="url(#woodLimb)" />
        {/* 皂靴 */}
        <path d={`M ${r.footFar.x - 13} ${r.footFar.y + 5} Q ${r.footFar.x} ${r.footFar.y - 3} ${r.footFar.x + 15} ${r.footFar.y + 4} Q ${r.footFar.x + 3} ${r.footFar.y + 11} ${r.footFar.x - 13} ${r.footFar.y + 5} Z`} fill="#120E0C" stroke={C.goldDim} strokeWidth={0.7} />
        <path d={`M ${r.footNear.x - 14} ${r.footNear.y + 6} Q ${r.footNear.x} ${r.footNear.y - 4} ${r.footNear.x + 16} ${r.footNear.y + 5} Q ${r.footNear.x + 3} ${r.footNear.y + 13} ${r.footNear.x - 14} ${r.footNear.y + 6} Z`} fill="#0D0A09" stroke={C.gold} strokeWidth={0.8} />
        {near ? (
          <>
            <Joint p={r.kneeNear} r={3.4} />
            <Joint p={r.kneeFar} r={3} />
          </>
        ) : null}
      </g>

      {/* ============ 袍身 ============ */}
      <g>
        {/* 远侧暗部：先铺一层偏冷的外形，再用主体压上，形成体积 */}
        <path d={bodyPath} fill="url(#robeDark)" transform="translate(-3 2)" opacity={0.85} />
        <path d={bodyPath} fill="url(#robeGrad)" stroke={C.goldDim} strokeWidth={1} />
        {/* 侧面暗部 */}
        <path
          d={`M ${r.shoulderFar.x - 3} ${r.shoulderFar.y - 8} C ${waist.x - 16} ${waist.y} ${waist.x - 22} ${hip.y + 10} ${hemL.x - 2} ${hemY - 4} L ${hemL.x + 8} ${hemY - 2} C ${waist.x - 6} ${hip.y + 16} ${waist.x + 2} ${waist.y + 10} ${r.shoulderFar.x + 10} ${r.shoulderFar.y - 6} Z`}
          fill="#2A0705"
          opacity={0.42}
        />
        {/* 褶线 */}
        {near ? (
          <g stroke="#3A0A07" strokeWidth={0.9} fill="none" opacity={0.5}>
            <path d={`M ${waist.x - 8} ${waist.y + 6} C ${waist.x - 14} ${hip.y + 26} ${hemL.x - 6} ${hemY - 30} ${hemL.x - 2} ${hemY - 6}`} />
            <path d={`M ${waist.x + 6} ${waist.y + 6} C ${waist.x + 10} ${hip.y + 30} ${hemR.x - 4} ${hemY - 26} ${hemR.x} ${hemY - 6}`} />
            <path d={`M ${waist.x} ${waist.y + 8} C ${waist.x + 1} ${hip.y + 30} ${hemL.x + 22} ${hemY - 24} ${hemL.x + 24} ${hemY - 4}`} opacity={0.5} />
          </g>
        ) : null}
        {/* 立领（护领）：压住颈根，肩线因此成立 */}
        <path
          d={`M ${r.neck.x - 11} ${r.neck.y + 16} Q ${r.neck.x} ${r.neck.y + 3} ${r.neck.x + 11} ${r.neck.y + 16}
              L ${r.neck.x + 9} ${r.neck.y + 26} Q ${r.neck.x} ${r.neck.y + 20} ${r.neck.x - 9} ${r.neck.y + 26} Z`}
          fill="#4A0F0B"
          stroke={C.gold}
          strokeWidth={0.9}
        />
        {/* 交领 */}
        <path
          d={`M ${r.shoulderFar.x + 1} ${r.shoulderFar.y - 6} L ${r.neck.x + 1} ${r.neck.y + 9} L ${r.shoulderNear.x - 1} ${r.shoulderNear.y - 6}`}
          fill="none"
          stroke={C.gold}
          strokeWidth={2}
          opacity={0.92}
        />
        <path d={`M ${r.shoulderFar.x + 3} ${r.shoulderFar.y - 3} L ${r.neck.x + 4} ${r.neck.y + 13} L ${waist.x + 4} ${waist.y - 2}`} fill="none" stroke={C.paperDim} strokeWidth={1.1} opacity={0.4} />
        {/* 腰封 */}
        <path d={`M ${waist.x - 18} ${waist.y - 2} Q ${waist.x + 1} ${waist.y - 9} ${waist.x + 18} ${waist.y - 3} L ${waist.x + 19} ${waist.y + 11} Q ${waist.x} ${waist.y + 17} ${waist.x - 19} ${waist.y + 10} Z`} fill="url(#sashGrad)" stroke={C.gold} strokeWidth={1} />
        <circle cx={waist.x + 1} cy={waist.y + 5} r={3.2} fill={C.goldBright} stroke={C.goldDim} strokeWidth={0.6} />
        {/* 腰侧飘带 */}
        <path
          d={`M ${waist.x - 14} ${waist.y + 6} C ${waist.x - 30 - pose.sleeveLag} ${waist.y + 40} ${waist.x - 26 - pose.sleeveLag * 1.3} ${hip.y + 52} ${waist.x - 30 - pose.sleeveLag * 1.5} ${hip.y + 78}`}
          stroke={C.cinnabarLight}
          strokeWidth={3.4}
          strokeLinecap="round"
          fill="none"
          opacity={0.5}
        />
        {/* 缠枝纹（只在近景出现，远景省掉） */}
        {near ? (
          <g opacity={0.42} stroke={C.gold} strokeWidth={0.75} fill="none">
            <path d={`M ${waist.x - 11} ${waist.y - 16} q 7 10 1 18 q -6 8 1 13`} />
            <path d={`M ${waist.x + 11} ${waist.y - 20} q -6 9 0 16`} />
            <circle cx={waist.x - 8} cy={waist.y - 26} r={1.6} fill={C.gold} stroke="none" />
            <circle cx={waist.x + 9} cy={waist.y - 30} r={1.4} fill={C.gold} stroke="none" />
          </g>
        ) : null}
        {/* 下摆滚边 */}
        <path d={`M ${hemL.x} ${hemY} Q ${hip.x + hemShift} ${hemY + 13} ${hemR.x} ${hemY}`} stroke={C.gold} strokeWidth={1.6} fill="none" opacity={0.8} />
        {/* 轮廓光：只亮"受光的那一侧" */}
        <path d={bodyPath} fill="none" stroke="url(#rimGrad)" strokeWidth={2.4} opacity={0.55 * rim} />
      </g>

      {/* ============ 近侧手臂 ============ */}
      <g>
        <path d={taper(r.shoulderNear, r.elbowNear, 6.8, 5.2)} fill="url(#woodLimb)" />
        {near ? <Joint p={r.elbowNear} r={3.6} /> : null}
        <path d={sleeve(r.shoulderNear, r.elbowNear, false)} fill="url(#robeGrad)" stroke={C.goldDim} strokeWidth={0.9} />
        {/* 水袖：从肘一直盖到腕，只露出手指 —— 木偶手臂不该露成一根木条 */}
        <path d={taper(r.elbowNear, r.handNear, 7.6, 5.4)} fill="url(#robeGrad)" stroke={C.goldDim} strokeWidth={0.6} />
        <path d={taper(r.elbowNear, {x: (r.elbowNear.x + r.handNear.x) / 2, y: (r.elbowNear.y + r.handNear.y) / 2}, 3.4, 2.2)} fill="#2A0705" opacity={0.25} />
        {/* 袖口滚边 */}
        <path
          d={`M ${r.elbowNear.x - 20} ${r.elbowNear.y + 40} Q ${r.elbowNear.x} ${r.elbowNear.y + 54} ${r.elbowNear.x + 22} ${r.elbowNear.y + 42}`}
          fill="none"
          stroke={C.gold}
          strokeWidth={1.4}
          opacity={0.55}
        />
        {near ? <Hand p={r.handNear} ang={pose.shNear + pose.elNear + pose.wrNear} /> : null}
      </g>

      {/* ============ 颈与头 ============ */}
      <g>
        {/* 颈：细、偏暗，只露很短一截 */}
        <path d={taper(r.neck, r.head, 4.2, 4.6)} fill="url(#neckGrad)" stroke={C.wood} strokeWidth={0.5} />
        {/* 颈根阴影 */}
        <ellipse cx={r.neck.x} cy={r.neck.y + 6} rx={7} ry={9} fill="#3A2418" opacity={0.35} />
        <g transform={`translate(${r.head.x} ${r.head.y}) rotate(${pose.headTilt * 0.4})`}>
          <g transform={`scale(${1 - Math.abs(pose.headTurn) * 0.2} 1)`}>
            {/* 脸型：额头宽、颧骨、收窄下颌 */}
            <path
              d="M 0 -22 C 15 -22 23 -12 23.5 -1 C 24 10 18 19 10 23 C 4 26 -4 26 -10 23 C -18 19 -24 10 -23.5 -1 C -23 -12 -15 -22 0 -22 Z"
              fill="url(#faceGrad)"
              stroke={C.wood}
              strokeWidth={0.85}
            />
            {/* 木纹 + 颧部阴影 */}
            <g opacity={0.14} stroke={C.woodDark} strokeWidth={0.6} fill="none">
              <path d="M -17 -9 C -9 -13 4 -12 15 -7" />
              <path d="M -16 6 C -7 3 7 4 16 8" />
              <path d="M -13 16 C -5 14 4 15 11 17" />
            </g>
            <ellipse cx={-15} cy={5} rx={6} ry={4} fill={C.cinnabarLight} opacity={0.2} />
            <ellipse cx={15} cy={5} rx={6} ry={4} fill={C.cinnabarLight} opacity={0.14} />
            {/* 明暗：额头受光、下颌与远侧转暗 */}
            <path d="M 0 -22 C 15 -22 23 -12 23.5 -1 C 24 10 18 19 10 23 C 4 26 -4 26 -10 23 C -18 19 -24 10 -23.5 -1 C -23 -12 -15 -22 0 -22 Z" fill="url(#faceShade)" opacity={0.55} />
            <ellipse cx={-4} cy={-14} rx={12} ry={7} fill="#FFF8EA" opacity={0.28} />
            {/* 花钿 + 眉 */}
            <path d="M 0 -13.5 l 3.4 2.6 l -3.4 3.6 l -3.4 -3.6 Z" fill={C.cinnabar} opacity={0.95} />
            <path d="M -15.5 -6.5 Q -11.5 -10 -6.5 -6.8" fill="none" stroke={C.ink} strokeWidth={1.5} strokeLinecap="round" />
            <path d="M 6.5 -6.8 Q 11.5 -10 15.5 -6.5" fill="none" stroke={C.ink} strokeWidth={1.5} strokeLinecap="round" />
            {/* 眼 */}
            {open < 0.24 ? (
              <>
                <path d="M -15 0 Q -10.4 2.8 -5.6 0.2" fill="none" stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" />
                <path d="M 5.6 0.2 Q 10.4 2.8 15 0" fill="none" stroke={C.ink} strokeWidth={1.6} strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d={`M -14.6 -0.2 Q -10.6 ${-3.0 * open} -6.4 -0.1 Q -10.6 ${3.2 * open} -14.6 -0.2 Z`} fill={C.ink} />
                <path d={`M 6.4 -0.1 Q 10.6 ${-3.0 * open} 14.6 -0.2 Q 10.6 ${3.2 * open} 6.4 -0.1 Z`} fill={C.ink} />
                <path d="M -15 -0.7 Q -10.6 -1.6 -6 -0.6" fill="none" stroke={C.ink} strokeWidth={1.1} strokeLinecap="round" />
                <path d="M 15 -0.7 Q 10.6 -1.6 6 -0.6" fill="none" stroke={C.ink} strokeWidth={1.1} strokeLinecap="round" />
                <circle cx={-10.9 - pose.headTurn * 1.1} cy={0.1} r={1.25} fill={C.goldBright} />
                <circle cx={10.9 - pose.headTurn * 1.1} cy={0.1} r={1.25} fill={C.goldBright} />
                <circle cx={-11.25 - pose.headTurn * 1.1} cy={-0.3} r={0.42} fill="#fff" opacity={0.95} />
                <circle cx={10.55 - pose.headTurn * 1.1} cy={-0.3} r={0.42} fill="#fff" opacity={0.95} />
              </>
            )}
            {/* 眼尾朱砂 */}
            <path d="M -15.5 -2.6 C -19.5 -4.6 -22.6 -1.4 -23.4 2.6" fill="none" stroke={C.cinnabar} strokeWidth={2.3} strokeLinecap="round" opacity={0.9} />
            <path d="M 15.5 -2.6 C 19.5 -4.6 22.6 -1.4 23.4 2.6" fill="none" stroke={C.cinnabar} strokeWidth={2.3} strokeLinecap="round" opacity={0.9} />
            {/* 鼻、唇 */}
            <path d="M 0.6 4.6 Q 2 7.6 0.2 9" fill="none" stroke={C.woodDark} strokeWidth={0.8} opacity={0.5} strokeLinecap="round" />
            <path d="M -3.4 14.2 Q -1.6 12.9 -0.4 13.5 Q 0 12.5 0.6 13.5 Q 1.8 12.9 3.4 14.2 Q 0 17.2 -3.4 14.2 Z" fill={C.cinnabar} />
            {tear > 0.01 ? (
              <path
                d={`M 12.6 5.6 C 13.6 11 11.8 17 10.8 21.4`}
                fill="none"
                stroke={C.cinnabar}
                strokeWidth={1.9 * tear}
                strokeLinecap="round"
                opacity={0.92}
              />
            ) : null}
          </g>

          {/* 发：两侧鬓发 + 髻 + 金钗 + 珠串 */}
          <path d="M -22 -12 C -26 -30 -13 -39 0 -39 C 14 -39 26 -30 22 -12 C 16 -22 8 -25 0 -25 C -9 -25 -16 -21 -22 -12 Z" fill="url(#hairGrad)" />
          <path d="M -21 -14 C -28 -4 -27 12 -22 24 C -19 16 -20 4 -17 -6 Z" fill="url(#hairGrad)" opacity={0.95} />
          <path d="M 21 -14 C 28 -4 27 12 22 24 C 19 16 20 4 17 -6 Z" fill="url(#hairGrad)" opacity={0.95} />
          <ellipse cx={-1} cy={-41} rx={13} ry={9.5} fill="url(#hairGrad)" />
          {near ? (
            <g opacity={0.5} stroke="#2A2420" strokeWidth={0.6} fill="none">
              <path d="M -9 -44 C -3 -47 4 -46 9 -42" />
              <path d="M -7 -39 C -2 -41 4 -40 8 -37" />
            </g>
          ) : null}
          <path d={`M -1 -50 l 0 -9`} stroke={C.gold} strokeWidth={2} strokeLinecap="round" />
          <circle cx={-1} cy={-61} r={3.4} fill={C.goldBright} stroke={C.goldDim} strokeWidth={0.6} />
          <g transform={`rotate(${pose.tassel} 13 -33)`}>
            <path d="M 13 -33 q 7 15 3.4 32" stroke={C.cinnabarLight} strokeWidth={2.3} fill="none" strokeLinecap="round" />
            <circle cx={13} cy={-33} r={2.6} fill={C.gold} />
            <circle cx={16} cy={-2} r={1.8} fill={C.goldBright} opacity={0.9} />
          </g>
        </g>
      </g>

      {/* ============ 火光补光 / 裂纹 / 灰烬 ============ */}
      {fireGlow > 0.02 ? (
        <g opacity={fireGlow}>
          <ellipse cx={hip.x} cy={hip.y - 20} rx={44} ry={80} fill={C.flameHot} opacity={0.12} />
          <ellipse cx={hip.x + 20} cy={hip.y + 40} rx={26} ry={44} fill={C.cinnabarLight} opacity={0.16} />
        </g>
      ) : null}
      {crack > 0.01 ? (
        <g opacity={0.7 * crack} stroke={C.ink} strokeWidth={0.9} fill="none">
          <path d={`M ${waist.x - 12} ${waist.y - 18} l 8 12 l -4 10 l 7 9`} />
          <path d={`M ${r.head.x + 7} ${r.head.y + 9} l 5 9 l -3 7`} />
          <path d={`M ${r.elbowNear.x} ${r.elbowNear.y} l 6 8`} />
        </g>
      ) : null}
      {ash > 0.01 ? (
        <g opacity={0.5 * ash} fill={C.paperDim}>
          <ellipse cx={hip.x - 6} cy={hip.y + 62} rx={26} ry={10} />
          <ellipse cx={r.head.x + 3} cy={r.head.y + 20} rx={11} ry={5} />
        </g>
      ) : null}
    </g>
  );
};
