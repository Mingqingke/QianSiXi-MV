/**
 * 统一设计系统：颜色 / 材质 / 光线 / 景深。
 * 所有场景、角色、特效只能引用这里的常量，保证全片视觉统一。
 */

export const C = {
  // 主色
  cinnabar: '#B4322A', // 朱砂
  cinnabarDeep: '#7A1E18',
  cinnabarLight: '#D9573F',
  ink: '#0A0A0C', // 墨黑
  inkSoft: '#141216',
  inkWarm: '#1C1614',
  paper: '#E8DCC3', // 旧纸白
  paperShade: '#C9B995',
  paperDim: '#8A7A60',
  gold: '#C9A24A', // 暗金
  goldBright: '#E8C87A',
  goldDim: '#8A6C2E',
  skin: '#F0DFC6', // 木偶脸底色
  wood: '#8A5A3B',
  woodDark: '#5A3722',
  // 光
  lampWarm: '#FFB46B',
  flameHot: '#FFD79A',
  snow: '#CFE0E8',
  night: '#07070A',
} as const;

/** 纸张 / 木雕 / 丝线共用的 SVG 滤镜与纹理定义，挂在每个场景的 <defs> 里 */
export const FONT_SERIF = 'Songti SC, Noto Serif CJK SC, Source Han Serif SC, serif';
