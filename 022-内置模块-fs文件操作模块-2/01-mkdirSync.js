
const fs =require("fs")

try {
    fs.mkdirSync("./avatar")

} catch (error) {
    console.log("11",error)    
}
// 阻塞后面代码执行
// 同步代码执行，要注意捕获错误