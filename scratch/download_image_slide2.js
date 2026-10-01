const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5tJK3Lh-jexi5W1fei6T9-ZgL-aGF_sjmuy8WzUawzWdiAhguChspLY&s=10';
const dest = path.join('d:', 'beautyparlour', 'public', 'images', 'hero-slide-2-custom.jpg');

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Slide 2 custom image download completed successfully.');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading:', err.message);
});
