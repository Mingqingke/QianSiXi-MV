import React from 'react';
import {useCurrentFrame} from 'remotion';
import {kf, smooth} from '../lib/motion';
import {noise} from '../lib/rand';

/**
 * 摄影机。
 *
 * 这一版把"镜头"从"整张图做缩放"改成真正的**分层视差**：
 * Camera 不再自己变换内容，而是把 (zoom / x / y / rot) 放进 Context，
 * 每个视觉层用 <Parallax depth={...}> 按自己的深度各自变换。
 *
 * 于是推镜、横移、环绕时会自然出现"前景快、远景慢"的视差——
 * 这是"看起来像一个真实空间"和"看起来像一张会动的画"的分界线。
 * depth：0.5≈远景天幕，0.8≈戏台后墙，1.0≈人物所在平面，1.3≈前景遮挡。
 *
 * 输出仍然是纯 SVG 变换，浏览器与离线栅格化表现一致。
 */

export type CamKf = {
  at: number;
  zoom?: number;
  x?: number;
  y?: number;
  rot?: number;
};

export type CamSpec = {
  kfs: CamKf[];
  shake?: number;
  breath?: number;
};

const series = (spec: CamSpec, key: 'zoom' | 'x' | 'y' | 'rot'): [number, number][] => {
  const def = key === 'zoom' ? 1 : 0;
  return spec.kfs.map((k) => [k.at, k[key] ?? def] as [number, number]);
};

export type CamState = {zoom: number; x: number; y: number; rot: number; width: number; height: number};

export const cameraAt = (spec: CamSpec, frame: number, width: number, height: number): CamState => {
  const zoom = kf(frame, series(spec, 'zoom'), smooth);
  const x = kf(frame, series(spec, 'x'), smooth);
  const y = kf(frame, series(spec, 'y'), smooth);
  const rot = kf(frame, series(spec, 'rot'), smooth);
  const sh = spec.shake ?? 0;
  const sx = (noise(frame * 0.35, 71) - 0.5) * sh;
  const sy = (noise(frame * 0.31, 72) - 0.5) * sh;
  const breathe = 1 + (spec.breath ?? 0) * Math.sin(frame * 0.0175);
  return {zoom: zoom * breathe, x: x + sx, y: y + sy, rot, width, height};
};

const CamCtx = React.createContext<CamState>({zoom: 1, x: 0, y: 0, rot: 0, width: 1920, height: 1080});

export const Camera: React.FC<{spec: CamSpec; width: number; height: number; children: React.ReactNode}> = ({
  spec,
  width,
  height,
  children,
}) => {
  const frame = useCurrentFrame();
  const state = cameraAt(spec, frame, width, height);
  return <CamCtx.Provider value={state}>{children}</CamCtx.Provider>;
};

/** 按深度变换的一层（以画面中心为支点） */
export const Parallax: React.FC<{depth?: number; children: React.ReactNode; extra?: string}> = ({
  depth = 1,
  children,
  extra,
}) => {
  const c = React.useContext(CamCtx);
  const z = 1 + (c.zoom - 1) * depth;
  const x = c.x * depth;
  const y = c.y * depth;
  const r = c.rot * (0.35 + depth * 0.65);
  const cx = c.width / 2;
  const cy = c.height / 2;
  return (
    <g transform={`translate(${cx + x} ${cy + y}) scale(${z.toFixed(5)}) rotate(${r.toFixed(3)}) translate(${-cx} ${-cy})`}>
      {extra ? <g transform={extra}>{children}</g> : children}
    </g>
  );
};

/** 读取当前镜头状态（画外特效、景深模拟用） */
export const useCam = () => React.useContext(CamCtx);
