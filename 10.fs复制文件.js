/**
 * 需求：
 * 复制 座右铭.txt 
 */
const fs=require('fs')
const process=require("process")

// //2.读取文件内容
// const txt=fs.readFileSync("./座右铭.txt")
// //3.写入文件
// fs.writeFileSync("./座右铭2.txt",txt,err=>{
//     err?console.log("写入失败@"):console.log("写入成功!")
// })
// console.log('所占内存大小',process.memoryUsage())//25620480 bit

//流式读取  内存空间更小
const rs=fs.createReadStream("./座右铭.txt")

//流式写入
const ws=fs.createWriteStream("./座右铭3.txt")


//绑定data事件  第一种写入方式
// rs.on('data',(err,chunk)=>{
//     ws.write(chunk)
// })

// rs.on('end',()=>{
//     console.log('所占内存大小',process.memoryUsage())//25997312 bit
// })
//第二种写入方式
rs.pipe(ws);