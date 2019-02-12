const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');


const IMAGE_FILES = ['.png', '.jpeg', '.jpg']
const MAX_WIDTH = 1600;


(async function () {

  // Find all image files (recursively) in the assets img folder
  const files = (await walk('../assets/img'))
    .filter(e => {
      const ext = e.substr(e.lastIndexOf('.'));
      return IMAGE_FILES.includes(ext);
    });

  // Check if any files need to be resized. If so, perform size
  for (let file of files) {
    const image = sharp(file);
    const md = await image.metadata();
    if (md.width > 1600) {
      console.log('[Resizing]', file);
      await fs.copyFile(file, file + '.orig');
      const buf = await image.resize(MAX_WIDTH).toBuffer(file);
      await fs.writeFile(file, buf);
    } else {
      console.log('[OK]', file);
    }
  }

})();



async function walk (dir, list = []) {
  const files = await fs.readdir(dir);

  for (file of files) {
    const filename = path.join(dir, file);
    const stat = await fs.stat(filename);

    if (stat.isDirectory()) {
      list = await walk(filename, list);
    } else {
      list.push(filename);
    }
  }

  return list;
}
