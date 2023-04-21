//1.导入fs模块
const fs=require("fs")

//相对路径
fs.writeFileSync("./index.html",'loloooooo')
fs.writeFileSync("index.html",'loloooooo')
fs.writeFileSync("index.html",'loloooooo')

//绝对路径
fs.writeFileSync("D:/index.html",'love')//如果是C盘 访问可能会权限不够
fs.writeFileSync("/index.html",'love')
