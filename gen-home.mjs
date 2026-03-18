/**
 * 首页图片生成脚本 v2
 * 模型：gemini-3-pro-image-preview（去掉 imageConfig，prompt 精简）
 */
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.AIHUBMIX_API_KEY;
if (!API_KEY) {
  console.error('请设置环境变量 AIHUBMIX_API_KEY');
  process.exit(1);
}
const BASE_URL = 'https://aihubmix.com/gemini/v1beta/models/gemini-3-pro-image-preview:generateContent';
const OUT_DIR  = 'C:/Users/Administrator/Downloads/001_test/public/images/home';
const PIC_DIR  = 'C:/Users/Administrator/Downloads/pic';

async function generate(refFile, prompt, outFile, retries = 3) {
  const outPath = path.join(OUT_DIR, outFile);

  // 跳过已生成的文件
  if (fs.existsSync(outPath)) {
    console.log(`⏭️  [${outFile}] already exists, skipping`);
    return true;
  }

  const refPath = path.join(PIC_DIR, refFile);
  const mimeType = refFile.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const refBase64 = fs.readFileSync(refPath).toString('base64');

  for (let attempt = 1; attempt <= retries; attempt++) {
    console.log(`\n⏳ [${outFile}] attempt ${attempt}/${retries}...`);
    const start = Date.now();

    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'x-goog-api-key': API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            role: 'user',
            parts: [
              { inlineData: { mimeType, data: refBase64 } },
              { text: prompt }
            ]
          }],
          generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
        }),
        signal: AbortSignal.timeout(300000),
      });

      const data = await res.json();
      const elapsed = ((Date.now() - start) / 1000).toFixed(1) + 's';

      if (data.error) {
        console.error(`  ❌ ERROR (${elapsed}): ${data.error.message}`);
        if (attempt < retries) { await new Promise(r => setTimeout(r, 5000)); continue; }
        return false;
      }

      const imgPart = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.data);
      if (!imgPart) {
        const txt = data.candidates?.[0]?.content?.parts?.find(p => p.text)?.text;
        console.error(`  ❌ NO IMAGE (${elapsed}): ${(txt || '').substring(0, 120)}`);
        if (attempt < retries) { await new Promise(r => setTimeout(r, 5000)); continue; }
        return false;
      }

      fs.mkdirSync(OUT_DIR, { recursive: true });
      fs.writeFileSync(outPath, Buffer.from(imgPart.inlineData.data, 'base64'));
      console.log(`✅ [${outFile}] done (${elapsed})`);
      return true;

    } catch (e) {
      const elapsed = ((Date.now() - start) / 1000).toFixed(1) + 's';
      console.error(`  ❌ ${e.message} (${elapsed})`);
      if (attempt < retries) {
        console.log(`  ↩️  retrying in 5s...`);
        await new Promise(r => setTimeout(r, 5000));
      }
    }
  }
  return false;
}

// 1. Hero — 多机器人组合宣传图
await generate(
  'all_robot.jpg',
  'All robots from the reference image arranged together in a premium studio hero shot. Pure white background with soft blue-teal gradient light rays behind them. Professional soft-box studio lighting. High-end tech product photography style, like Apple keynote visuals. Square composition, no text, no floor reflections.',
  'hero-robot.png'
);

// 2. CADEBOT L100 产品卡
await generate(
  'L100_1.jpg',
  'The delivery robot from the reference image in premium product photography. 3/4 side angle view, NOT straight-on front. Clean white background with subtle flowing blue-white soft light gradient behind the robot. Professional studio lighting with gentle shadows for depth. Square composition, robot fills 70% of frame. No text, no floor, no environment.',
  'cadebot-l100.png'
);

// 3. CLEINBOT M79 产品卡
await generate(
  'M79_1.jpg',
  'The floor cleaning robot from the reference image in premium product photography. 3/4 side angle view, NOT straight-on front. Clean white background with subtle flowing teal-white soft light gradient. Professional studio lighting with gentle shadows. Square composition, robot fills 70% of frame. No text, no floor, no environment.',
  'cleinbot-m79.png'
);

// 4. CLEINBOT CC201 产品卡
await generate(
  'cc201_1.jpg',
  'The outdoor sweeping robot from the reference image in premium product photography. 3/4 side angle view, NOT straight-on front. Clean white background with subtle flowing teal-white soft light gradient. Professional studio lighting, gentle side shadows for depth. Square composition, robot fills 70% of frame. No text, no floor, no environment.',
  'cleinbot-cc201.png'
);

// 5. CRUZR 服务机器人产品卡
await generate(
  'cruzr_1.jpg',
  'The humanoid service robot from the reference image in premium product photography. 3/4 side angle view, NOT straight-on front. Clean white background with subtle flowing blue-white soft light gradient. Professional studio rim lighting creating elegant edge glow. Square composition, robot fills 65-70% of frame. No text, no floor, no environment.',
  'cruzr.png'
);

console.log('\n🎉 Done!');
