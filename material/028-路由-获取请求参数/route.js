
const fs =require("fs")

function render(res,path,type=""){
    res.writeHead(200, { "Content-Type": `${type?type:"text/html"};charset=utf8` })
    res.write(fs.readFileSync(path), "utf-8")
    res.end()
}
const route = {
    "/login":(req,res)=>{
        render(res,"./static/login.html")
    },
    "/home":(req,res)=>{
        render(res,"./static/home.html")
    },
    "/404":(req,res)=>{
        res.writeHead(404, { "Content-Type": "text/html;charset=utf8" })
        res.write(fs.readFileSync("./static/404.html"), "utf-8")
        res.end()
    },
    "/favicon.ico":(req,res)=>{
        render(res,"./static/favicon.ico","image/x-icon")
    }
}

module.exports = route