
const fs  = require("fs")


// 创建文件（avatar这个文件如果没有，会创建）写入的内容会覆盖原来的内容
fs.writeFile("./avatar/a.txt","你好",err=>{
    console.log(err)
})