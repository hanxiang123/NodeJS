
const fs = require("fs")

const ws = fs.createWriteStream("./2.txt","utf-8")  // 可写流
ws.write("1111111111111111111")
ws.write("22222222222222222222")
ws.write("33333333333")

ws.end()