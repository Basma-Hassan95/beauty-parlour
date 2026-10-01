const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj40pHxaVyaHHNdP9KFEflA6uctwxPCReeubEuF-QSDFq3WjaSMfXM458_&s=10';
const dest = path.join('d:', 'beautyparlour', 'public', 'images', 'hero-slide-2-new.jpg');

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed successfully.');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading:', err.message);
});
