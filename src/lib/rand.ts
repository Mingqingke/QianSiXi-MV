/** 确定性伪随机：同样的 seed 永远得到同样的数，保证同一帧永远渲染出同一画面 */
export const hash = (seed: number): number => {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
};

/** 第 i 个粒子的确定性随机值，salt 用于同一帧内不同维度 */
export const rnd = (i: number, salt = 1): number => hash(i * 13.37 + salt * 7.77);

/** 确定性一维噪声（用于抖动 / 尘埃摆动），相邻整数间平滑插值 */
export const noise = (t: number, seed = 0): number => {
  const i = Math.floor(t);
  const f = t - i;
  const a = hash(i + seed * 100.5);
  const b = hash(i + 1 + seed * 100.5);
  const u = f * f * (3 - 2 * f);
  return a + (b - a) * u;
};
