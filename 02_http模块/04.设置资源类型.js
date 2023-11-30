const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let { method, url } = req;

    //     媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、
    // 文件或字节流的性质和格式。
    // HTTP 服务可以设置响应头 Content-Type 来表明响应体的 MIME 类型，浏览器会根据该类型决定如何处理
    // 对于未知的资源类型，可以选择 application/octet-stream 类型，浏览器在遇到该类型的响应
    // 时，会对响应体内容进行独立存储，也就是我们常见的 下载 效果
    // mime 类型结构： [type]/[subType]
    // 例如： text/html text/css image/jpeg image/png application/json
    // if (mehtod == "GET" && url == "/index.html") {
    //     const data = fs.readFileSync(__dirname + '/index.html')
    //     res.end(data)
    // } else if (method == "GET" && url == "/css/app.css") {
    //     //需要响应文件中的内容
    //     let data = require('fs').readFileSync(__dirname + '/public/css/app.css');
    //     response.end(data);
    // } else if (method == "GET" && url == "/js/app.js") {
    //     //需要响应文件中的内容
    //     let data = require('fs').readFileSync(__dirname + '/public/js/app.js');
    //     response.end(data);
    // }
    // else {
    //     //404响应
    //     response.statusCode = 404;
    //     response.end("<h1>404 Not Found</h1>");
    // }
    //封装
    //文件夹路径
    let rootDir = __dirname + '/public';
    //拼接文件路径
    let filePath = rootDir + url;
    fs.readFileSync(filePath, (err, data) => {
        if (err) {
            //如果出现错误，响应404状态码
            response.statusCode = 404;
            response.end('<h1>404 Not Found</h1>');
        } else {
            res.end(data)
        }
    })

})

server.listen(9999, () => {
    console.log("服务器启动成功！")
})