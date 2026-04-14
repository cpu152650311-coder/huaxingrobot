"""
One-shot script:
  1. Re-process c2pro / c3mini scene images from source (white-bg, compressed)
  2. Re-extract DOUBLE robot hero images from PPTX (white-bg)
  3. Convert ALL remaining PNGs in public/images to WebP (white-bg)
  4. Update TSX references .png -> .webp
"""
from __future__ import annotations
import re, zipfile, io
from pathlib import Path
from PIL import Image

# ── constants ──────────────────────────────────────────────────────────────
ROOT     = Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main")
PUBLIC   = ROOT / "public" / "images"
SRC_RAW  = Path(r"e:\1\new_bot")
QUALITY  = 82
MAX_HERO = 1100   # px longest side for hero images
MAX_SCENE= 900
MAX_HOME = 700

# ── helper ─────────────────────────────────────────────────────────────────
def white_webp(src_im: Image.Image, dst: Path, max_px: int, q: int = QUALITY) -> None:
    """Composite image on white background, resize, save as WebP."""
    dst.parent.mkdir(parents=True, exist_ok=True)
    im = src_im.convert("RGBA")
    w, h = im.size
    if max(w, h) > max_px:
        s = max_px / max(w, h)
        im = im.resize((int(w * s), int(h * s)), Image.Resampling.LANCZOS)
    bg = Image.new("RGB", im.size, (255, 255, 255))
    bg.paste(im, mask=im.split()[3])
    bg.save(dst, "WEBP", quality=q, method=6)
    print(f"  -> {dst.relative_to(ROOT)}  ({dst.stat().st_size // 1024}KB)")

def open_white_webp(path: Path, dst: Path, max_px: int, q: int = QUALITY) -> None:
    print(f"  {path.name} ({path.stat().st_size // 1024}KB)")
    white_webp(Image.open(path), dst, max_px, q)

# ── Step 1: find source subfolders ─────────────────────────────────────────
subfolders = {p.name: p for p in SRC_RAW.iterdir() if p.is_dir()}
clean_src = next((v for k, v in subfolders.items() if "\u6e05\u626b" in k), None)   # 清扫
hotel_src = next((v for k, v in subfolders.items() if "\u9152\u5e97" in k), None)   # 酒店

# ── Step 2: re-process c2pro scene images ─────────────────────────────────
print("=== Re-processing CLEINBOT C2 Pro scene images ===")
c2pro_out = PUBLIC / "products/cleinbot-c2pro"

# Hero
open_white_webp(clean_src / "c2pro.png",   c2pro_out / "hero-robot.webp", MAX_HERO)
open_white_webp(clean_src / "c2pro.png",   PUBLIC / "home/cleinbot-c2pro.webp", MAX_HOME)

# Scenes  (c2pro11-15.png are 4-7MB raw product photos)
scene_map = {
    "c2pro11.png": "scene-01.webp",
    "c2pro12.png": "scene-02.webp",
    "c2pro13.png": "scene-03.webp",
    "c2pro14.png": "scene-04.webp",
    "c2pro15.png": "scene-05.webp",
}
for src_name, dst_name in scene_map.items():
    p = clean_src / src_name
    if p.exists():
        open_white_webp(p, c2pro_out / dst_name, MAX_SCENE)

# ── Step 3: Re-extract DOUBLE robot images from PPTX ─────────────────────
print("\n=== Re-extracting AOMAN DOUBLE images from PPTX ===")
double_out = PUBLIC / "products/aoman-double"

# Find 格格产品介绍 PPTX (the DOUBLE robot presentation)
gege_pptx = next(
    (f for f in hotel_src.iterdir()
     if f.suffix.lower() == ".pptx" and "\u683c\u683c" in f.name),  # 格格
    None
)

if gege_pptx:
    print(f"  Source: {gege_pptx.name}")
    with zipfile.ZipFile(gege_pptx) as zf:
        media = [n for n in zf.namelist()
                 if n.startswith("ppt/media/") and not n.endswith("/")]
        # Sort by size (largest first = most likely product shots)
        media_info = sorted(media, key=lambda n: zf.getinfo(n).file_size, reverse=True)
        
        saved = []
        for name in media_info:
            if not name.lower().endswith((".png", ".jpg", ".jpeg")):
                continue
            raw = zf.read(name)
            try:
                im = Image.open(io.BytesIO(raw))
                w, h = im.size
                # Skip tiny images (icons/decorations) or very wide banners
                if min(w, h) < 200 or w / h > 4 or h / w > 4:
                    continue
                saved.append((zf.getinfo(name).file_size, name, im.copy()))
            except Exception:
                continue
            if len(saved) >= 8:
                break
        
        # Hero + home
        if saved:
            print(f"  Picked {len(saved)} candidate images")
            hero_im = saved[0][2]
            print(f"  Hero: {saved[0][1]}  ({saved[0][0]//1024}KB  {hero_im.size})")
            white_webp(hero_im, double_out / "hero-robot.webp", MAX_HERO)
            white_webp(hero_im, PUBLIC / "home/aoman-double.webp", MAX_HOME)
            
            for i, (sz, name, im) in enumerate(saved[1:5], start=1):
                print(f"  Scene {i}: {name}  ({sz//1024}KB  {im.size})")
                white_webp(im, double_out / f"scene-{i:02d}.webp", MAX_SCENE)
            
            # tech drawing: pick a "portrait" image (h > w)
            portrait = next(
                ((sz, n, im) for sz, n, im in saved
                 if im.size[1] > im.size[0] and sz > 50_000),
                None
            )
            if portrait:
                print(f"  Tech: {portrait[1]}  ({portrait[0]//1024}KB)")
                white_webp(portrait[2], double_out / "tech-drawing.webp", 1000)
else:
    print("  PPTX not found, skipping.")

# ── Step 4: convert ALL remaining PNGs in public/images ──────────────────
print("\n=== Converting all remaining public/images PNGs to WebP ===")
for png in sorted(PUBLIC.rglob("*.png")):
    # Skip already-processed new products (done above)
    rel = png.relative_to(PUBLIC).as_posix()
    if "cleinbot-c2pro" in rel or "aoman-double" in rel:
        continue
    webp = png.with_suffix(".webp")
    print(f"  {rel}  ({png.stat().st_size // 1024}KB)")
    try:
        im = Image.open(png)
        white_webp(im, webp, max_px=1280, q=QUALITY)
        png.unlink()
    except Exception as e:
        print(f"    ERROR: {e}")

# ── Step 5: update TSX references ─────────────────────────────────────────
print("\n=== Updating TSX references .png -> .webp in /public/images paths ===")
tsx_root = ROOT / "src"
# Pattern: any /images/...something.png reference inside src attribute or similar
pat = re.compile(r'(/images/[^"\'>\s]+?)\.png')

for tsx in tsx_root.rglob("*.tsx"):
    text = tsx.read_text(encoding="utf-8")
    new_text = pat.sub(r"\1.webp", text)
    if new_text != text:
        tsx.write_text(new_text, encoding="utf-8")
        print(f"  Updated: {tsx.relative_to(ROOT)}")

print("\nAll done!")
