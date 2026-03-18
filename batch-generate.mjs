import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = process.env.AIHUBMIX_API_KEY;
if (!API_KEY) {
  console.error('请设置环境变量 AIHUBMIX_API_KEY');
  process.exit(1);
}
const PIC_DIR = 'C:/Users/Administrator/Downloads/pic';
const OUT_BASE = 'C:/Users/Administrator/Downloads/001_test/public/images';

const tasks = [
  // ── CRUZR home thumbnail ──
  { ref: 'cruzr.png', out: 'home/cruzr.png',
    prompt: 'Use this product as reference. Clean professional product photo of CRUZR humanoid service robot. Pure white background, front view, square 1:1 crop, studio lighting, isolated on white, no shadows. Keep original design: slim humanoid upper body on wheeled base, large chest touchscreen display, white and blue color scheme, AOMAN FUTURE branding.' },

  // ── CADEBOT L100 product page ──
  { ref: 'L100.jpg', out: 'products/cadebot-l100/hero-robot.png',
    prompt: 'Use this product as reference. Professional product photo of CADEBOT L100 food delivery robot. Pure white background, front view, portrait orientation, studio lighting, no shadows, high detail. Keep original design: multi-tier food tray stack, white glossy body, blue LED accents.' },
  { ref: 'L100_three_view.png', out: 'products/cadebot-l100/tech-drawing.png',
    prompt: 'Use this as reference. Generate a clean technical blueprint drawing of this food delivery robot. Engineering schematic style, orthographic front and side views with dimension lines, light grey background, blue accent lines, product spec sheet layout, vertical portrait orientation.' },
  { ref: 'L100.jpg', out: 'products/cadebot-l100/scene-restaurant.jpg',
    prompt: 'Use this delivery robot as reference. Scene: the robot is navigating between dining tables in a warm upscale restaurant, carrying food trays to guests. Realistic photography, wide 2:1 banner format, restaurant ambient lighting, diners in background.' },
  { ref: 'L100.jpg', out: 'products/cadebot-l100/scene-hotel.jpg',
    prompt: 'Use this delivery robot as reference. Scene: the robot is moving through a hotel corridor delivering room service. Realistic photography, wide 2:1 banner format, carpeted hallway, warm hotel lighting.' },
  { ref: 'L100.jpg', out: 'products/cadebot-l100/scene-hospital.jpg',
    prompt: 'Use this delivery robot as reference. Scene: the robot is delivering meal trays in a hospital ward corridor. Realistic photography, wide 2:1 banner format, clinical white environment, nurse in background.' },
  { ref: 'L100.jpg', out: 'products/cadebot-l100/scene-office.jpg',
    prompt: 'Use this delivery robot as reference. Scene: the robot is delivering lunches to employees in a modern open-plan office. Realistic photography, wide 2:1 banner format, daylit office environment.' },
  { ref: 'L100.jpg', out: 'products/cadebot-l100/case-haidilao.jpg',
    prompt: 'Use this delivery robot as reference. Scene: the robot is actively serving a fully occupied hot pot restaurant, colorful vibrant dining atmosphere, many happy guests, warm ambient lighting. Realistic editorial photography, 4:3 landscape format.' },

  // ── CLEINBOT M79 product page ──
  { ref: 'M79.jpg', out: 'products/cleinbot-m79/hero-robot.png',
    prompt: 'Use this product as reference. Professional product photo of CLEINBOT M79 commercial floor scrubbing robot. Pure white background, front view, square 1:1 crop, studio lighting, no shadows, high detail. Keep original design: wide compact body, rotating scrubbing brushes, teal green accents, AOMAN FUTURE branding.' },
  { ref: 'M79detail.jpg', out: 'products/cleinbot-m79/tech-drawing.png',
    prompt: 'Use this as reference. Generate a clean technical blueprint drawing of this floor scrubbing robot. Engineering schematic style, orthographic front and side views with dimension lines, light grey background, teal accent lines, product spec sheet layout, vertical portrait orientation.' },
  { ref: 'M79.jpg', out: 'products/cleinbot-m79/scene-shopping-mall.jpg',
    prompt: 'Use this floor cleaning robot as reference. Scene: the robot is autonomously cleaning the marble floor of a large shopping mall concourse at night after closing. Realistic photography, wide 2:1 banner format, reflective clean floor, modern mall architecture.' },
  { ref: 'M79.jpg', out: 'products/cleinbot-m79/scene-airport.jpg',
    prompt: 'Use this floor cleaning robot as reference. Scene: the robot is cleaning an international airport terminal floor while passengers are around. Realistic photography, wide 2:1 banner format, bright terminal lighting, travelers with luggage in background.' },
  { ref: 'M79.jpg', out: 'products/cleinbot-m79/scene-hotel-lobby.jpg',
    prompt: 'Use this floor cleaning robot as reference. Scene: the robot is silently cleaning a luxury hotel lobby floor near the reception area at dawn. Realistic photography, wide 2:1 banner format, marble floors, elegant hotel interior.' },
  { ref: 'M79.jpg', out: 'products/cleinbot-m79/scene-hospital-clinic.jpg',
    prompt: 'Use this floor cleaning robot as reference. Scene: the robot is cleaning a hospital corridor floor. Realistic photography, wide 2:1 banner format, sterile clinical environment, blue-white lighting.' },

  // ── CLEINBOT CC201 product page ──
  { ref: 'CC201.jpg', out: 'products/cleinbot-cc201/hero-robot.png',
    prompt: 'Use this product as reference. Professional product photo of CLEINBOT CC201 outdoor sweeping robot. Pure white background, front view, square 1:1 crop, studio lighting, no shadows, high detail. Keep original design: white body, black accents, AOMAN FUTURE branding, dustbin container on top.' },
  { ref: 'CC201_pic.png', out: 'products/cleinbot-cc201/tech-drawing.png',
    prompt: 'Use this as reference. Generate a clean technical blueprint drawing of this outdoor sweeping robot. Engineering schematic style, orthographic front and side views with dimension lines, light grey background, teal-green accent lines, product spec sheet layout, vertical portrait orientation.' },
  { ref: 'CC201.jpg', out: 'products/cleinbot-cc201/scene-outdoor-plaza.jpg',
    prompt: 'Use this outdoor sweeping robot as reference. Scene: the robot is sweeping a large outdoor urban plaza at dawn, collecting leaves and debris from paved surfaces. Realistic photography, wide 2:1 banner format, city buildings in background.' },
  { ref: 'CC201.jpg', out: 'products/cleinbot-cc201/scene-parking-lot.jpg',
    prompt: 'Use this outdoor sweeping robot as reference. Scene: the robot is cleaning gutters and lanes in an open parking lot between parked vehicles. Realistic photography, wide 2:1 banner format, overhead parking lot lighting.' },
  { ref: 'CC201.jpg', out: 'products/cleinbot-cc201/scene-university.jpg',
    prompt: 'Use this outdoor sweeping robot as reference. Scene: the robot is sweeping tree-lined campus pathways of a university on a sunny day. Realistic photography, wide 2:1 banner format, green campus environment, students visible in background.' },
  { ref: 'CC201.jpg', out: 'products/cleinbot-cc201/scene-industrial-park.jpg',
    prompt: 'Use this outdoor sweeping robot as reference. Scene: the robot is clearing heavy construction dust from a wide industrial park road. Realistic photography, wide 2:1 banner format, industrial buildings in background.' },

  // ── CRUZR product page ──
  { ref: 'cruzr.png', out: 'products/cruzr/hero-robot.png',
    prompt: 'Use this product as reference. Professional product photo of CRUZR humanoid service robot. Pure white background, front view, portrait vertical orientation, studio lighting, no shadows, high detail. Keep original design: humanoid torso on wheeled base, large chest touchscreen, white-blue color scheme, AOMAN FUTURE branding.' },
  { ref: 'cruzr_detail.png', out: 'products/cruzr/tech-drawing.png',
    prompt: 'Use this as reference. Generate a clean technical blueprint drawing of this humanoid service robot. Engineering schematic style, front and side orthographic views with height dimension lines, light grey background, blue accent lines, product spec sheet layout, vertical portrait orientation.' },
  { ref: 'cruzr.png', out: 'products/cruzr/scene-hotel-reception.jpg',
    prompt: 'Use this humanoid service robot as reference. Scene: the robot is greeting and assisting arriving guests at a luxury hotel reception lobby. Realistic photography, wide 2:1 banner format, warm hotel lobby lighting, marble floors.' },
  { ref: 'cruzr.png', out: 'products/cruzr/scene-retail-showroom.jpg',
    prompt: 'Use this humanoid service robot as reference. Scene: the robot is interacting with customers in a modern high-end retail showroom demonstrating products. Realistic photography, wide 2:1 banner format, bright retail lighting.' },
  { ref: 'cruzr.png', out: 'products/cruzr/scene-exhibition-hall.jpg',
    prompt: 'Use this humanoid service robot as reference. Scene: the robot is conducting a multilingual guided tour for visitors in a modern museum or technology exhibition hall. Realistic photography, wide 2:1 banner format, gallery lighting.' },
  { ref: 'cruzr.png', out: 'products/cruzr/scene-corporate-lobby.jpg',
    prompt: 'Use this humanoid service robot as reference. Scene: the robot is assisting a visitor with registration at a corporate office lobby reception desk. Realistic photography, wide 2:1 banner format, modern glass office building interior.' },
  { ref: 'cruzr.png', out: 'products/cruzr/case-airport.jpg',
    prompt: 'Use this humanoid service robot as reference. Scene: the robot is assisting international passengers with wayfinding at Paris Charles de Gaulle airport terminal. Realistic editorial photography, 4:3 landscape format, busy terminal background, international travelers.' },
];

async function generateImage(task) {
  const refPath = path.join(PIC_DIR, task.ref);
  const outPath = path.join(OUT_BASE, task.out);

  if (!fs.existsSync(refPath)) {
    console.log(`⚠️  跳过 ${task.out}（参考图不存在: ${task.ref}）`);
    return;
  }

  if (fs.existsSync(outPath)) {
    console.log(`⏭️  跳过 ${task.out}（已存在）`);
    return;
  }

  const ext = path.extname(task.ref).toLowerCase();
  const mimeType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
  const base64Image = fs.readFileSync(refPath).toString('base64');

  const requestBody = JSON.stringify({
    contents: [{
      parts: [
        { inline_data: { mime_type: mimeType, data: base64Image } },
        { text: task.prompt }
      ]
    }],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'aihubmix.com',
      path: '/gemini/v1beta/models/gemini-2.5-flash-image:generateContent',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
        'Content-Length': Buffer.byteLength(requestBody)
      },
      timeout: 120000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) {
            console.error(`❌ ${task.out}: ${json.error.message}`);
            return resolve(false);
          }
          const parts = json.candidates?.[0]?.content?.parts || [];
          let imageBase64 = null;
          for (const part of parts) {
            if (part.inlineData?.mimeType?.startsWith('image/')) {
              imageBase64 = part.inlineData.data;
              break;
            }
          }
          if (!imageBase64) {
            console.error(`❌ ${task.out}: 响应中无图片数据`);
            return resolve(false);
          }
          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, Buffer.from(imageBase64, 'base64'));
          console.log(`✅ ${task.out}`);
          resolve(true);
        } catch (e) {
          console.error(`❌ ${task.out}: 解析失败 - ${e.message}`);
          resolve(false);
        }
      });
    });
    req.on('error', e => { console.error(`❌ ${task.out}: 请求失败 - ${e.message}`); resolve(false); });
    req.on('timeout', () => { console.error(`❌ ${task.out}: 请求超时`); req.destroy(); resolve(false); });
    req.write(requestBody);
    req.end();
  });
}

// 并发控制：每批3个
async function runBatch(tasks, concurrency = 3) {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency);
    console.log(`\n📦 批次 ${Math.floor(i/concurrency)+1}/${Math.ceil(tasks.length/concurrency)}（共${batch.length}张）`);
    const batchResults = await Promise.all(batch.map(generateImage));
    results.push(...batchResults);
  }
  const success = results.filter(Boolean).length;
  console.log(`\n🎉 完成！成功 ${success}/${tasks.length} 张`);
}

console.log(`🚀 开始批量生成 ${tasks.length} 张图片（并发数: 3）...\n`);
runBatch(tasks, 3);
