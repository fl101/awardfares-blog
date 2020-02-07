const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const src = path.join(__dirname, '../assets/img/', folder);
const list = fs.readdirSync(src);

for (let file of list) {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    console.log(`<img src="/assets/img/${folder}/${file}" class="" />`)
  }
}
