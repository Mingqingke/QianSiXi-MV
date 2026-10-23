import sharp from 'sharp';
import fs from 'node:fs';
const N = 128;
const buf = Buffer.alloc(N*N*4);
const hash = (x)=>{const s=Math.sin(x*127.1+311.7)*43758.5453123; return s-Math.floor(s);};
for (let y=0;y<N;y++) for (let x=0;x<N;x++){
  const i=(y*N+x)*4;
  // 三频叠加的确定性噪点 = 纸纤维
  const n = hash(x*13.1+y*7.7)*0.55 + hash(Math.floor(x/2)*3.3+Math.floor(y/3)*5.1)*0.3 + hash(x*0.7+y*31.3)*0.15;
  const v = Math.round(120 + n*135);
  buf[i]=v; buf[i+1]=v; buf[i+2]=v; buf[i+3]=255;
}
const png = await sharp(buf,{raw:{width:N,height:N,channels:4}}).png({compressionLevel:9}).toBuffer();
const b64 = png.toString('base64');
fs.writeFileSync('src/assets/grain.ts', `/** 预生成的纸纤维纹理（128×128，确定性噪点；避免逐帧 feTurbulence，渲染快 3 倍以上） */\nexport const GRAIN = 'data:image/png;base64,${b64}';\n`);
fs.mkdirSync('public',{recursive:true});
fs.writeFileSync('public/grain.png', png);
console.log('grain', png.length, 'bytes ->', b64.length, 'b64');
