"""Fix: select correct DOUBLE robot images and compress further."""
from __future__ import annotations
import pathlib
from PIL import Image

DOCS_HOTEL = pathlib.Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main\docs\import-new-bot\02-hotel-delivery-robot\images")
PUBLIC = pathlib.Path(r"E:\1\Cursor_project\huaxingrobot-main\huaxingrobot-main\public")

def compress(src: pathlib.Path, dst: pathlib.Path, max_px=1280, q=80) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    ext = src.suffix.lower()
    im = Image.open(src)
    if dst.suffix.lower() == ".png":
        im = im.convert("RGBA" if im.mode in ("RGBA","LA","P") else "RGB")
    else:
        im = im.convert("RGB")
    w, h = im.size
    if max(w, h) > max_px:
        s = max_px / max(w, h)
        im = im.resize((int(w*s), int(h*s)), Image.Resampling.LANCZOS)
    save_ext = dst.suffix.lower()
    if save_ext == ".png":
        im.convert("RGB").save(dst, "PNG", optimize=True, compress_level=9)
    elif save_ext == ".webp":
        im.convert("RGB").save(dst, "WEBP", quality=q, method=6)
    else:
        im.convert("RGB").save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    print(f"  {src.name[:50]} -> {dst.name}  ({dst.stat().st_size//1024}KB)")

# Find images from 格格产品介绍 (the DOUBLE product presentation)
# These have shorter filenames starting with EN-格格...
gege_imgs = sorted(
    [f for f in DOCS_HOTEL.iterdir()
     if f.suffix.lower() in (".png",".jpg",".jpeg")
     and "格格" in f.name  # 格格 = DOUBLE robot PPTX
     and f.stat().st_size > 100_000],
    key=lambda p: p.stat().st_size, reverse=True
)

print(f"格格 DOUBLE product images (>{100}KB): {len(gege_imgs)}")
for f in gege_imgs:
    print(f"  {f.stat().st_size//1024}KB  {f.name}")

double_out = PUBLIC / "images/products/aoman-double"
home_out   = PUBLIC / "images/home"

if gege_imgs:
    # Largest image = main product shot
    compress(gege_imgs[0], double_out / "hero-robot.png", max_px=1100, q=80)
    compress(gege_imgs[0], home_out   / "aoman-double.png", max_px=700, q=78)

    # Next 4 for scenes
    for i, img in enumerate(gege_imgs[1:5], start=1):
        compress(img, double_out / f"scene-{i:02d}.png", max_px=800, q=78)

    # tech-drawing: use image10 (second largest)
    if len(gege_imgs) >= 2:
        compress(gege_imgs[1], double_out / "tech-drawing.png", max_px=900, q=80)

# Also re-compress C2 Pro hero (was 512KB - reduce more)
c2pro_hero = PUBLIC / "images/products/cleinbot-c2pro/hero-robot.png"
c2pro_home = PUBLIC / "images/home/cleinbot-c2pro.png"
raw_src = pathlib.Path(r"e:\1\new_bot")
subfolders = {p.name: p for p in raw_src.iterdir() if p.is_dir()}
clean_src = next((v for k,v in subfolders.items() if "\u6e05\u626b" in k), None)

if clean_src:
    print("\n=== Re-compress C2 Pro ===")
    compress(clean_src / "c2pro.png", c2pro_hero, max_px=1100, q=80)
    compress(clean_src / "c2pro.png", c2pro_home, max_px=650, q=78)

print("\nDone.")
