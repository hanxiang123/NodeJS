
const fs = require("fs")

// 读目录
fs.readdir("./avatar",(err,data)=>{
    if(!err){
        console.log(data)
    }
})