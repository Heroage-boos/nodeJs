//1.导入express
const express = require("express")
const fs = require("fs")
//2.创建server对象
const app = express()

app.get("/", (req, res) => {
    // const filePath = __dirname + "/public/index.html"
    fs.readFileSync(__dirname+"./public/index.html", (err, data) => {
        if (err) {
            res.end("Not found 404!")
        } else {
            res.end(data)
        }
    })
})

//3.监听
app.listen(8080, () => {
    console.log("创建服务器成功!")
})