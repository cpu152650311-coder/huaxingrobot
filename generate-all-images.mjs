/**
 * Batch image generation script
 * Model: gemini-2.5-flash-image (native REST API, proven to work ~30-60s/image)
 * Run: node generate-all-images.mjs
 *
 * Fixes applied vs previous attempts:
 * 1. English prompts only — Gemini refuses to generate images with Chinese prompts, returns text instead
 * 2. Smaller reference images — L100.jpg was 2.5MB causing timeout; using L100_three_view.png (817KB)
 * 3. Timeout set to 120s (adequate for 2.5-flash, not needed for 3-pro which needs 300s+)
 */
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.AIHUBMIX_API_KEY;
if (!API_KEY) {
  console.error('请设置环境变量 AIHUBMIX_API_KEY');
  process.exit(1);
}
const BASE_URL = 'https://aihubmix.com/gemini/v1beta/models/gemini-2.5-flash-image:generateContent';
const OUT_BASE = 'C:/Users/Administrator/Downloads/001_test/public/images';

const REF = {
  cadebot: 'C:/Users/Administrator/Downloads/pic/L100_three_view.png',  // 817KB, safe size
  m79:     'C:/Users/Administrator/Downloads/pic/M79.jpg',               // 108KB
  cc201:   'C:/Users/Administrator/Downloads/pic/CC201_pic.png',         // 1.3MB, acceptable
  cruzr:   'C:/Users/Administrator/Downloads/pic/cruzr_detail.png',      // 155KB
  none:    null,
};

async function generate(refKey, prompt, outputPath) {
  const fullOut = path.join(OUT_BASE, outputPath);

  if (fs.existsSync(fullOut)) {
    console.log(`SKIP (exists): ${outputPath}`);
    return true;
  }

  const refPath = REF[refKey];
  const parts = [];

  if (refPath && fs.existsSync(refPath)) {
    const mimeType = refPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const refBase64 = fs.readFileSync(refPath).toString('base64');
    parts.push({ inlineData: { mimeType, data: refBase64 } });
  }
  parts.push({ text: prompt });

  console.log(`generating: ${outputPath}`);

  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'x-goog-api-key': API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
      }),
      signal: AbortSignal.timeout(300000),  // 5 min — API typically takes 2-3 min per image
    });

    const data = await res.json();
    if (data.error) {
      console.error(`FAIL ${outputPath}: ${data.error.message}`);
      return false;
    }

    const imgPart = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.data);
    if (!imgPart) {
      const text = data.candidates?.[0]?.content?.parts?.find(p => p.text)?.text;
      console.error(`FAIL ${outputPath}: no image in response — ${(text || '').substring(0, 100)}`);
      return false;
    }

    fs.mkdirSync(path.dirname(fullOut), { recursive: true });
    fs.writeFileSync(fullOut, Buffer.from(imgPart.inlineData.data, 'base64'));
    console.log(`OK: ${outputPath}`);
    return true;
  } catch (e) {
    console.error(`FAIL ${outputPath}: ${e.message}`);
    return false;
  }
}

// All tasks — prompts MUST be in English
const tasks = [
  // Solutions page
  ['cadebot', 'Place the delivery robot from the reference image inside a modern upscale restaurant, navigating between dining tables to deliver food, warm ambient lighting, commercial photography, wide 16:9 banner',
    'solutions/smart-catering.jpg'],
  ['m79', 'Place the cleaning robot from the reference image in a bright spacious shopping mall corridor, actively cleaning the floor, modern commercial space, cool lighting, wide 16:9 banner',
    'solutions/smart-cleaning.jpg'],
  ['cruzr', 'Place the humanoid service robot from the reference image inside a technology exhibition hall, guiding visitors, surrounded by glowing display screens, futuristic atmosphere, wide 16:9 banner',
    'solutions/smart-exhibition.jpg'],
  ['cadebot', 'Place the delivery robot from the reference image inside a modern logistics warehouse, navigating between storage shelves transporting goods, industrial overhead lighting, wide 16:9 banner',
    'solutions/smart-logistics.jpg'],
  ['cruzr', 'Place the humanoid service robot from the reference image in a modern hospital corridor, assisting patients and medical staff, clean bright clinical environment, wide 16:9 banner',
    'solutions/smart-healthcare.jpg'],
  ['cruzr', 'Place the humanoid service robot from the reference image inside a modern supermarket, helping customers navigate the store, bright retail environment, wide 16:9 banner',
    'solutions/smart-retail.jpg'],
  ['cruzr', 'Place the humanoid service robot from the reference image in an international airport terminal, guiding travelers, spacious bright departure hall, wide 16:9 banner',
    'solutions/case-paris-airport.jpg'],
  ['cadebot', 'Place the delivery robot from the reference image inside a modern automobile manufacturing factory, moving alongside the production line, industrial blue tones, wide 16:9 banner',
    'solutions/case-byd-factory.jpg'],
  ['cadebot', 'Place the delivery robot from the reference image inside a Chinese hot pot restaurant, weaving between dining tables to deliver dishes, warm red decorative lighting atmosphere, wide 16:9 banner',
    'solutions/case-haidilao.jpg'],

  // Technology page
  ['cadebot', 'Place the delivery robot from the reference image against a dark high-tech glowing blue background, showcasing its technical components and sensors, sci-fi cinematic product hero image, wide 16:9',
    'technology/hero-visual.jpg'],
  ['none', 'Modern robotics research and development laboratory, engineers working at multiple computer monitors showing robot schematics, robotic arms and test equipment on workbenches, cool blue tech lighting, wide 16:9 banner, photorealistic',
    'technology/rd-lab.jpg'],

  // Homepage solution cards
  ['cadebot', 'Luxury hotel lobby with a delivery robot serving guests, golden warm lighting, elegant marble decor, wide 16:9 banner, commercial photography',
    'home/solution-hospitality.jpg'],
  ['cruzr', 'Modern hospital with a humanoid service robot assisting medical staff near a nurses station, clean white corridors, healthcare environment, wide 16:9 banner',
    'home/solution-healthcare.jpg'],
  ['cruzr', 'Modern upscale shopping mall interior, humanoid service robot interacting with shoppers, bright retail space, wide 16:9 banner',
    'home/solution-commercial.jpg'],

  // Homepage news images
  ['cadebot', 'Technology product launch event on a stage with a next-generation delivery robot on display, dramatic blue stage lighting, professional event photography, wide 16:9 banner',
    'home/news-cadebot-gen2.jpg'],
  ['cruzr', 'Business partnership agreement signing ceremony, two executives shaking hands across a table, modern conference room, professional corporate photography, wide 16:9 banner',
    'home/news-siemens-partnership.jpg'],
  ['m79', 'CES technology trade show floor, cleaning robot on display at an award-winning exhibition booth, crowd of visitors, wide 16:9 banner photography',
    'home/news-ces2025-award.jpg'],

  // About page team headshots (no reference image needed)
  ['none', 'Professional corporate executive headshot, East Asian male in his mid 40s, dark navy business suit, confident expression, neutral grey gradient background, LinkedIn-style professional portrait, 4:5 vertical',
    'about/team-zhou-jian.jpg'],
  ['none', 'Professional corporate executive headshot, East Asian male in his early 30s, smart business casual, focused intelligent expression, blurred office background with bokeh, professional portrait, 4:5 vertical',
    'about/team-li-wei.jpg'],
  ['none', 'Professional corporate executive headshot, East Asian female in her mid 40s, elegant blazer, warm confident smile, neutral background, professional portrait photography, 4:5 vertical',
    'about/team-chen-mei.jpg'],
];

console.log(`Starting batch: ${tasks.length} images, gemini-2.5-flash-image, sequential\n`);
let ok = 0, fail = 0;

for (const [refKey, prompt, outputPath] of tasks) {
  const success = await generate(refKey, prompt, outputPath);
  success ? ok++ : fail++;
  await new Promise(r => setTimeout(r, 2000));
}

console.log(`\nDone! Success: ${ok}/${tasks.length}, Failed: ${fail}`);
