const jsonServer = require('json-server');
const db = require('./v1.js');
const {cus_routes} = require('./routes.js');
const func =  require('./v2.js');
const port = 3003;

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const rewriter = jsonServer.rewriter(cus_routes)

server.use(middlewares)

server.use(jsonServer.bodyParser)
//对post访问进行重写（不建议使用Josn-server）都是坑
server.use((req, res, next) => {
    if(req.method==="POST"){
        //执行自定义函数 url:function
        if(typeof func[req.path] === "function"){
            func[req.path](req,res);
        }
    }
    next()
})

//server.use(rewriter)  // 注意：rewriter 的设置一定要在 router 设置之前
server.use(router)

server.listen(port, () => {
    console.log(`open mock server at http://localhost:${port}`);
})
