
const fs  = require("fs")

// 追加（在原来的基础上追加）
fs.appendFile("./avatar/a.txt","\nhello world",err=>{
    console.log(err)
})