const util = require('util')
const fs = require('fs')

let readDirPromise = util.promisify(fs.readdir);
async function read() {
  let files = await readDirPromise('./lesson3');

  console.log(files);
}
read()

module.exports.readDirPromise = util.promisify(fs.readdir);
