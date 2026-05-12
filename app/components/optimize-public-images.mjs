import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

/**
 * This script recursively optimizes all JPEG and PNG images in the public/images directory.
 * It overwrites the original files with optimized versions if the file size is reduced.
 * 
 * Usage: node scripts/optimize-public-images.mjs
 */

const IMAGES_DIR = './public/images';
const TARGET_QUALITY = 80; // Balanced setting for size vs quality

async function processDirectory(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      await processDirectory(res);
    } else {
      const ext = path.extname(file.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        await optimizeImage(res, ext);
      }
    }
  }
}

async function optimizeImage(filePath, ext) {
  const stats = await fs.stat(filePath);
  const originalSize = stats.size;
  const buffer = await fs.readFile(filePath);
  
  let pipeline = sharp(buffer);

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: TARGET_QUALITY, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: TARGET_QUALITY, mozjpeg: true });
  }

  const optimizedBuffer = await pipeline.toBuffer();

  if (optimizedBuffer.length < originalSize) {
    await fs.writeFile(filePath, optimizedBuffer);
    const saved = ((originalSize - optimizedBuffer.length) / 1024).toFixed(2);
    console.log(`✅ Optimized: ${path.relative(process.cwd(), filePath)} - Saved ${saved} KB`);
  } else {
    console.log(`ℹ️ Skipped: ${path.relative(process.cwd(), filePath)} - Already optimized`);
  }
}

console.log('🚀 Starting image optimization in public/images...');
processDirectory(IMAGES_DIR).then(() => console.log('✨ Done!'));