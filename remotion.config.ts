import {Config} from '@remotion/cli/config';

// 输出序列帧格式：jpeg 更快、更省内存；需要透明时不适用（本片不需要）
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(92);
// 本工程渲染在无 GPU 环境（容器 / 手机 proot）中更稳
Config.setChromiumOpenGlRenderer('swangle');
Config.setChromiumDisableWebSecurity(false);
// 长视频稳定优先，避免多标签页并发把内存打满
Config.setConcurrency(2);
Config.setOverwriteOutput(true);
