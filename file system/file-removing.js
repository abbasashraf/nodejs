const fs = require('fs')

// fs.rmdir();

// fs.rmdirSync('./newDir');

// for delete the file from the any directory

fs.unlinkSync('./newDir/newfile.js')

// use this for error catching

// try {
//     fs.unlinkSync('./newDir/newfile.js')
// } catch (err) {
//     console.log(err + "this is unlinksync error")
// }