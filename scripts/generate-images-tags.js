const fs = require('fs');
const path = require('path');

let src = process.argv[2];
if (!src.endsWith('/')) {
  src += '/';
} 

const list = fs.readdirSync(src);
for (let file of list) {
  if (file.endsWith('.jpg') || file.endsWith('.png')) {
    console.log(`<img src="/${src}${file}" class="" />`)
  }
}