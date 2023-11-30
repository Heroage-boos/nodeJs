//1.导入http模块
const http = require("http")

//2.创建server服务
const server = http.createServer((req, res) => {
    let { method, url } = req
    
    //当我们的服务接收到http请求时候函数会执行
    res.setHeader("content-type", "text/html,charset=utf-8")//设置完这个后，响应体中有中午也不会报乱码

    if (url == "/register" && method == "GET") {
        res.end("这是注册页面！")
    } else if (url == "/login" && method == "GET") {
        res.end("这是登录页面！")
    } else {
        res.end("not 404!")
    }
    res.end('hello HTTP Server!')//设置响应体  如果响应体中有中文会发生乱码
})

//3.监听端口，启动服务
server.listen(9000, '127.0.0.1', () => {
    console.log("服务已经启动!")
})