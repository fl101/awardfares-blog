const request = require('request');
const sharp = require('sharp');
const fs = require('fs');
const yargs = require('yargs');
const path = require('path');

function download(uri, filename){
  const transformer = sharp().png();
  request.get(uri).pipe(transformer).pipe(fs.createWriteStream(filename));
};

const argv = yargs
  .usage('yarn run gcmap [options] <path> [filename]')
  .option('size', { description: 'Size (WxH)', type: 'string', default: 'auto' })
  .option('style', { description: 'Style (plain, light, bluemarble)', type: 'string', default: 'bluemarble' })
  .option('projection', { description: 'Projection (best, rect, polar, ortho, azeqi)', type: 'string', default: 'rect' })
  .alias('size', 'x')
  .alias('style', 's')
  .alias('projection', 'p')
  .help()
  .argv;

function getStyle(opt) {
  switch (opt) {
    case 'plain': return 'wls';
    case 'light': return 'wls2';
    case 'bluemarble': return 'bm';
  }
}

const map = argv._[0];
if (!map) {
  console.error('you must specify a map path');
  process.exit(-1);
}
const size = argv.size; // max 720
const filename = argv._[1] || 'gcmap.png';
const projection = argv.projection;
const style = getStyle(argv.style);

const url = `http://www.gcmap.com/map?P=${map}&MS=${style}&MP=${projection}&MR=900&MX=${size}&PM=*`;
console.log(url);
console.log(path.resolve(filename));
download(url, filename);
