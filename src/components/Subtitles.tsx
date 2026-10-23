import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {cueAt, LYRICS} from '../lyrics';
import {PHASES, phaseAt} from '../timeline';
import {C} from '../theme';
import {clamp, lerp} from '../lib/motion';

/**
 * 歌词字幕层。
 *
 * 设计原则（对应导演要求）：
 *  - 严格逐句：只在唱这一句时出现，唱完就退场，不提前、不铺满
 *  - 位置是"构图的一部分"：每一幕有自己的锚点（偏下居中 / 偏左 / 偏右 / 上半），
 *    另外给关键句留了逐句覆写，避免压住脸、手、丝线
 *  - 不做卡拉 OK 逐字上色；只做"轻起、轻落、一次极轻的呼吸"
 *  - 全部由帧号驱动，同一帧永远同一画面
 */

type Anchor = {x: number; y: number; align: 'left' | 'center' | 'right'};

/** 每一幕的默认锚点（按画面重心选：火在下半、脸在中上、戏台居中……） */
const PHASE_ANCHOR: Record<string, Anchor> = {
  p1: {x: 0.5, y: 0.845, align: 'center'}, // 破庙：雪与地面留白多，字落在下方
  p2: {x: 0.235, y: 0.79, align: 'left'}, // 旅途：主体偏右，字落在左下留白
  p3: {x: 0.5, y: 0.86, align: 'center'}, // 舞台（本段无唱词，备用）
  p4: {x: 0.75, y: 0.8, align: 'right'}, // 衰老：人物偏左，字落在右下
  p5: {x: 0.5, y: 0.855, align: 'center'}, // 风雪：低、静
  p6: {x: 0.5, y: 0.13, align: 'center'}, // 火：火占下半，字必须上去
  p7: {x: 0.5, y: 0.855, align: 'center'},
};

/** 逐句覆写：这几句必须避开脸/手/丝线 */
const CUE_OVERRIDE: Record<number, Partial<Anchor>> = {
  0: {y: 0.87}, // 第一句：人物在中景，落低一点
  7: {y: 0.16, align: 'center', x: 0.5}, // 描妆特写：字不能压脸
  15: {x: 0.24, y: 0.2, align: 'left'}, // 手部特写：字去左上
  23: {y: 0.14}, // 火起第一句
  29: {y: 0.155}, // 最后一句：谢幕后，字在火光上方的暗处
};

const FADE_IN = 7; // 帧
const FADE_OUT = 9;

export const Subtitles: React.FC<{opacity?: number}> = ({opacity = 1}) => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const sec = frame / fps;
  const cue = cueAt(sec);
  if (!cue) return null;

  const idx = LYRICS.indexOf(cue);
  const startF = Math.round(cue.start * fps);
  const endF = Math.round(cue.end * fps);
  const inP = clamp((frame - startF) / FADE_IN);
  const outP = clamp((endF - frame) / FADE_OUT);
  const a = Math.min(inP, outP);

  const phase = phaseAt(sec);
  const base = PHASE_ANCHOR[phase.id] ?? PHASE_ANCHOR.p1;
  const ov = CUE_OVERRIDE[idx] ?? {};
  const anchor: Anchor = {...base, ...ov};

  const x = width * anchor.x;
  const y = height * anchor.y + lerp(10, 0, inP); // 轻微上浮，不做位移夸张

  const fontSize = Math.round(height * 0.042); // 1080p ≈ 45px
  const textAnchor = anchor.align === 'center' ? 'middle' : anchor.align === 'left' ? 'start' : 'end';

  // 一行太长时按标点/中点折行（不改字，只换行）
  const maxPerLine = 12;
  const chars = [...cue.text];
  const lines: string[] = [];
  if (chars.length <= maxPerLine) lines.push(cue.text);
  else {
    const half = Math.ceil(chars.length / 2);
    // 找一个最靠近中点的自然断点
    const punct = ['，', '、', '：', '；', '？', '！', ' '];
    let cut = half;
    for (let d = 0; d < 4; d++) {
      if (punct.includes(chars[half - d])) {
        cut = half - d + 1;
        break;
      }
      if (punct.includes(chars[half + d])) {
        cut = half + d + 1;
        break;
      }
    }
    lines.push(chars.slice(0, cut).join(''));
    lines.push(chars.slice(cut).join(''));
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{position: 'absolute', left: 0, top: 0, pointerEvents: 'none'}}
    >
    <g opacity={a * opacity}>
      {lines.map((ln, i) => (
        <g key={i} transform={`translate(${x} ${y + i * fontSize * 1.42})`}>
          {/* 影子：一层极轻的墨影，保证任何底色上都读得清，但不加发光 */}
          <text
            x={1.5}
            y={1.5}
            textAnchor={textAnchor}
            fill="#000"
            opacity={0.55}
            fontSize={fontSize}
            letterSpacing={fontSize * 0.09}
            style={{fontFamily: '"Noto Serif CJK SC","Source Han Serif SC","Songti SC",serif'}}
          >
            {ln}
          </text>
          <text
            textAnchor={textAnchor}
            fill={C.paper}
            opacity={0.93}
            fontSize={fontSize}
            letterSpacing={fontSize * 0.09}
            style={{fontFamily: '"Noto Serif CJK SC","Source Han Serif SC","Songti SC",serif'}}
          >
            {ln}
          </text>
        </g>
      ))}
      {/* 落款式短横线：只有第一行有，克制的一点舞台感 */}
      <rect
        x={textAnchor === 'middle' ? x - fontSize * 0.9 : textAnchor === 'start' ? x : x - fontSize * 1.8}
        y={y - fontSize * 1.15}
        width={fontSize * 1.8}
        height={1.2}
        fill={C.gold}
        opacity={0.42}
      />
    </g>
    </svg>
  );
};

export const PHASE_IDS = PHASES.map((p) => p.id);
