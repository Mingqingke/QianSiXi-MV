/**
 * 离线渲染主程序（无浏览器）。
 *
 * 两条通路：
 *   1) resvg（默认，纯 Rust，快）—— 但在部分平台上，带 2 倍以上镜头缩放的 SVG 会 panic
 *   2) sharp / librsvg（--engine=sharp，稳）—— 兼容性更好，稍慢
 *
 * 用法（先 npm run offline:build）：
 *   node offline/main.cjs --frames 0,899,2399 --out out/frames
 *   node offline/main.cjs --from 0 --to 7170 --out out/frames --workers 4
 *   node offline/main.cjs --from 0 --to 300 --out out/frames --engine sharp
 */
import fs from 'node:fs';
import path from 'node:path';
import {spawn} from 'node:child_process';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {ACTS} from '../src/acts';
import {SECTIONS, sectionFrames, VIDEO} from '../src/timeline';
import {__set} from './shim';

type Span = {from: number; duration: number; index: number};

const spans: Span[] = SECTIONS.map((s, i) => ({...sectionFrames(s), index: i}));
const TOTAL = spans.reduce((m, s) => Math.max(m, s.from + s.duration), 0);

const arg = (name: string, def?: string) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
};
const flag = (name: string) => process.argv.includes(`--${name}`);

const ENGINE = arg('engine', 'resvg')!;

const buildSvg = (globalFrame: number): string => {
  const span = spans.find((s) => globalFrame >= s.from && globalFrame < s.from + s.duration) ?? spans[spans.length - 1];
  const local = globalFrame - span.from;
  __set({frame: local, durationInFrames: span.duration, width: VIDEO.width, height: VIDEO.height, fps: VIDEO.fps});
  const Act = ACTS[span.index];
  const markup = renderToStaticMarkup(React.createElement(Act));
  return markup.includes('http://www.w3.org/2000/svg')
    ? markup
    : markup.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
};

const renderOne = async (globalFrame: number): Promise<Buffer> => {
  const svg = buildSvg(globalFrame);
  if (flag('dump')) {
    fs.writeFileSync(`/tmp/frame-${globalFrame}.svg`, svg);
    process.stdout.write(`dump /tmp/frame-${globalFrame}.svg\n`);
  }
  if (ENGINE === 'sharp') {
    const sharp = (await import('sharp')).default;
    // density: 72 = 1:1（1920×1080）；48 = 1280×720；36 = 960×540。版式不变，只改栅格尺寸
    const density = Number(arg('density', '72'));
    return await sharp(Buffer.from(svg), {density}).png({compressionLevel: 3}).toBuffer();
  }
  const {Resvg} = await import('@resvg/resvg-js');
  return new Resvg(svg, {fitTo: {mode: 'width', value: VIDEO.width}, background: '#000000'}).render().asPng();
};

const runWorker = async () => {
  const from = Number(arg('from', '0'));
  const to = Number(arg('to', String(TOTAL)));
  const outDir = arg('out', 'out/frames')!;
  fs.mkdirSync(outDir, {recursive: true});
  const t0 = Date.now();
  for (let f = from; f < to; f++) {
    const target = path.join(outDir, `f${String(f).padStart(5, '0')}.png`);
    // 断点续渲：已经渲过的帧直接跳过（被杀进程后可以原地继续）
    if (fs.existsSync(target) && fs.statSync(target).size > 1000) continue;
    const png = await renderOne(f);
    fs.writeFileSync(target, png);
    if ((f - from) % 20 === 0) {
      const el = (Date.now() - t0) / 1000;
      const rate = (f - from + 1) / Math.max(el, 0.001);
      process.stdout.write(
        `[${from}-${to}] ${f}  ${rate.toFixed(2)} fps  eta ${((to - f) / Math.max(rate, 0.01) / 60).toFixed(1)}m\n`,
      );
    }
  }
  process.stdout.write(`[${from}-${to}] done\n`);
};

const runParent = async () => {
  const outDir = arg('out', 'out/frames')!;
  fs.mkdirSync(outDir, {recursive: true});

  const only = arg('frames');
  if (only) {
    for (const s of only.split(',')) {
      const f = Number(s);
      const t0 = Date.now();
      const png = await renderOne(f);
      const p = path.join(outDir, `still-${String(f).padStart(5, '0')}.png`);
      fs.writeFileSync(p, png);
      process.stdout.write(`frame ${f} -> ${p} (${Date.now() - t0}ms, ${(png.length / 1024).toFixed(0)}KB)\n`);
    }
    return;
  }

  const from = Number(arg('from', '0'));
  const to = Number(arg('to', String(TOTAL)));
  const workers = Math.max(1, Number(arg('workers', '4')));
  const chunk = Math.ceil((to - from) / workers);
  const jobs: Promise<void>[] = [];
  for (let w = 0; w < workers; w++) {
    const a = from + w * chunk;
    const b = Math.min(to, a + chunk);
    if (a >= b) continue;
    jobs.push(
      new Promise<void>((resolve, reject) => {
        const child = spawn(
          process.execPath,
          [__filename, '--from', String(a), '--to', String(b), '--out', outDir, '--worker', '--engine', ENGINE],
          {stdio: 'inherit'},
        );
        child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`worker ${a}-${b} exit ${code}`))));
      }),
    );
  }
  await Promise.all(jobs);
  process.stdout.write(`all frames ${from}-${to} done\n`);
};

if (flag('worker')) {
  runWorker().catch((e) => {
    console.error(e);
    process.exit(1);
  });
} else {
  runParent().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
