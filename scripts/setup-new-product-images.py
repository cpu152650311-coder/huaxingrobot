"""Copy & compress new product images into public/images/."""
from __future__ import annotations
import os, shutil, pathlib
from PIL import Image

DOCS_CLEAN = pathlib.Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main\docs\import-new-bot\01-cleaning-robot\images")
DOCS_HOTEL = pathlib.Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main\docs\import-new-bot\02-hotel-delivery-robot\images")
SRC_RAW    = pathlib.Path(r"e:\1\new_bot")
PUBLIC     = pathlib.Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main\public")

MAX_PX = 1280
QUALITY = 82

def compress(src: pathlib.Path, dst: pathlib.Path, max_px=MAX_PX, q=QUALITY) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    ext = src.suffix.lower()
    im = Image.open(src)
    if ext == ".png":
        im = im.convert("RGBA")
    else:
        im = im.convert("RGB")
    w, h = im.size
    if max(w, h) > max_px:
        s = max_px / max(w, h)
        im = im.resize((int(w*s), int(h*s)), Image.Resampling.LANCZOS)
    save_ext = dst.suffix.lower()
    if save_ext == ".png":
        im.save(dst, "PNG", optimize=True, compress_level=9)
    elif save_ext == ".webp":
        im.convert("RGB").save(dst, "WEBP", quality=q, method=6)
    else:
        im.convert("RGB").save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"  {src.name} -> {dst.relative_to(PUBLIC)}  ({dst.stat().st_size//1024}KB)")

# --- Find source folders (handle Unicode) ---
subfolders = {p.name: p for p in SRC_RAW.iterdir() if p.is_dir()}
clean_src = next((v for k,v in subfolders.items() if "\u6e05\u626b" in k), None)  # 清扫
hotel_src = next((v for k,v in subfolders.items() if "\u9152\u5e97" in k), None)  # 酒店

print("=== CLEINBOT C2 Pro images ===")
c2pro_out = PUBLIC / "images/products/cleinbot-c2pro"
home_out   = PUBLIC / "images/home"

# Hero image from source (c2pro.png is best quality raw)
compress(clean_src / "c2pro.png",   c2pro_out / "hero-robot.png", max_px=1200)
compress(clean_src / "c2pro.png",   home_out  / "cleinbot-c2pro.png", max_px=800)

# Use extracted PDF images for scene/tech visuals (p3 has great product views)
# c2pro11-15 are scene photos from original folder
for i, raw_name in enumerate(["c2pro11.png","c2pro12.png","c2pro13.png","c2pro14.png","c2pro15.png"], start=1):
    src = clean_src / raw_name
    if src.exists():
        compress(src, c2pro_out / f"scene-{i:02d}.png", max_px=900)

# Use the catalog extracted images for tech drawing
tech_src = DOCS_CLEAN / "Cleaning-Robot-Catalog-p11-img1.png"  # spec page image
if tech_src.exists():
    compress(tech_src, c2pro_out / "tech-drawing.png", max_px=1000)

print("\n=== AOMAN DOUBLE images ===")
double_out = PUBLIC / "images/products/aoman-double"

# Identify best images from hotel folder by actual Python filesystem listing
hotel_img_dir = DOCS_HOTEL

# Find all image files and sort by size to pick the largest (=most likely product shots)
imgs = sorted(
    [f for f in hotel_img_dir.iterdir() if f.suffix.lower() in (".png",".jpg",".jpeg") and f.stat().st_size > 100_000],
    key=lambda p: p.stat().st_size, reverse=True
)

print(f"  Found {len(imgs)} large images in hotel folder")

# Pick top images for hero and scenes
if len(imgs) >= 1:
    compress(imgs[0], double_out / "hero-robot.png",  max_px=1200)
    compress(imgs[0], home_out   / "aoman-double.png", max_px=800)

for i, img in enumerate(imgs[1:5], start=1):
    compress(img, double_out / f"scene-{i:02d}.png", max_px=900)

# Tech drawing - pick a mid-size product schematic
mid_imgs = sorted(
    [f for f in hotel_img_dir.iterdir() if f.suffix.lower() in (".png",".jpg",".jpeg") and 150_000 < f.stat().st_size < 600_000],
    key=lambda p: p.stat().st_size, reverse=True
)
if mid_imgs:
    compress(mid_imgs[0], double_out / "tech-drawing.png", max_px=1000)

print("\nDone.")
