import React from 'react';
import {C} from '../theme';
import {GRAIN} from '../assets/grain';

/**
 * 全片共用的材质定义：纸、木、绢、光。
 * 只在这里定义一次，所有场景引用同一套 id，保证"看起来是同一个世界"。
 * 性能：纹理全部是静态滤镜，不做逐帧重算。
 */
export const SceneDefs: React.FC = () => (
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#050507" />
      <stop offset="45%" stopColor="#120D0C" />
      <stop offset="78%" stopColor="#1E1411" />
      <stop offset="100%" stopColor="#0A0808" />
    </linearGradient>

    <radialGradient id="lampGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor={C.lampWarm} stopOpacity="0.85" />
      <stop offset="45%" stopColor={C.cinnabar} stopOpacity="0.28" />
      <stop offset="100%" stopColor={C.cinnabar} stopOpacity="0" />
    </radialGradient>

    <linearGradient id="robeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={C.cinnabarLight} />
      <stop offset="42%" stopColor={C.cinnabar} />
      <stop offset="100%" stopColor={C.cinnabarDeep} />
    </linearGradient>
    <linearGradient id="robeGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={C.cinnabar} />
      <stop offset="55%" stopColor={C.cinnabarDeep} />
      <stop offset="100%" stopColor="#4E120E" />
    </linearGradient>

    <linearGradient id="woodLimb" x1="0" y1="0" x2="1" y2="0.6">
      <stop offset="0%" stopColor="#C08A5E" />
      <stop offset="55%" stopColor={C.wood} />
      <stop offset="100%" stopColor={C.woodDark} />
    </linearGradient>
    <linearGradient id="woodLimbFar" x1="0" y1="0" x2="1" y2="0.6">
      <stop offset="0%" stopColor="#7A4C32" />
      <stop offset="100%" stopColor="#3E2517" />
    </linearGradient>
    <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="0.8">
      <stop offset="0%" stopColor="#FBF0DC" />
      <stop offset="70%" stopColor={C.skin} />
      <stop offset="100%" stopColor="#D3B78F" />
    </linearGradient>
    <radialGradient id="jointGrad" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stopColor="#C79B6B" />
      <stop offset="70%" stopColor={C.wood} />
      <stop offset="100%" stopColor={C.woodDark} />
    </radialGradient>
    <linearGradient id="hairGrad" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stopColor="#26211F" />
      <stop offset="55%" stopColor="#14100F" />
      <stop offset="100%" stopColor="#0A0707" />
    </linearGradient>
    <linearGradient id="robeDark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#6E1A14" />
      <stop offset="100%" stopColor="#3A0A07" />
    </linearGradient>
    <linearGradient id="sashGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#8E241C" />
      <stop offset="50%" stopColor={"#7A1E18"} />
      <stop offset="100%" stopColor="#4A0F0B" />
    </linearGradient>

    <linearGradient id="ppRobe" x1="0.15" y1="0" x2="0.85" y2="1">
      <stop offset="0%" stopColor="#221B1A" />
      <stop offset="42%" stopColor="#12100F" />
      <stop offset="100%" stopColor="#070606" />
    </linearGradient>
    <linearGradient id="ppRim" x1="1" y1="0" x2="0" y2="0.3">
      <stop offset="0%" stopColor="#FFDFB4" stopOpacity="0.9" />
      <stop offset="50%" stopColor="#E8B87C" stopOpacity="0.3" />
      <stop offset="100%" stopColor="#E8B87C" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0%" stopColor="#FFE3B8" stopOpacity="0.95" />
      <stop offset="45%" stopColor="#FFC98A" stopOpacity="0.35" />
      <stop offset="100%" stopColor="#FFC98A" stopOpacity="0" />
    </linearGradient>
    <radialGradient id="faceGrad" cx="42%" cy="34%" r="72%">
      <stop offset="0%" stopColor="#FBF0DC" />
      <stop offset="62%" stopColor={C.skin} />
      <stop offset="100%" stopColor="#D9BF9A" />
    </radialGradient>

    <linearGradient id="flameGrad" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#FFE9B0" stopOpacity="0.95" />
      <stop offset="30%" stopColor={C.flameHot} stopOpacity="0.85" />
      <stop offset="62%" stopColor={C.cinnabarLight} stopOpacity="0.6" />
      <stop offset="100%" stopColor={C.cinnabarDeep} stopOpacity="0" />
    </linearGradient>

    <linearGradient id="curtainGrad" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0%" stopColor="#4A0F0C" />
      <stop offset="28%" stopColor={C.cinnabarDeep} />
      <stop offset="52%" stopColor={C.cinnabar} />
      <stop offset="74%" stopColor={C.cinnabarDeep} />
      <stop offset="100%" stopColor="#3A0B09" />
    </linearGradient>

    <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#2A1B14" />
      <stop offset="100%" stopColor="#150E0B" />
    </linearGradient>

    <linearGradient id="paperScreen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={C.paper} stopOpacity="0.16" />
      <stop offset="100%" stopColor={C.paperShade} stopOpacity="0.05" />
    </linearGradient>



    <linearGradient id="neckGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#D9BE97" />
      <stop offset="60%" stopColor="#B89673" />
      <stop offset="100%" stopColor="#8A6A4C" />
    </linearGradient>
    <linearGradient id="faceShade" x1="0.2" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
      <stop offset="55%" stopColor="#C08A5E" stopOpacity="0.12" />
      <stop offset="100%" stopColor="#6B3B22" stopOpacity="0.32" />
    </linearGradient>
    <radialGradient id="screenShade" cx="50%" cy="42%" r="62%">
      <stop offset="45%" stopColor="#000" stopOpacity="0" />
      <stop offset="100%" stopColor="#000" stopOpacity="0.72" />
    </radialGradient>
    <linearGradient id="hazeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={C.paper} stopOpacity="0" />
      <stop offset="45%" stopColor={C.paper} stopOpacity="0.055" />
      <stop offset="100%" stopColor={C.paper} stopOpacity="0" />
    </linearGradient>
    <radialGradient id="vignetteGrad" cx="50%" cy="48%" r="72%">
      <stop offset="52%" stopColor="#000" stopOpacity="0" />
      <stop offset="82%" stopColor="#000" stopOpacity="0.42" />
      <stop offset="100%" stopColor="#000" stopOpacity="0.86" />
    </radialGradient>

    {/* 纸纤维：预生成的 128×128 确定性噪点，用 pattern 平铺（比逐帧 feTurbulence 快 3 倍以上） */}
    <pattern id="grainPat" width="256" height="256" patternUnits="userSpaceOnUse">
      <image href={GRAIN} x="0" y="0" width="256" height="256" preserveAspectRatio="none" />
    </pattern>

    {/* 木雕纹理：拉伸的噪点当作木纹 */}
    <filter id="woodGrain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.02 0.6" numOctaves="4" seed="3" result="n" />
      <feColorMatrix in="n" type="saturate" values="0" result="g" />
      <feComponentTransfer in="g" result="a">
        <feFuncA type="linear" slope="0.32" intercept="0" />
      </feComponentTransfer>
    </filter>

    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="14" />
    </filter>
    <filter id="tinyGlow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="3.2" />
    </filter>
    <filter id="depthBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" />
    </filter>
    <filter id="farBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" />
    </filter>

    <linearGradient id="skyWarm" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#0B0A0C" />
      <stop offset="60%" stopColor="#1A1210" />
      <stop offset="100%" stopColor="#2A1A14" />
    </linearGradient>
  </defs>
);

/** 纸纹 + 暗角 + 片头片尾的黑场，铺在每一幕最上层 */
export const FilmLayer: React.FC<{grain?: number; vignette?: number; width?: number; height?: number}> = ({
  grain = 0.5,
  vignette = 0.85,
  width = 1920,
  height = 1080,
}) => (
  <g style={{pointerEvents: 'none'}}>
    <rect x={0} y={0} width={width} height={height} fill="url(#grainPat)" opacity={0.3 * grain} />
    <rect x={0} y={0} width={width} height={height} fill="url(#vignetteGrad)" opacity={vignette} />
  </g>
);
