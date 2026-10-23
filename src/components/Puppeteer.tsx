import React from 'react';
import {C} from '../theme';

/**
 * 操偶者。始终是剪影，但这一版给了它形体：
 *   袍身有肩线、腰带和垂坠的褶；袖是"宽袖 + 垂袖"两段；
 *   手臂是锥形；只有手是皮肤色（唯一的人的证据）；
 *   左缘一道冷金轮廓光，把它从暗背景里"描"出来。
 * 坐标：胯部在原点、y 向下，身高约 340 单位。
 */

export type PuppeteerPose = {
  lean: number;
  armNear: number;
  armFar: number;
  elbowNear: number;
  elbowFar: number;
  age: number; // 0 年轻 → 1 衰老
  tremor: number;
};

export const PUPPETEER_REST: PuppeteerPose = {
  lean: 6,
  armNear: 52,
  armFar: 44,
  elbowNear: 26,
  elbowFar: 20,
  age: 0,
  tremor: 0,
};

const dir = (deg: number) => {
  const r = (deg * Math.PI) / 180;
  return {x: Math.sin(r), y: Math.cos(r)};
};

export type PuppeteerRig = {
  hip: {x: number; y: number};
  chest: {x: number; y: number};
  neck: {x: number; y: number};
  head: {x: number; y: number};
  shNear: {x: number; y: number};
  shFar: {x: number; y: number};
  elbowNear: {x: number; y: number};
  elbowFar: {x: number; y: number};
  handNear: {x: number; y: number};
  handFar: {x: number; y: number};
  handNearAng: number;
  handFarAng: number;
  hemY: number;
};

export const puppeteerRig = (pose: PuppeteerPose): PuppeteerRig => {
  const leanR = (pose.lean * Math.PI) / 180;
  const spine = {x: Math.sin(leanR), y: -Math.cos(leanR)};
  const hip = {x: 0, y: 0};
  const chest = {x: hip.x + spine.x * 150, y: hip.y + spine.y * 150};
  const neck = {x: chest.x + spine.x * 40, y: chest.y + spine.y * 40};
  const head = {x: neck.x + spine.x * 34, y: neck.y + spine.y * 34};
  const shoulder = (s: number) => ({x: chest.x + Math.cos(leanR) * 26 * s, y: chest.y + Math.sin(leanR) * 26 * s});
  const shNear = shoulder(1);
  const shFar = shoulder(-1);
  const arm = (sh: {x: number; y: number}, a1: number, el: number) => {
    const d1 = dir(a1);
    const elbow = {x: sh.x + d1.x * 78, y: sh.y + d1.y * 78};
    const d2 = dir(a1 + el);
    const hand = {x: elbow.x + d2.x * 72, y: elbow.y + d2.y * 72};
    return {elbow, hand, ang: a1 + el};
  };
  const nA = arm(shNear, pose.armNear, pose.elbowNear);
  const fA = arm(shFar, pose.armFar, pose.elbowFar);
  return {
    hip,
    chest,
    neck,
    head,
    shNear,
    shFar,
    elbowNear: nA.elbow,
    elbowFar: fA.elbow,
    handNear: nA.hand,
    handFar: fA.hand,
    handNearAng: nA.ang,
    handFarAng: fA.ang,
    hemY: 250 - Math.abs(pose.lean) * 0.9,
  };
};

const taper = (a: {x: number; y: number}, b: {x: number; y: number}, wa: number, wb: number): string => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  return `M ${a.x + nx * wa} ${a.y + ny * wa} L ${b.x + nx * wb} ${b.y + ny * wb} L ${b.x - nx * wb} ${b.y - ny * wb} L ${a.x - nx * wa} ${a.y - ny * wa} Z`;
};

export const Puppeteer: React.FC<{pose: PuppeteerPose; scale?: number; opacity?: number; rim?: number}> = ({
  pose,
  scale = 1,
  opacity = 1,
  rim = 0.55,
}) => {
  const r = puppeteerRig(pose);
  const tremor = (k: number) => Math.sin(k * 2.3) * pose.tremor;
  const handN = {x: r.handNear.x + tremor(1), y: r.handNear.y + tremor(0.7)};
  const handF = {x: r.handFar.x + tremor(1.4), y: r.handFar.y + tremor(1.1)};
  const hemY = r.hemY;

  const robe = `M ${r.shFar.x - 13} ${r.shFar.y - 8}
    C ${r.shFar.x - 28} ${r.chest.y + 54} ${r.hip.x - 44} ${hemY - 66} ${r.hip.x - 54} ${hemY}
    Q ${r.hip.x} ${hemY + 18} ${r.hip.x + 68} ${hemY}
    C ${r.hip.x + 46} ${hemY - 62} ${r.shNear.x + 26} ${r.chest.y + 56} ${r.shNear.x + 11} ${r.shNear.y - 8}
    Q ${r.neck.x} ${r.chest.y - 4} ${r.shFar.x - 13} ${r.shFar.y - 8} Z`;

  return (
    <g transform={`scale(${scale})`} opacity={opacity}>
      {/* 袍：体积靠"亮边 + 暗侧 + 褶线"，不是一块死黑 */}
      <path d={robe} fill="url(#ppRobe)" />
      <path
        d={`M ${r.shFar.x - 10} ${r.shFar.y - 4} C ${r.shFar.x - 30} ${r.chest.y + 50} ${r.hip.x - 48} ${hemY - 70} ${r.hip.x - 60} ${hemY - 4}
            L ${r.hip.x - 18} ${hemY - 2} C ${r.hip.x - 10} ${hemY - 80} ${r.chest.x - 24} ${r.chest.y + 40} ${r.shFar.x + 14} ${r.shFar.y + 6} Z`}
        fill="#050405"
        opacity={0.5}
      />
      {/* 腰带 */}
      <path d={`M ${r.hip.x - 30} ${r.chest.y + 96} Q ${r.hip.x} ${r.chest.y + 88} ${r.hip.x + 30} ${r.chest.y + 96} L ${r.hip.x + 32} ${r.chest.y + 116} Q ${r.hip.x} ${r.chest.y + 124} ${r.hip.x - 32} ${r.chest.y + 116} Z`} fill="#0A0809" stroke={C.goldDim} strokeWidth={0.8} opacity={0.9} />
      {/* 褶：沿袍身向下散开 */}
      <g stroke="#000" strokeWidth={2.2} fill="none" opacity={0.5}>
        <path d={`M ${r.hip.x - 6} ${r.chest.y + 120} C ${r.hip.x - 14} ${hemY - 84} ${r.hip.x - 22} ${hemY - 40} ${r.hip.x - 30} ${hemY - 6}`} />
        <path d={`M ${r.hip.x + 12} ${r.chest.y + 122} C ${r.hip.x + 22} ${hemY - 80} ${r.hip.x + 28} ${hemY - 44} ${r.hip.x + 36} ${hemY - 8}`} />
      </g>
      <path d={robe} fill="none" stroke="url(#ppRim)" strokeWidth={3} opacity={0.85 * rim} />

      {/* 远侧袖 */}
      <g>
        <path d={taper(r.shFar, r.elbowFar, 9, 7)} fill="#0B0909" />
        <path
          d={`M ${r.shFar.x - 6} ${r.shFar.y} C ${r.shFar.x - 22} ${r.shFar.y + 26} ${r.elbowFar.x - 20} ${r.elbowFar.y - 4} ${r.elbowFar.x - 8} ${r.elbowFar.y + 6}
              L ${r.elbowFar.x - 2} ${r.elbowFar.y + 70} C ${r.elbowFar.x - 22} ${r.elbowFar.y + 74} ${r.elbowFar.x - 30} ${r.elbowFar.y + 40} ${r.elbowFar.x - 24} ${r.elbowFar.y + 12} Z`}
          fill="#0B0909"
          opacity={0.95}
        />
        <path d={taper(r.elbowFar, handF, 7, 5)} fill="#0B0909" />
        <ellipse cx={handF.x} cy={handF.y} rx={6.4} ry={5.6} fill="#7A4C32" opacity={0.85} />
      </g>

      {/* 近侧袖：宽袖 + 垂袖两段，读得出布料重量 */}
      <path d={taper(r.shNear, r.elbowNear, 10, 8)} fill="url(#ppRobe)" />
      <path
        d={`M ${r.shNear.x + 4} ${r.shNear.y}
            C ${r.shNear.x + 24} ${r.shNear.y + 22} ${r.elbowNear.x + 22} ${r.elbowNear.y - 6} ${r.elbowNear.x + 10} ${r.elbowNear.y + 4}
            L ${r.elbowNear.x + 4} ${r.elbowNear.y + 76}
            C ${r.elbowNear.x + 26} ${r.elbowNear.y + 80} ${r.elbowNear.x + 34} ${r.elbowNear.y + 44} ${r.elbowNear.x + 26} ${r.elbowNear.y + 10} Z`}
        fill="url(#ppRobe)"
        stroke="#000"
        strokeWidth={0.6}
        opacity={0.97}
      />
      <path
        d={`M ${r.elbowNear.x - 22} ${r.elbowNear.y + 74} Q ${r.elbowNear.x + 4} ${r.elbowNear.y + 90} ${r.elbowNear.x + 30} ${r.elbowNear.y + 70}`}
        fill="none"
        stroke={C.goldDim}
        strokeWidth={1.4}
        opacity={0.45}
      />
      <path d={taper(r.elbowNear, handN, 8, 5.4)} fill="url(#ppRobe)" />
      {/* 唯一"人"的部分：手 */}
      <path d={taper(handN, {x: handN.x + 9, y: handN.y + 6}, 6, 5)} fill="url(#skinGrad)" stroke="#3A2418" strokeWidth={0.6} />
      <path d={`M ${handN.x - 4} ${handN.y + 4} q 5 7 10 1`} stroke="#3A2418" strokeWidth={1.2} fill="none" opacity={0.6} />
      {pose.age > 0.1 ? (
        <g opacity={pose.age} stroke="#3A2418" strokeWidth={0.6} fill="none">
          <path d={`M ${r.elbowNear.x + 26} ${r.elbowNear.y + 18} l -2 12 M ${r.elbowNear.x + 34} ${r.elbowNear.y + 14} l -1 14`} />
        </g>
      ) : null}

      {/* 颈与头 */}
      <path d={taper(r.neck, r.head, 9, 8)} fill="#0B0909" />
      <ellipse cx={r.head.x} cy={r.head.y} rx={22} ry={26} fill="#0B0909" />
      <path d={`M ${r.head.x - 20} ${r.head.y - 9} C ${r.head.x - 15} ${r.head.y - 32} ${r.head.x + 12} ${r.head.y - 34} ${r.head.x + 20} ${r.head.y - 9} Z`} fill="#060505" />
      <ellipse cx={r.head.x - 2} cy={r.head.y - 30} rx={9.5} ry={7.5} fill="#060505" />
      <path d={`M ${r.head.x - 2} ${r.head.y - 37} l 0 -7`} stroke={C.goldDim} strokeWidth={1.8} strokeLinecap="round" />
      <ellipse cx={r.head.x} cy={r.head.y} rx={21} ry={25} fill="none" stroke="url(#ppRim)" strokeWidth={1.8} opacity={0.5 * rim} />
      {/* 衰老：鬓边白发 */}
      {pose.age > 0.35 ? (
        <g opacity={(pose.age - 0.35) * 1.5}>
          <path
            d={`M ${r.head.x + 12} ${r.head.y - 4} C ${r.head.x + 18} ${r.head.y + 10} ${r.head.x + 12} ${r.head.y + 22} ${r.head.x + 4} ${r.head.y + 28}`}
            stroke={C.paperDim}
            strokeWidth={1.6}
            fill="none"
          />
          <path d={`M ${r.head.x - 16} ${r.head.y - 14} C ${r.head.x - 20} ${r.head.y - 4} ${r.head.x - 17} ${r.head.y + 6} ${r.head.x - 12} ${r.head.y + 12}`} stroke={C.paperDim} strokeWidth={1.2} fill="none" opacity={0.8} />
        </g>
      ) : null}
    </g>
  );
};
