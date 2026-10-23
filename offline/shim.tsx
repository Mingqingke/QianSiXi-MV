/**
 * 离线栅格化用的 Remotion 垫片。
 *
 * 为什么需要它：
 * 这个工程的目标环境是普通电脑（Remotion 正常走 Chrome 渲染）。
 * 但当前开发沙箱是 Android proot，Chrome 的子进程一启动就被内核干掉，
 * 无法执行任何截图。为了仍然能真的输出 MP4，这里提供一条"没有浏览器"的渲染通路：
 *   React 组件 → renderToStaticMarkup() → SVG 字符串 → resvg 栅格化 → PNG 序列 → ffmpeg
 *
 * 关键点：场景代码一行都不用改。Acts / Scene / Puppet / Threads 全部只依赖
 * useCurrentFrame 与 useVideoConfig 这两个钩子，以及极少数纯函数。
 * 所以"浏览器渲染"和"离线渲染"是同一套画面逻辑，不存在两套实现。
 */

let state = {
  frame: 0,
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 1,
};

export const __set = (s: Partial<typeof state>) => {
  state = {...state, ...s};
};
export const __get = () => state;

export const useCurrentFrame = () => state.frame;
export const useVideoConfig = () => ({
  width: state.width,
  height: state.height,
  fps: state.fps,
  durationInFrames: state.durationInFrames,
});

export const AbsoluteFill: React.FC<React.PropsWithChildren<{style?: React.CSSProperties}>> = ({children, style}) => (
  <div style={{position: 'absolute', inset: 0, ...style}}>{children}</div>
);

export const Sequence: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({children}) => <>{children}</>;
export const Audio: React.FC<Record<string, unknown>> = () => null;
export const staticFile = (p: string) => p;

/** 与 Remotion 的 interpolate 语义一致（本工程只用到 clamp 那一种用法） */
export const interpolate = (
  input: number,
  inputRange: number[],
  outputRange: number[],
  opts?: {extrapolateLeft?: 'clamp' | 'extend'; extrapolateRight?: 'clamp' | 'extend'},
): number => {
  const n = inputRange.length;
  if (n === 0) return 0;
  if (input <= inputRange[0]) {
    if ((opts?.extrapolateLeft ?? 'extend') === 'clamp') return outputRange[0];
  }
  if (input >= inputRange[n - 1]) {
    if ((opts?.extrapolateRight ?? 'extend') === 'clamp') return outputRange[n - 1];
  }
  for (let i = 0; i < n - 1; i++) {
    const a = inputRange[i];
    const b = inputRange[i + 1];
    if (input >= a && input <= b) {
      const t = b === a ? 0 : (input - a) / (b - a);
      return outputRange[i] + (outputRange[i + 1] - outputRange[i]) * t;
    }
  }
  return outputRange[n - 1];
};

export const spring = () => 1;
export const useVideoConfigStatic = state;
