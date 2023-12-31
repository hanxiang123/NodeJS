
const express= require("express")
const app = express()
const mysql2 = require("mysql2")

app.get("/",async(req,res)=>{
    //创建连接池，进行操作
    const config = getDBConfig()
    const promisePool = mysql2.createPool(config).promise()
    var users = await promisePool.query("select * from students order by score desc limit 2 offset 0")
    console.log(users[0])
    res.send({
        ok:1,
        data:users[0]
    })
})

app.listen(3000)

function getDBConfig(){
    return {
        host:'127.0.0.1',
        port:3306,
        user:"root",
        password:"",
        database:"kerwin_test",
        connectionLimit:1
    }
}