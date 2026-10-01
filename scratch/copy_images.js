const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\2523b798-e8be-4170-b01d-4560adbc87f8';
const destDir = 'd:\\beautyparlour\\public\\images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const bridalSrc = path.join(srcDir, 'bridal_makeup_1790857269132.jpg');
const hairSrc = path.join(srcDir, 'hair_styling_1790857367391.jpg');
const facialSrc = path.join(srcDir, 'glowing_facial_1790857395221.jpg');

const copies = [
  { src: bridalSrc, dest: 'bridal.jpg' },
  { src: bridalSrc, dest: 'gallery-1.jpg' },
  { src: hairSrc, dest: 'hair-cut.jpg' },
  { src: hairSrc, dest: 'hair-color.jpg' },
  { src: hairSrc, dest: 'gallery-2.jpg' },
  { src: facialSrc, dest: 'facials.jpg' },
  { src: facialSrc, dest: 'gallery-3.jpg' },
  { src: bridalSrc, dest: 'gallery-4.jpg' },
  { src: hairSrc, dest: 'party-makeup.jpg' },
  { src: hairSrc, dest: 'gallery-5.jpg' },
  { src: facialSrc, dest: 'hands-feet.jpg' },
  { src: facialSrc, dest: 'gallery-6.jpg' },
];

copies.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(destDir, dest));
    console.log(`Copied ${dest}`);
  } else {
    console.error(`Source not found: ${src}`);
  }
});
