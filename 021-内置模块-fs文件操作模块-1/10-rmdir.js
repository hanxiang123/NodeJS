
const fs = require("fs")

fs.readdir("./avatar",(err,data)=>{
    // console.log(data)
    data.forEach(item=>{
        fs.unlink(`./avatar/${item}`,(err)=>{}) // 异步执行, unlink 不回阻塞后面代码执行
    })

    fs.rmdir("./avatar",(err)=>{ // 所以在这里删除并不会完成删除
        console.log(err)
    })
})