
const fs = require("fs")
//error-first 

// 读文件
// fs.readFile("./avatar/a.txt",(err,data)=>{
//     if(!err){
//         console.log(data.toString("utf-8"))
//     }
// })


// 读文件
fs.readFile("./avatar/a.txt","utf-8",(err,data)=>{
    if(!err){
        console.log(data)
    }
})