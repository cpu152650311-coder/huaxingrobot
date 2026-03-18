import fs from 'fs';
import path from 'path';
import https from 'https';

const API_KEY = process.env.AIHUBMIX_API_KEY;
if (!API_KEY) {
  console.error('请设置环境变量 AIHUBMIX_API_KEY');
  process.exit(1);
}
const REF_IMAGE_PATH = 'C:\\Users\\Administrator\\Downloads\\pic\\CC201.png';
const OUTPUT_PATH = 'C:\\Users\\Administrator\\Downloads\\001_test\\public\\images\\home\\cleinbot-cc201.png';

const imageData = fs.readFileSync(REF_IMAGE_PATH);
const base64Image = imageData.toString('base64');

const requestBody = JSON.stringify({
  contents: [
    {
      parts: [
        {
          inline_data: {
            mime_type: 'image/png',
            data: base64Image
          }
        },
        {
          text: 'Use this robot product image as reference. Generate a clean professional product photo of the CLEINBOT CC201 outdoor sweeping robot shown in this image. Requirements: pure white background, front view facing camera, 1:1 square composition, professional studio lighting, robot isolated on white, no floor reflection or shadows, high detail product photography. Preserve the robot original design: white body, black accent strips, AOMAN FUTURE branding on front, dustbin container on top, compact rounded shape, sweeping brush mechanism at bottom.'
        }
      ]
    }
  ],
  generationConfig: {
    responseModalities: ['TEXT', 'IMAGE']
  }
});

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

console.log('正在调用 Gemini 2.5 Flash Image API（带参考图）...');

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.error) {
        console.error('API 错误:', JSON.stringify(json.error, null, 2));
        process.exit(1);
      }

      const parts = json.candidates?.[0]?.content?.parts;
      if (!parts) {
        console.log('完整响应:', JSON.stringify(json, null, 2));
        process.exit(1);
      }

      let imageBase64 = null;
      for (const part of parts) {
        // API returns camelCase: inlineData.mimeType
        if (part.inlineData?.mimeType?.startsWith('image/')) {
          imageBase64 = part.inlineData.data;
          break;
        }
      }

      if (!imageBase64) {
        console.log('响应 parts:', JSON.stringify(parts, null, 2));
        process.exit(1);
      }

      const outputDir = path.dirname(OUTPUT_PATH);
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(OUTPUT_PATH, Buffer.from(imageBase64, 'base64'));
      console.log(`✅ 图片已保存至: ${OUTPUT_PATH}`);
    } catch (e) {
      console.error('解析响应失败:', e.message);
      console.error('原始响应 (前1500字符):', data.substring(0, 1500));
    }
  });
});

req.on('error', e => console.error('请求失败:', e.message));
req.on('timeout', () => { console.error('请求超时'); req.destroy(); });
req.write(requestBody);
req.end();
