const fs=require("fs")

//异步写入 性能高
// fs.writeFile('./data2.txt',"异步写入")

//同步写入 
fs.writeFileSync('./data.txt',"同步写入")