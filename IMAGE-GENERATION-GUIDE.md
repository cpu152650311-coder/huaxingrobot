# 网站图片生成指南

## 核心结论

**最终有效方案：Gemini 3 Pro（原生 API 格式）**

之前所有测试失败的根本原因：使用了 OpenAI 兼容格式（`/v1/chat/completions`）调用 Gemini，
该格式无法传递 `imageConfig`（比例/分辨率控制），也可能影响垫图识别效果。

正确方式必须使用 **Gemini 原生 REST 格式**，端点为 `https://aihubmix.com/gemini/v1beta/models/...`。

---

## 工作代码（Node.js）

```javascript
const fs = require('fs');

const AIHUBMIX_KEY = 'sk-rQG7HCouVlc9Tt8gC16864C1B1A94b8a9811956880D96a57';
const REF_IMAGE_PATH = 'C:\\Users\\15265\\.cursor\\projects\\c-Users-15265-Downloads-Cursor-project-001-test\\assets\\c__Users_15265_AppData_Roaming_Cursor_User_workspaceStorage_c2e783243ba3ce902854a7fe0547b1d1_images____-3-6682da28-4864-4e64-9733-119571365b8d.png';

async function generateWithGeminiPro(prompt, outputPath, aspectRatio = '16:9', resolution = '2K') {
  const refBase64 = fs.readFileSync(REF_IMAGE_PATH).toString('base64');

  const response = await fetch(
    'https://aihubmix.com/gemini/v1beta/models/gemini-3-pro-image-preview:generateContent',
    {
      method: 'POST',
      headers: {
        'x-goog-api-key': AIHUBMIX_KEY,  // 注意：这里用 x-goog-api-key，不是 Authorization Bearer
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [
            { inlineData: { mimeType: 'image/png', data: refBase64 } },  // 垫图
            { text: prompt }
          ]
        }],
        generationConfig: {
          responseModalities: ['TEXT', 'IMAGE'],
          imageConfig: {
            aspectRatio: aspectRatio,  // '16:9' | '1:1' | '9:16' | '4:3' 等
            imageSize: resolution,     // '1K' | '2K' | '4K'
          }
        }
      }),
      signal: AbortSignal.timeout(300000),  // 5 分钟超时（Pro 模型约需 60-90 秒）
    }
  );

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find(p => p.inlineData?.data);

  if (imgPart) {
    fs.writeFileSync(outputPath, Buffer.from(imgPart.inlineData.data, 'base64'));
    console.log(`✅ 保存成功: ${outputPath}`);
  } else {
    const textPart = parts.find(p => p.text);
    console.error('❌ 未返回图片:', textPart?.text || JSON.stringify(data).substring(0, 300));
  }
}

// 使用示例
generateWithGeminiPro(
  '将参考图中的机器人放入一个忙碌的餐厅中，运送着各个餐桌的菜品',
  'public/images/debug/test-output.png',
  '16:9',
  '2K'
);
```

---

## 关键参数对比（踩坑记录）

| 参数 | ❌ 错误写法（OpenAI格式） | ✅ 正确写法（Gemini原生） |
|---|---|---|
| **端点** | `https://aihubmix.com/v1/chat/completions` | `https://aihubmix.com/gemini/v1beta/models/gemini-3-pro-image-preview:generateContent` |
| **认证头** | `Authorization: Bearer sk-xxx` | `x-goog-api-key: sk-xxx` |
| **图片字段** | `inline_data`（snake_case） | `inlineData`（camelCase） |
| **比例控制** | 无法传递 | `generationConfig.imageConfig.aspectRatio` |
| **分辨率** | 无法传递 | `generationConfig.imageConfig.imageSize` |
| **模态声明** | `modalities: ['text','image']` | `generationConfig.responseModalities: ['TEXT','IMAGE']` |
| **图片提取** | `choices[0].message.multi_mod_content[].inline_data.data` | `candidates[0].content.parts[].inlineData.data` |

---

## 支持的 imageConfig 参数

### aspectRatio（比例）
- `"1:1"` - 正方形
- `"16:9"` - 横版宽屏 ✅ 网站横幅推荐
- `"9:16"` - 竖版
- `"4:3"` - 横版标准
- `"3:4"` - 竖版标准
- `"2:3"` - 竖版长图
- `"3:2"` - 横版
- `"4:5"` - 接近正方竖版
- `"21:9"` - 超宽屏

### imageSize（分辨率）
- `"1K"` - 默认，适合草稿
- `"2K"` - 标准高清 ✅ 网站推荐
- `"4K"` - 超高清，生成更慢

---

## 垫图说明

- **垫图格式**：PNG（优于 JPEG，更清晰，无压缩损失）
- **垫图路径**（高清产品图 PNG）：
  ```
  C:\Users\15265\.cursor\projects\c-Users-15265-Downloads-Cursor-project-001-test\assets\
  c__Users_15265_AppData_Roaming_Cursor_User_workspaceStorage_..._images____-3-6682da28-4864-4e64-9733-119571365b8d.png
  ```
- **原始产品 JPEG 路径**（备用）：
  - `C:\Users\15265\Downloads\pic\l100.jpg`
  - `C:\Users\15265\Downloads\pic\m79.jpg`
  - `C:\Users\15265\Downloads\pic\cc201.jpg`
  - `C:\Users\15265\Downloads\pic\cruzr.jpg`

---

## 待生成图片清单

> 完成状态：⬜ 未生成 / ✅ 已生成

### Solutions 页面 `/public/images/solutions/`
| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| smart-catering.jpg | 16:9 | 将参考图中的机器人放入一个现代高档餐厅场景，在多张餐桌之间穿行送餐，暖色调灯光，商业摄影风格 | ⬜ |
| smart-cleaning.jpg | 16:9 | 将参考图中的机器人放入一个明亮宽敞的商场走廊，正在执行清洁任务，现代商业空间，冷色调灯光 | ⬜ |
| smart-exhibition.jpg | 16:9 | 将参考图中的机器人放入一个科技展览馆，引导参观者，周围有展示屏和展品，未来感强 | ⬜ |
| smart-logistics.jpg | 16:9 | 将参考图中的机器人放入一个现代物流仓库，在货架之间穿行运输货物，工业照明 | ⬜ |
| smart-healthcare.jpg | 16:9 | 将参考图中的机器人放入一个现代医院走廊，为病人和医护人员提供服务，干净明亮 | ⬜ |
| smart-retail.jpg | 16:9 | 将参考图中的机器人放入一个现代超市或零售店，协助顾客导购，明亮零售环境 | ⬜ |
| case-paris-airport.jpg | 16:9 | 将参考图中的机器人放入一个国际机场大厅，为旅客提供引导服务，宽敞明亮的航站楼 | ⬜ |
| case-byd-factory.jpg | 16:9 | 将参考图中的机器人放入一个现代汽车制造工厂，在生产线旁穿行，工业蓝色调 | ⬜ |
| case-haidilao.jpg | 16:9 | 将参考图中的机器人放入一个中式火锅餐厅，穿行于餐桌之间送餐，红色暖色调装饰 | ⬜ |

### Technology 页面 `/public/images/technology/`
| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| hero-visual.jpg | 16:9 | 将参考图中的机器人放入一个科技感十足的蓝色背景，展示机器人的技术细节，科幻感，专业产品宣传图 | ⬜ |
| rd-lab.jpg | 16:9 | 现代机器人研发实验室，工程师在屏幕前工作，机器人零部件和测试台，科技蓝色调（无需机器人垫图） | ⬜ |

### CADEBOT L100 页面 `/public/images/products/cadebot-l100/`
| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| hero-robot.png | 1:1 | 将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格，干净简洁 | ⬜ |
| tech-drawing.png | 4:3 | 将参考图中的机器人以工程技术图纸风格呈现，蓝白色调，标注各部件 | ⬜ |
| scenario-restaurant.jpg | 16:9 | 将参考图中的机器人放入一个忙碌的餐厅中，运送着各个餐桌的菜品 | ⬜ |
| scenario-hotel.jpg | 16:9 | 将参考图中的机器人放入一个高档酒店大厅，为客人提供引导和服务 | ⬜ |
| scenario-hospital.jpg | 16:9 | 将参考图中的机器人放入一个现代医院病房走廊，为医护人员运送物品 | ⬜ |
| scenario-office.jpg | 16:9 | 将参考图中的机器人放入一个现代办公室，在工位之间穿行提供服务 | ⬜ |
| case-haidilao.jpg | 16:9 | 将参考图中的机器人放入海底捞风格的火锅餐厅，穿行送餐，红色热闹氛围 | ⬜ |

### CLEINBOT M79 页面 `/public/images/products/cleinbot-m79/`
> ⚠️ 使用 `m79.jpg` 作为垫图替换 PNG 路径

| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| hero-robot.png | 1:1 | 将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格 | ⬜ |
| scenario-mall.jpg | 16:9 | 将参考图中的清洁机器人放入一个大型商场中庭，正在进行地面清洁，人流穿梭 | ⬜ |
| scenario-airport.jpg | 16:9 | 将参考图中的清洁机器人放入一个国际机场航站楼，清洁宽敞的走廊 | ⬜ |
| scenario-hospital.jpg | 16:9 | 将参考图中的清洁机器人放入一个现代医院走廊，消毒清洁，干净明亮环境 | ⬜ |
| case-highlight.jpg | 16:9 | 将参考图中的清洁机器人放入一个大型企业办公楼大厅，自主清洁，现代建筑风格 | ⬜ |

### CLEINBOT CC201 页面 `/public/images/products/cleinbot-cc201/`
> ⚠️ 使用 `cc201.jpg` 作为垫图

| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| hero-robot.png | 1:1 | 将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格 | ⬜ |
| scenario-restaurant.jpg | 16:9 | 将参考图中的机器人放入一个现代餐厅，高效送餐，暖色调商业空间 | ⬜ |
| scenario-hotel.jpg | 16:9 | 将参考图中的机器人放入一个星级酒店走廊，客房送物服务 | ⬜ |
| scenario-office.jpg | 16:9 | 将参考图中的机器人放入一个现代写字楼大厅，前台引导服务 | ⬜ |
| case-highlight.jpg | 16:9 | 将参考图中的机器人放入一个大型连锁餐厅，高峰期送餐场景，热闹氛围 | ⬜ |

### CRUZR 页面 `/public/images/products/cruzr/`
> ⚠️ 使用 `cruzr.jpg` 作为垫图

| 文件名 | 比例 | 提示词 | 状态 |
|---|---|---|---|
| hero-robot.png | 1:1 | 将参考图中的人形服务机器人放在纯白背景上，正面展示，专业产品棚拍风格 | ⬜ |
| scenario-retail.jpg | 16:9 | 将参考图中的人形机器人放入一个现代零售店，与顾客互动导购，明亮商业环境 | ⬜ |
| scenario-exhibition.jpg | 16:9 | 将参考图中的人形机器人放入一个科技展览馆，作为展台讲解员，吸引参观者 | ⬜ |
| scenario-hotel.jpg | 16:9 | 将参考图中的人形机器人放入一个高档酒店大堂，迎宾接待，优雅专业氛围 | ⬜ |
| scenario-bank.jpg | 16:9 | 将参考图中的人形机器人放入一个现代银行营业厅，引导客户办理业务 | ⬜ |
| case-highlight.jpg | 16:9 | 将参考图中的人形机器人放入一个大型企业接待大厅，接待访客，现代商务环境 | ⬜ |

---

## 批量生成脚本

下次回来后，直接运行以下命令批量生成所有图片（每张约 60-90 秒，顺序执行）：

```bash
node generate-all-images.mjs
```

脚本文件：`generate-all-images.mjs`（需要按下方模板创建）

```javascript
// generate-all-images.mjs
import fs from 'fs';
import path from 'path';

const AIHUBMIX_KEY = 'sk-rQG7HCouVlc9Tt8gC16864C1B1A94b8a9811956880D96a57';

// 垫图路径映射
const REF_IMAGES = {
  cadebot: 'C:\\Users\\15265\\.cursor\\projects\\c-Users-15265-Downloads-Cursor-project-001-test\\assets\\c__Users_15265_AppData_Roaming_Cursor_User_workspaceStorage_c2e783243ba3ce902854a7fe0547b1d1_images____-3-6682da28-4864-4e64-9733-119571365b8d.png',
  m79:     'C:\\Users\\15265\\Downloads\\pic\\m79.jpg',
  cc201:   'C:\\Users\\15265\\Downloads\\pic\\cc201.jpg',
  cruzr:   'C:\\Users\\15265\\Downloads\\pic\\cruzr.jpg',
};

async function generate(refKey, prompt, outputPath, aspectRatio = '16:9', resolution = '2K') {
  const refPath = REF_IMAGES[refKey];
  const mimeType = refPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const refBase64 = fs.readFileSync(refPath).toString('base64');

  console.log(`⏳ 生成中: ${path.basename(outputPath)}`);

  const res = await fetch(
    'https://aihubmix.com/gemini/v1beta/models/gemini-3-pro-image-preview:generateContent',
    {
      method: 'POST',
      headers: { 'x-goog-api-key': AIHUBMIX_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [
            { inlineData: { mimeType, data: refBase64 } },
            { text: prompt }
          ]
        }],
        generationConfig: {
          responseModalities: ['TEXT', 'IMAGE'],
          imageConfig: { aspectRatio, imageSize: resolution }
        }
      }),
      signal: AbortSignal.timeout(300000),
    }
  );

  const data = await res.json();
  const imgPart = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData?.data);

  if (imgPart) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, Buffer.from(imgPart.inlineData.data, 'base64'));
    console.log(`✅ 完成: ${outputPath}`);
  } else {
    console.error(`❌ 失败: ${path.basename(outputPath)}`, JSON.stringify(data).substring(0, 200));
  }
}

// 所有待生成任务（顺序执行）
const tasks = [
  // Solutions
  ['cadebot', '将参考图中的机器人放入一个现代高档餐厅场景，在多张餐桌之间穿行送餐，暖色调灯光，商业摄影风格', 'public/images/solutions/smart-catering.jpg'],
  ['m79',     '将参考图中的清洁机器人放入一个明亮宽敞的商场走廊，正在执行清洁任务，现代商业空间，冷色调灯光', 'public/images/solutions/smart-cleaning.jpg'],
  ['cruzr',   '将参考图中的机器人放入一个科技展览馆，引导参观者，周围有展示屏和展品，未来感强', 'public/images/solutions/smart-exhibition.jpg'],
  ['cadebot', '将参考图中的机器人放入一个现代物流仓库，在货架之间穿行运输货物，工业照明', 'public/images/solutions/smart-logistics.jpg'],
  ['cruzr',   '将参考图中的机器人放入一个现代医院走廊，为病人和医护人员提供服务，干净明亮', 'public/images/solutions/smart-healthcare.jpg'],
  ['cruzr',   '将参考图中的机器人放入一个现代超市或零售店，协助顾客导购，明亮零售环境', 'public/images/solutions/smart-retail.jpg'],
  ['cruzr',   '将参考图中的机器人放入一个国际机场大厅，为旅客提供引导服务，宽敞明亮的航站楼', 'public/images/solutions/case-paris-airport.jpg'],
  ['cadebot', '将参考图中的机器人放入一个现代汽车制造工厂，在生产线旁穿行，工业蓝色调', 'public/images/solutions/case-byd-factory.jpg'],
  ['cadebot', '将参考图中的机器人放入一个中式火锅餐厅，穿行于餐桌之间送餐，红色暖色调装饰', 'public/images/solutions/case-haidilao.jpg'],
  // Technology
  ['cadebot', '将参考图中的机器人放入一个科技感十足的蓝色背景，展示机器人的技术细节，科幻感，专业产品宣传图', 'public/images/technology/hero-visual.jpg'],
  // CADEBOT L100
  ['cadebot', '将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格，干净简洁', 'public/images/products/cadebot-l100/hero-robot.png', '1:1'],
  ['cadebot', '将参考图中的机器人放入一个忙碌的餐厅中，运送着各个餐桌的菜品', 'public/images/products/cadebot-l100/scenario-restaurant.jpg'],
  ['cadebot', '将参考图中的机器人放入一个高档酒店大厅，为客人提供引导和服务', 'public/images/products/cadebot-l100/scenario-hotel.jpg'],
  ['cadebot', '将参考图中的机器人放入一个现代医院病房走廊，为医护人员运送物品', 'public/images/products/cadebot-l100/scenario-hospital.jpg'],
  ['cadebot', '将参考图中的机器人放入海底捞风格的火锅餐厅，穿行送餐，红色热闹氛围', 'public/images/products/cadebot-l100/case-haidilao.jpg'],
  // CLEINBOT M79
  ['m79',     '将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格', 'public/images/products/cleinbot-m79/hero-robot.png', '1:1'],
  ['m79',     '将参考图中的清洁机器人放入一个大型商场中庭，正在进行地面清洁，人流穿梭', 'public/images/products/cleinbot-m79/scenario-mall.jpg'],
  ['m79',     '将参考图中的清洁机器人放入一个国际机场航站楼，清洁宽敞的走廊', 'public/images/products/cleinbot-m79/scenario-airport.jpg'],
  ['m79',     '将参考图中的清洁机器人放入一个现代医院走廊，消毒清洁，干净明亮环境', 'public/images/products/cleinbot-m79/scenario-hospital.jpg'],
  ['m79',     '将参考图中的清洁机器人放入一个大型企业办公楼大厅，自主清洁，现代建筑风格', 'public/images/products/cleinbot-m79/case-highlight.jpg'],
  // CLEINBOT CC201
  ['cc201',   '将参考图中的机器人放在纯白背景上，正面展示，专业产品棚拍风格', 'public/images/products/cleinbot-cc201/hero-robot.png', '1:1'],
  ['cc201',   '将参考图中的机器人放入一个现代餐厅，高效送餐，暖色调商业空间', 'public/images/products/cleinbot-cc201/scenario-restaurant.jpg'],
  ['cc201',   '将参考图中的机器人放入一个星级酒店走廊，客房送物服务', 'public/images/products/cleinbot-cc201/scenario-hotel.jpg'],
  ['cc201',   '将参考图中的机器人放入一个现代写字楼大厅，前台引导服务', 'public/images/products/cleinbot-cc201/scenario-office.jpg'],
  ['cc201',   '将参考图中的机器人放入一个大型连锁餐厅，高峰期送餐场景，热闹氛围', 'public/images/products/cleinbot-cc201/case-highlight.jpg'],
  // CRUZR
  ['cruzr',   '将参考图中的人形服务机器人放在纯白背景上，正面展示，专业产品棚拍风格', 'public/images/products/cruzr/hero-robot.png', '1:1'],
  ['cruzr',   '将参考图中的人形机器人放入一个现代零售店，与顾客互动导购，明亮商业环境', 'public/images/products/cruzr/scenario-retail.jpg'],
  ['cruzr',   '将参考图中的人形机器人放入一个科技展览馆，作为展台讲解员，吸引参观者', 'public/images/products/cruzr/scenario-exhibition.jpg'],
  ['cruzr',   '将参考图中的人形机器人放入一个高档酒店大堂，迎宾接待，优雅专业氛围', 'public/images/products/cruzr/scenario-hotel.jpg'],
  ['cruzr',   '将参考图中的人形机器人放入一个现代银行营业厅，引导客户办理业务', 'public/images/products/cruzr/scenario-bank.jpg'],
  ['cruzr',   '将参考图中的人形机器人放入一个大型企业接待大厅，接待访客，现代商务环境', 'public/images/products/cruzr/case-highlight.jpg'],
];

// 顺序执行所有任务
for (const [refKey, prompt, outputPath, ratio] of tasks) {
  await generate(refKey, prompt, outputPath, ratio || '16:9', '2K');
}

console.log('\n🎉 全部完成！');
```

---

## 下次继续步骤

1. 打开项目：`c:\Users\15265\Downloads\Cursor_project\001_test`
2. 告诉 AI："继续生成图片，参考 IMAGE-GENERATION-GUIDE.md，使用 Gemini Pro 原生格式批量生成所有待生成图片"
3. AI 会直接运行 `generate-all-images.mjs` 开始批量生产

---

*最后更新：2026-03-11 | 有效方案：Gemini 3 Pro 原生 REST API*
