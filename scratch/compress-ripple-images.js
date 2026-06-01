const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../public/images/ripple-curtain');

const files = [
  'Sheer-ripple-curtain.png',
  'blackout-ripple-curtain.png',
  'motorised-ripple-curtain.png',
  'natural-ripple-curtain.png',
  'velvet-ripple-curtain.png'
];

async function optimize() {
  console.log('Starting image optimization...');
  for (const file of files) {
    const inputFilePath = path.join(dirPath, file);
    const outputFileName = file.replace('.png', '.webp');
    const outputFilePath = path.join(dirPath, outputFileName);
    
    if (fs.existsSync(inputFilePath)) {
      console.log(`Optimizing ${file}...`);
      const originalSize = fs.statSync(inputFilePath).size;
      
      try {
        await sharp(inputFilePath)
          .resize(1600, null, { withoutEnlargement: true }) // resize to max width 1600px
          .webp({ quality: 80, effort: 6 }) // Convert to webp with high efficiency
          .toFile(outputFilePath);
          
        const newSize = fs.statSync(outputFilePath).size;
        const savingsPercent = ((originalSize - newSize) / originalSize * 100).toFixed(2);
        
        console.log(`Successfully optimized ${file} -> ${outputFileName}`);
        console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Optimized size: ${(newSize / 1024).toFixed(2)} KB`);
        console.log(`Saved: ${savingsPercent}% of size!\n`);
        
        // Delete original large file to clean up space
        fs.unlinkSync(inputFilePath);
        console.log(`Deleted original raw PNG: ${file}`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    } else {
      console.warn(`File not found: ${inputFilePath}`);
    }
  }
  console.log('Image optimization process complete!');
}

optimize();
