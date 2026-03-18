/**
 * HOME 页图片 - 豆包 Seedream 4.5 批量生成
 * 运行: node gen-home-doubao.mjs
 */
import fs from 'fs';
import path from 'path';

const KEY = process.env.ARK_API_KEY;
if (!KEY) {
  console.error('请设置环境变量 ARK_API_KEY，例如: $env:ARK_API_KEY="your-key"');
  process.exit(1);
}
const PIC = 'C:/Users/Administrator/Downloads/pic';
const OUT = 'C:/Users/Administrator/Downloads/001_test/public/images/home';
const API = 'https://ark.cn-beijing.volces.com/api/v3/images/generations';
const MODEL = 'doubao-seedream-4-5-251128';

function readB64(p) {
  const buf = fs.readFileSync(p);
  const mime = p.endsWith('.png') ? 'image/png' : 'image/jpeg';
  return 'data:' + mime + ';base64,' + buf.toString('base64');
}

async function gen(refFile, prompt, outFile, useRef = true) {
  const outPath = path.join(OUT, outFile);

  const body = {
    model: MODEL,
    prompt,
    size: outFile.endsWith('.png') ? '2K' : '2K',
    watermark: false,
    response_format: 'b64_json',
  };

  if (useRef && refFile) {
    const refPath = path.join(PIC, refFile);
    if (fs.existsSync(refPath)) body.image = readB64(refPath);
  }

  const start = Date.now();
  console.log('GEN:', outFile);
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(90000),
    });
    const d = await res.json();
    const t = ((Date.now() - start) / 1000).toFixed(1) + 's';
    if (d.error) {
      console.log('  FAIL:', d.error.message);
      return false;
    }
    const b64 = d.data?.[0]?.b64_json;
    if (!b64) {
      console.log('  NO_IMG');
      return false;
    }
    fs.mkdirSync(OUT, { recursive: true });
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log('  OK', t);
    return true;
  } catch (e) {
    console.log('  ERR:', e.message);
    return false;
  }
}

// HOME 页任务: [refFile, prompt, outFile]
const tasks = [
  // 1. Hero - 多机器人，1:1 正方形，纯白底，统一构图
  ['all_robot.jpg', 'Square 1:1 composition. All four robot models from reference arranged in a horizontal row, equal spacing, same scale. Pure white #FFFFFF background only, no gradients, no colored lights. Center the group, each robot 3/4 angle facing viewer. Product catalog style, flat even lighting. No text, no shadows on floor.', 'hero-robot.png'],

  // 2-5. 产品卡 - 统一：纯白底、1:1、3/4角度、机器人居中占70%
  ['L100_1.jpg', 'Square 1:1. Robot from reference only. Pure white #FFFFFF background, no gradient, no colored light. 3/4 front-side angle. Robot centered, fills 70% of frame. Flat studio lighting. Product catalog style. No text.', 'cadebot-l100.png'],
  ['M79_1.jpg', 'Square 1:1. Robot from reference only. Pure white #FFFFFF background, no gradient, no colored light. 3/4 front-side angle. Robot centered, fills 70% of frame. Flat studio lighting. Product catalog style. No text.', 'cleinbot-m79.png'],
  ['cc201_1.jpg', 'Square 1:1. Robot from reference only. Pure white #FFFFFF background, no gradient, no colored light. 3/4 front-side angle. Robot centered, fills 70% of frame. Flat studio lighting. Product catalog style. No text.', 'cleinbot-cc201.png'],
  ['cruzr_1.jpg', 'Square 1:1. Robot from reference only. Pure white #FFFFFF background, no gradient, no colored light. 3/4 front-side angle. Robot centered, fills 70% of frame. Flat studio lighting. Product catalog style. No text.', 'cruzr.png'],

  // 6-8. Solutions - 场景图 16:9
  ['L100_1.jpg', 'Keep the delivery robot from reference. Place in luxury hotel lobby scene, marble floor, elegant atmosphere, robots delivering to guests. Wide 16:9, photorealistic.', 'solution-hospitality.jpg'],
  ['cruzr_1.jpg', 'Keep the humanoid robot from reference. Place in modern hospital corridor, assisting medical staff, clean clinical environment. Wide 16:9, photorealistic.', 'solution-healthcare.jpg'],
  ['cruzr_1.jpg', 'Keep the humanoid robot from reference. Place in modern shopping mall, interacting with shoppers, bright retail space. Wide 16:9, photorealistic.', 'solution-commercial.jpg'],

  // 9-11. News
  ['L100_1.jpg', 'Keep the delivery robot from reference. Product launch event stage, dramatic blue lighting, next-gen robot on display. Wide 16:9, event photography.', 'news-cadebot-gen2.jpg'],
  [null, 'Business partnership signing ceremony, executives shaking hands across table, modern conference room. Professional corporate photography. Wide 16:9. No robots needed.', 'news-siemens-partnership.jpg', false],
  ['M79_1.jpg', 'Keep the cleaning robot from reference. CES tech expo booth, award display, exhibition floor. Wide 16:9, trade show photography.', 'news-ces2025-award.jpg'],
];

console.log('Doubao HOME page images, ' + tasks.length + ' tasks\n');
for (const t of tasks) {
  const [ref, prompt, out, useRef] = t.length >= 4 ? t : [...t, true];
  await gen(ref, prompt, out, useRef);
  await new Promise(r => setTimeout(r, 2000));
}
console.log('\nDone.');
