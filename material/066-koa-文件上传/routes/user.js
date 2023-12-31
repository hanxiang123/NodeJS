
//增
const Router = require("koa-router")
const JWT = require("../util/JWT")
const router = new Router()

const multer = require("@koa/multer")
const upload = multer({dest:"public/uploads"})
 
router.post("/", (ctx, next) => {
    console.log(ctx.request.body) //获取前端传来参数
    ctx.body = {
        ok: 1,
        info: "add user success"
    }
})
    .get("/", (ctx, next) => {
        //获取前端传来
        console.log(ctx.query, ctx.querystring)
        ctx.body = ["aaa", "bbbb", "ccc"]
    })
    .put("/:id", (ctx, next) => {
        console.log(ctx.params)
        ctx.body = {
            ok: 1,
            info: "put user success"
        }
    })
    .del("/:id", (ctx, next) => {
        ctx.body = {
            ok: 1,
            info: "del user success"
        }
    })


router.post("/login", (ctx) => {
    // console.log()
    const { username, password } = ctx.request.body
    if (username === "kerwin" && password === "123") {
        //设置header
        const token = JWT.generate({
            _id: "111",
            username: "kerwin"
        }, "1d")
        //token返回在header
        ctx.set("Authorization", token)

        ctx.body = {
            ok: 1
        }
    } else {
        ctx.body = {
            ok: 0
        }
    }

})

//上传接口

router.post("/upload",upload.single("avatar"), (ctx) => {
    console.log(ctx.request.body,ctx.file)
    // const { username, password } = ctx.request.body

    ctx.body = {ok:1}
})

module.exports = router