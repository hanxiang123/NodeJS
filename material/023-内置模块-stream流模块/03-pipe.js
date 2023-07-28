
const fs = require("fs")

const readStream = fs.createReadStream("./1.txt")

const writeStream = fs.createWriteStream("./2.txt")

readStream.pipe(writeStream)
// 提供管道，边读边写
// 高性能复制文件的一种方法