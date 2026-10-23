import React from 'react';
import {Composition} from 'remotion';
import {MainVideo} from './Video';
import {VIDEO, totalFrames, AUDIO} from './timeline';

/**
 * 注册合成。
 *
 * 时长 = AUDIO.durationSec × fps（默认 239s × 30 = 7170 帧）。
 * 换成真实音频后，把 timeline.ts 里的 durationSec 改成音频秒数即可；
 * 若想更保险，可以用 @remotion/media-utils 的 getAudioDurationInSeconds()
 * 读真实时长再覆盖（见 README「校准」一节，那里给了完整代码片段）。
 */
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="QiansiXi-MV"
        component={MainVideo}
        durationInFrames={totalFrames()}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};

console.log(`[QianSiXi] ${VIDEO.width}x${VIDEO.height} @${VIDEO.fps}fps, ${AUDIO.durationSec}s → ${totalFrames()} frames`);
