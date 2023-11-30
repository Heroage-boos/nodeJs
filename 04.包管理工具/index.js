const http = require('http')

const server = http.createServer((req, res) => {
    res.end("hello NodeJs!");
})

server.listen(9090, () => {
    console.log("服务器启动成功!")
})