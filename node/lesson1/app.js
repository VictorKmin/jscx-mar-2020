// let { someVar } = require('./dir/file2');
// const os = require('os');
// //
// // console.log(someVar);
//
// // require('./file2')
//
// let age = 15
//
// global.age = 24
//
//
// console.log(global.age)
// console.log(global.name)
//
//
// console.log(process.cwd());
//
// process.env.myName = 'Viktor222'
//
// console.log(process.env.myName);
//
// // console.log(os.type());
// // console.log(os.userInfo());
// // console.log(os.uptime());
// // console.log(os.arch());
// // console.log(os.platform());
//
//
// /// conetcion
// let connett = {base: 'sql'}
//
// global.db = connett
//
// console.log(__dirname);
// console.log(__filename);
//
//
//
// const {EventEmitter} = require('events');
// const ee = new EventEmitter();
//
// ee.on('xxx', (age, name)=> {
//   console.log('xxx emitted', age, name);
// });
//
// ee.on('xxx', () => {
//   console.log('xxx emited again');
// });
//
// ee.emit('xxx', 22, 'dima')
// ee.emit('xxx', 22, 'dima')
// ee.emit('xxx', 22, 'dima')
//
//
// ee.once('action', (obkect)=> {
//   console.log('ACTION', obkect);
// })
//
//
// ee.emit('action', {one: 'argument'});
// ee.emit('action');
// ee.emit('action');
// ee.emit('action');
// ee.emit('action');
// ee.emit('action');
// ee.emit('action');
//
//
//
// process.on('unhandledRejection', () => {
//   console.log('OOPs');
//   process.exit(0)
// })
//
//


let fs = require('fs');
let path = require('path');

const filePath = path.join(process.cwd(), 'dir', 'text.txt')
console.log(filePath);

// fs.writeFile(filePath, 'Hello World', (err) => {
//   if (err) {
//     console.log(err);
//   }
// })


// fs.readFile(filePath, (err, data)=> {
//   console.log(data.toString());
// })


// fs.appendFile(filePath, 'TEST /n word', (err)=> {
//   if (err) {
//     console.log(err);
//   }
// });



// fs.mkdir(path.join(__dirname, 'zoom', 'test'), { recursive: true },(err) => {
//   if (err) {
//     console.log(err);
//   }
// })


// fs.rmdir(path.join(__dirname, 'zoom'),{recursive: true}, (err) => {
//   if (err) {
//     console.log(err);
//   }
// })
//
// fs.readdir(path.join(process.cwd(), 'dir'), (err, files)=> {
//   console.log(files);
// })
//
// fs.stat(path.join(process.cwd(), 'dir'), (err, stat) => {
//   console.log(stat.isDirectory());
// });


// fs.unlink(filePath, () => {})
//
// fs.rename(path.join(process.cwd(), 'dir', 'file2.js'), path.join(process.cwd(), 'code', 'second.js'), (err)=> {
//   console.log(err);
// })


let readStream = fs.createReadStream('./video.mp4');
let writeStream = fs.createWriteStream('./dir/file.mp4');

readStream.on('data', (ччч) => {
  console.log(ччч);
  writeStream.write(ччч);
})

// readStream.pipe(writeStream);

//
// readStream.on('end', ()=> {
//   console.log('FIFSH');
// })




// writeStream.write('RRRRRRRRRR ')
