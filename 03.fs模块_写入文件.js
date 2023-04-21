/**
 * 需求：
 * 新建一个文件，座右铭.tst,写入内容，三人行，则必有我师焉
 */
//1.导入fs模块
const fs=require("fs");
//2.写入文件  异步工作模式
fs.writeFile("./座右铭.txt",'三人行必有我师焉',err=>{
    if(err){
        console.log("写入失败",err)
        return
    }
    console.log("写入成功")
})
