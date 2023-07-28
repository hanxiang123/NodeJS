
const fs = require("fs")

fs.readdir("./avatar",(err,data)=>{
    // console.log(data)
    data.forEach(item=>{
        fs.unlinkSync(`./avatar/${item}`)    // 同步删除（同步会阻塞，并不推荐）
    })

    fs.rmdir("./avatar",(err)=>{
        console.log(err)
    })
})