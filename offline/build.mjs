import esbuild from 'esbuild';
import path from 'node:path';
const root = path.resolve('.');
await esbuild.build({
  entryPoints: ['offline/main.tsx'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node18',
  outfile: 'offline/main.cjs',
  external: ['@resvg/resvg-js'],
  jsx: 'automatic',
  alias: {remotion: path.join(root, 'offline/shim.tsx')},
  define: {'process.env.NODE_ENV': '"production"'},
  logLevel: 'info',
});
