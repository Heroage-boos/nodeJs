//1，导入fs
const fs=require("fs");

/**
 * 2.流式读取对象
 * 
 */
const rs=fs.createReadStream("./座右铭.txt");

//3.绑定 data 事件  chunk 块
rs.on('data',chunk=>{
    console.log("chunk:",chunk)
    console.log("chunk.length:",chunk.length)//122 字节
    console.log("chunk.tostring:",chunk.toString())
})

//4.end 可选事件
rs.on('end',()=>{
    console.log("读取完成");
})