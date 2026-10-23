import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {SECTIONS, sectionFrames, AUDIO} from './timeline';
import {ACTS} from './acts';
import {Subtitles} from './components/Subtitles';

/**
 * 主时间轴：九幕首尾相接铺满整首歌。
 * 每一幕都是一个独立的 Sequence —— 好处是渲染器可以按幕并行、也能单独渲染某一幕检查。
 * 音频挂在这里；AUDIO.enabled 为 false 时渲染出无声视频（见 README 的校准步骤）。
 */
export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: '#000'}}>
      {SECTIONS.map((s, i) => {
        const {from, duration} = sectionFrames(s);
        const Act = ACTS[i];
        if (!Act) return null;
        return (
          <Sequence key={s.id} from={from} durationInFrames={duration} name={s.name} layout="none">
            <Act />
          </Sequence>
        );
      })}
      {/* 歌词字幕：独立层，但和镜头共用同一套时间轴（cue 的秒数 → 帧号） */}
      <Subtitles />

      {AUDIO.enabled ? <Audio src={staticFile(AUDIO.src)} /> : null}
    </AbsoluteFill>
  );
};
