
const fs = require("fs")

// 读取文件的信息
fs.stat("./avatar/b.txt",(err,data)=>{
    console.log(data.isFile()) // 是否是一个文件
    console.log(data.isDirectory()) // 是否是一个目录
})