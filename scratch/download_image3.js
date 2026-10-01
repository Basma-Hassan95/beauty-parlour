const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDykw7K2PxoCzMA7gEpSqJd2TyHibaahh2Y4IkQ5OaX10-_XC-gt0SCv8_&s=10';
const dest = path.join('d:', 'beautyparlour', 'public', 'images', 'hero-slide-3-new.jpg');

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Slide 3 download completed successfully.');
  });
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading:', err.message);
});
