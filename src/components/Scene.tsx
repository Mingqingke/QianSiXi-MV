import React from 'react';
import {C} from '../theme';
import {Pose, solve, Pt} from '../rig';
import {Puppet} from './Puppet';
import {Puppeteer, PuppeteerPose, puppeteerRig} from './Puppeteer';
import {Stage} from './Stage';
import {Mountains, Bridge, WindVeil} from './Mountains';
import {Threads, Thread} from './Threads';
import {Fire, Embers} from './Fire';
import {Particles} from './Particles';
import {SceneDefs, FilmLayer} from './Paper';
import {CamSpec, Camera, Parallax} from './Camera';
import {noise} from '../lib/rand';

/**
 * 场景装配器。
 *
 * 一幕 = 一份 SceneProps。这一版的重点是**空间**：
 *   - 每个视觉层按自己的深度做视差（天空 0.45 → 前景遮挡 1.4）
 *   - 有地面光池、人物的接触阴影、火光的动态补光、地平线雾带
 *   - 丝线仍然用世界坐标精确接到手/肩/头，所以换镜头不会飘
 *
 * 图层顺序就是摄影棚的搭建顺序：天幕 → 远山 → 戏台 → 地面光 → 人 → 火 → 粒子 → 前景。
 */

export type SceneProps = {
  frame: number;
  width: number;
  height: number;
  cam?: CamSpec;

  stageVisible?: number;
  stage?: {
    open: number;
    worn: number;
    warm: number;
    lantern: number;
    frost?: number;
    mirror?: number;
    horizon?: number;
    floorY?: number;
  };

  mountains?: {reveal: number; travel: number; cold: number; opacity?: number};
  bridge?: {x: number; y: number; opacity: number; cold?: number};

  puppet: {
    x: number;
    y: number;
    scale: number;
    pose: Pose;
    eyesOpen?: number;
    tear?: number;
    crack?: number;
    ash?: number;
    opacity?: number;
    detail?: 'near' | 'far';
    /** 侧逆光强度 0..1（轮廓光） */
    rim?: number;
  };

  puppeteer?: {
    x: number;
    y: number;
    scale: number;
    pose: PuppeteerPose;
    opacity?: number;
    depth?: 'behind' | 'front';
    rim?: number;
  };

  threads?: {
    tension: number;
    broken?: number;
    glow?: number;
    opacity?: number;
    visible?: number;
    /** 挂丝进度 0..1：一根一根从控制杆挂到木偶身上（修复"丝线凭空出现"） */
    mount?: number;
    /** 控制杆的可见度 0..1 */
    bar?: number;
    count?: number;
    stagger?: number;
  };

  fire?: {intensity: number; x: number; y: number; width?: number; height?: number; embers?: number};
  particles?: {dust?: number; snow?: number; ash?: number; wind?: number};
  light?: {x: number; y: number; r: number; intensity: number; cool?: number};
  exposure?: number;
  foreground?: number;
  film?: {grain?: number; vignette?: number};
  extra?: React.ReactNode;
};

export const Scene: React.FC<SceneProps> = (p) => {
  const {frame, width: W, height: H} = p;
  const horizon = p.stage?.horizon ?? H * 0.54;
  const floorY = p.stage?.floorY ?? H * 0.9;

  const rig = solve(p.puppet.pose);
  const P = {x: p.puppet.x, y: p.puppet.y, s: p.puppet.scale};
  const wp = (q: Pt): Pt => ({x: P.x + q.x * P.s, y: P.y + q.y * P.s});

  const O = p.puppeteer ? {x: p.puppeteer.x, y: p.puppeteer.y, s: p.puppeteer.scale} : null;
  const prig = p.puppeteer ? puppeteerRig(p.puppeteer.pose) : null;
  const wo = (q: Pt): Pt => (O ? {x: O.x + q.x * O.s, y: O.y + q.y * O.s} : q);

  // ---- 丝线 ----
  const t = p.threads;
  const threadList: Thread[] = [];
  // 丝线的唯一合法起点：控制杆。杆又握在操偶者手里。
  // 没有杆（第一幕还没挂丝）就没有丝线 —— 因此永远不会"凭空出现"。
  const barVisible = (t?.bar ?? 0) * (t?.visible ?? 1);
  // 控制杆永远是"水平、悬在木偶头顶上方"的一根——这才像提线木偶；
  // 操偶者的两只手通过两根短提杆握住它。
  const handN = prig ? wo(prig.handNear) : null;
  const handF = prig ? wo(prig.handFar) : null;
  // 杆必须在她头顶上方，不能切过脸；手的提杆从杆端斜上去握
  const headTopY = wp(rig.anchors.head).y;
  const barY = headTopY - 46;
  const barHalf = 150 * P.s;
  const barA: Pt = {x: P.x - barHalf, y: barY};
  const barB: Pt = {x: P.x + barHalf, y: barY};
  const barPts = (i: number, n: number): Pt => {
    const a = barA!;
    const b = barB!;
    const tt = 0.14 + (0.72 * i) / Math.max(1, n - 1);
    return {x: a.x + (b.x - a.x) * tt, y: a.y + (b.y - a.y) * tt - 6};
  };

  if (t && (t.visible ?? 1) > 0.001 && barA && barB) {
    const anchorPts: {b: Pt; bp: number; w: number}[] = [
      {b: wp(rig.anchors.head), bp: 0.58, w: 1.15},
      {b: wp(rig.anchors.shoulderNear), bp: 0.52, w: 0.95},
      {b: wp(rig.anchors.shoulderFar), bp: 0.54, w: 0.95},
      {b: wp(rig.anchors.handNear), bp: 0.46, w: 0.85},
      {b: wp(rig.anchors.handFar), bp: 0.5, w: 0.85},
    ];
    const n = Math.min(t.count ?? 5, 5);
    const progress = t.broken ?? 0;
    const stag = t.stagger ?? 0.14;
    const mount = t.mount ?? 1;
    for (let i = 0; i < n; i++) {
      // 挂丝：一根接一根出现；断丝：一根接一根断开
      const mountI = Math.max(0, Math.min(1, (mount - i * 0.17) / 0.2));
      if (mountI <= 0.001) continue;
      const span = 0.18;
      const local = Math.max(0, Math.min(1, (progress - i * stag) / span));
      const glow = Math.max(0, 1 - Math.abs(local - 0.35) * 3.4) * (t.glow ?? 1);
      threadList.push({
        a: barPts(i, n),
        b: anchorPts[i].b,
        tension: t.tension,
        broken: local,
        breakPoint: anchorPts[i].bp,
        glow,
        width: anchorPts[i].w * 0.72,
        opacity: (t.opacity ?? 0.9) * (t.visible ?? 1) * mountI * (i === 0 ? 0.85 : 0.78),
      });
    }
  }

  const light = p.light ?? {x: W / 2, y: horizon - H * 0.2, r: W * 0.5, intensity: 0.5};
  const fireK = p.fire?.intensity ?? 0;
  const flicker = 0.72 + 0.28 * noise(frame * 0.22, 13);

  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{position: 'absolute', left: 0, top: 0, backgroundColor: C.night}}
    >
      <SceneDefs />
      <rect x={0} y={0} width={W} height={H} fill={C.night} />

      <Camera spec={p.cam ?? {kfs: [{at: 0, zoom: 1}]}} width={W} height={H}>
        {/* ---------- 天幕（最远） ---------- */}
        <Parallax depth={0.45}>
          <rect x={-W * 0.2} y={-H * 0.2} width={W * 1.4} height={H * 1.4} fill="url(#skyGrad)" />
        </Parallax>

        {/* ---------- 远山 / 长卷 ---------- */}
        <Parallax depth={0.6}>
          {p.mountains ? <Mountains {...p.mountains} w={W} /> : null}
          {p.bridge ? <Bridge x={p.bridge.x} y={p.bridge.y} opacity={p.bridge.opacity} cold={p.bridge.cold ?? 0} /> : null}
        </Parallax>

        {/* ---------- 戏台 ---------- */}
        {(p.stageVisible ?? 1) > 0.01 && p.stage ? (
          <Parallax depth={0.82}>
            <g opacity={p.stageVisible ?? 1}>
              <Stage
                width={W}
                height={H}
                horizon={horizon}
                floorY={floorY}
                open={p.stage.open}
                worn={p.stage.worn}
                warm={p.stage.warm}
                lantern={p.stage.lantern}
                frost={p.stage.frost ?? 0}
                mirror={p.stage.mirror ?? 0}
              />
            </g>
          </Parallax>
        ) : null}

        {/* ---------- 地面：光池 + 雾带 ---------- */}
        <Parallax depth={0.95}>
          <ellipse
            cx={light.x}
            cy={floorY - 6}
            rx={light.r * 0.92}
            ry={light.r * 0.24}
            fill={light.cool ? C.snow : C.lampWarm}
            opacity={0.26 * light.intensity}
            filter="url(#softGlow)"
          />
          {/* 火光在地上的反照（随火焰闪动） */}
          {fireK > 0.02 && p.fire ? (
            <ellipse cx={p.fire.x} cy={floorY - 4} rx={W * 0.22} ry={H * 0.05} fill={C.cinnabarLight} opacity={0.3 * fireK * flicker} filter="url(#softGlow)" />
          ) : null}
          {/* 地平线雾带：把台面和后墙之间的接缝吃掉 */}
          <rect x={-W * 0.1} y={horizon - H * 0.1} width={W * 1.2} height={H * 0.14} fill="url(#hazeGrad)" opacity={0.85} />
        </Parallax>

        {/* ---------- 人物所在平面 ---------- */}
        <Parallax depth={1}>
          {/* 接触阴影：让人站在地上，而不是浮着 */}
          <ellipse cx={P.x + 4 * P.s} cy={P.y + 92 * P.s} rx={70 * P.s} ry={16 * P.s} fill="#000" opacity={0.62} filter="url(#depthBlur)" />

          {/* 背后的暖光，把主体从纸屏上托出来 */}
          <ellipse cx={P.x} cy={P.y - 130 * P.s} rx={190 * P.s} ry={250 * P.s} fill="url(#lampGrad)" opacity={0.5 * light.intensity} />

          {O && p.puppeteer && (p.puppeteer.depth ?? 'behind') === 'behind' ? (
            <g transform={`translate(${O.x} ${O.y})`}>
              {/* 操偶者投在墙上的影子 */}
              <ellipse cx={6} cy={250 * O.s} rx={90 * O.s} ry={18 * O.s} fill="#000" opacity={0.5} filter="url(#depthBlur)" />
              <Puppeteer pose={p.puppeteer.pose} scale={O.s} opacity={p.puppeteer.opacity ?? 1} rim={p.puppeteer.rim ?? 0.5} />
            </g>
          ) : null}

          <g transform={`translate(${P.x} ${P.y}) scale(${P.s})`}>
            <Puppet
              pose={p.puppet.pose}
              eyesOpen={p.puppet.eyesOpen ?? 0}
              tear={p.puppet.tear ?? 0}
              crack={p.puppet.crack ?? 0}
              ash={p.puppet.ash ?? 0}
              opacity={p.puppet.opacity ?? 1}
              detail={p.puppet.detail ?? 'near'}
              rim={p.puppet.rim ?? 0.55}
              fireGlow={fireK * flicker}
            />
          </g>

          {/* ---- 控制杆 + 两根提杆：丝线唯一的合法起点 ---- */}
          {barVisible > 0.01 ? (
            <g opacity={barVisible}>
              <line x1={barA.x} y1={barA.y} x2={barB.x} y2={barB.y} stroke="#2A1B12" strokeWidth={9} strokeLinecap="round" />
              <line x1={barA.x} y1={barA.y - 3} x2={barB.x} y2={barB.y - 3} stroke={C.goldDim} strokeWidth={1.6} strokeLinecap="round" opacity={0.9} />
              {/* 十字横杆（提线木偶的"控制板"辨识特征） */}
              <line
                x1={P.x - 46}
                y1={barA.y + 4}
                x2={P.x + 46}
                y2={barB.y + 4}
                stroke="#241611"
                strokeWidth={6}
                strokeLinecap="round"
              />
              {handN ? <line x1={barA.x} y1={barA.y} x2={handN.x} y2={handN.y} stroke="#2A1B12" strokeWidth={5} strokeLinecap="round" /> : null}
              {handF ? <line x1={barB.x} y1={barB.y} x2={handF.x} y2={handF.y} stroke="#2A1B12" strokeWidth={5} strokeLinecap="round" /> : null}
              <circle cx={barA.x} cy={barA.y} r={5} fill={C.gold} opacity={0.85} />
              <circle cx={barB.x} cy={barB.y} r={5} fill={C.gold} opacity={0.85} />
            </g>
          ) : null}

          <Threads threads={threadList} frame={frame} />
        </Parallax>

        {/* ---------- 火 ---------- */}
        {p.fire && p.fire.intensity > 0.01 ? (
          <Parallax depth={1.05}>
            <g transform={`translate(${p.fire.x} ${p.fire.y})`}>
              <Fire frame={frame} intensity={p.fire.intensity} width={p.fire.width ?? 520} height={p.fire.height ?? 320} />
              {p.fire.embers ? <Embers frame={frame} count={p.fire.embers} intensity={p.fire.intensity} width={W * 0.5} height={H * 0.6} /> : null}
            </g>
          </Parallax>
        ) : null}

        {/* ---------- 操偶者（近处，压在前景） ---------- */}
        {O && p.puppeteer && p.puppeteer.depth === 'front' ? (
          <Parallax depth={1.28}>
            <g transform={`translate(${O.x} ${O.y}) scale(${O.s})`} filter="url(#depthBlur)">
              <Puppeteer pose={p.puppeteer.pose} scale={1} opacity={(p.puppeteer.opacity ?? 1) * 0.9} rim={p.puppeteer.rim ?? 0.7} />
            </g>
          </Parallax>
        ) : null}

        {/* ---------- 空气 ---------- */}
        <Parallax depth={1.1}>
          <WindVeil frame={frame} strength={p.particles?.wind ?? 0} w={W} h={H} />
        </Parallax>

        {/* ---------- 光 ---------- */}
        <Parallax depth={1.0}>
          <g opacity={light.intensity} style={{mixBlendMode: 'screen'}}>
            <ellipse cx={light.x} cy={light.y} rx={light.r} ry={light.r * 0.9} fill={light.cool ? C.snow : C.lampWarm} opacity={0.2} filter="url(#softGlow)" />
          </g>
          {fireK > 0.02 && p.fire ? (
            <g opacity={0.55 * fireK} style={{mixBlendMode: 'screen'}}>
              <ellipse cx={p.fire.x} cy={p.fire.y - (p.fire.height ?? 320) * 0.4} rx={(p.fire.width ?? 520) * 0.8} ry={(p.fire.height ?? 320) * 0.9} fill={C.cinnabarLight} opacity={0.35 * flicker} filter="url(#softGlow)" />
            </g>
          ) : null}
        </Parallax>

        {/* ---------- 粒子（分三层深度） ---------- */}
        <Parallax depth={1.15}>
          <Particles frame={frame} kind="dust" count={90} intensity={p.particles?.dust ?? 0} width={W} height={H} wind={p.particles?.wind ?? 0} />
        </Parallax>
        <Parallax depth={1.32}>
          <Particles frame={frame} kind="snow" count={150} intensity={p.particles?.snow ?? 0} width={W} height={H} scale={1.5} />
        </Parallax>
        <Parallax depth={1.2}>
          <Particles frame={frame} kind="ash" count={100} intensity={p.particles?.ash ?? 0} width={W} height={H} wind={p.particles?.wind ?? 0} scale={1.3} />
        </Parallax>

        {/* ---------- 前景遮挡（虚焦柱角），制造纵深 ---------- */}
        {p.foreground && p.foreground > 0.01 ? (
          <Parallax depth={1.45}>
            <g opacity={p.foreground} filter="url(#depthBlur)">
              <path d={`M ${-60} ${-60} L ${W * 0.13} ${-60} L ${W * 0.09} ${H + 60} L ${-60} ${H + 60} Z`} fill="#000" />
              <path d={`M ${W + 60} ${-60} L ${W * 0.91} ${-60} L ${W * 0.95} ${H + 60} L ${W + 60} ${H + 60} Z`} fill="#000" />
            </g>
          </Parallax>
        ) : null}

        {p.extra}
      </Camera>

      {/* ---------- 统一后期 ---------- */}
      <FilmLayer grain={p.film?.grain ?? 0.55} vignette={p.film?.vignette ?? 0.85} width={W} height={H} />
      <rect x={0} y={0} width={W} height={H} fill="#000" opacity={1 - (p.exposure ?? 1)} />
    </svg>
  );
};
