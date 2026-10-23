/**
 * 歌词时间轴（逐句，来自带时间戳的 LRC）。
 *
 * 数据来源与核对状态见 docs/LYRICS-SYNC.md —— 这里的每一句都带独立时间戳，
 * 可以直接按句修改，改完字幕立即跟着变（不需要动任何场景代码）。
 *
 * 重要：LRC 里前几条（0.00 / 1.00 / 2.00）是"制作人 / 作词 / 作曲"的署名行，
 * 不是唱词，导入时按时间窗剔除了；空文本行是段落分隔标记，只用于取"本句何时结束"。
 */

import {LRC_RAW} from './assets/qiansixiLrc';

export type LyricCue = {
  /** 秒 */
  start: number;
  /** 秒（= 下一句开始；最后一句到收尾标记为止） */
  end: number;
  text: string;
};

const TS = /^\[(\d+):(\d+)[.:](\d+)\](.*)$/;

type Raw = {t: number; text: string};

export const parseLrc = (raw: string): Raw[] => {
  const out: Raw[] = [];
  for (const line of raw.split('\n')) {
    const m = line.trim().match(TS);
    if (!m) continue;
    const mm = Number(m[1]);
    const ss = Number(m[2]);
    const frac = m[3].length === 3 ? Number(m[3]) / 1000 : Number(m[3]) / 100;
    out.push({t: Math.round((mm * 60 + ss + frac) * 1000) / 1000, text: m[4].trim()});
  }
  return out.sort((a, b) => a.t - b.t);
};

const RAW = parseLrc(LRC_RAW);

/** 署名行（0.00 起的三行）不是唱词：20 秒之前的条目一律不当作歌词 */
const CREDIT_CUTOFF = 20;

export const LYRICS: LyricCue[] = (() => {
  const sung = RAW.filter((r) => r.t >= CREDIT_CUTOFF);
  const cues: LyricCue[] = [];
  for (let i = 0; i < sung.length; i++) {
    const cur = sung[i];
    const next = sung[i + 1];
    if (!cur.text) continue; // 段落分隔标记，只提供"上一句何时结束"
    cues.push({
      start: cur.t,
      end: next ? next.t : cur.t + 6,
      text: cur.text,
    });
  }
  return cues;
})();

/** 前奏结束（第一句唱词）与收尾时间点，供分幕与镜头使用 */
export const SONG_MARKS = {
  /** 第一句唱词的起点 */
  firstVocal: LYRICS[0]?.start ?? 23.65,
  /** 最后一句唱词的起点 */
  lastVocalStart: LYRICS[LYRICS.length - 1]?.start ?? 218.66,
  /** 最后一句唱词结束 */
  lastVocalEnd: LYRICS[LYRICS.length - 1]?.end ?? 225.34,
  /** LRC 里的大间奏（戏腔/器乐段落）区间 —— 无唱词的最长空档 */
  breakStart: 113.39,
  breakEnd: 135.31,
} as const;

/** 某时刻正在唱的那一句（给字幕组件用；纯函数，帧号决定一切） */
export const cueAt = (sec: number): LyricCue | null => {
  for (const c of LYRICS) {
    if (sec >= c.start && sec < c.end) return c;
  }
  return null;
};
