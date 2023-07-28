
const fs = require("fs")

// 删除
fs.unlink("./avatar/a.txt",err=>{
    console.log(err)
})


/**
 * 如果文件夹下面由内容，用rmdir删除不掉
 * 
 */