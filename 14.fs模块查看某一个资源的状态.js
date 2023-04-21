//1.导入 fs 模块
const fs=require("fs");

//2. stat 方法  status 状态  缩写
fs.stat("./nodeJs学习文档.md",(err,data)=>{
    //文件/文件夹信息(文件名称、创建日期，类型，大小)
    console.log("stat suceess:",data)
    //是不是一个文件
    console.log(data.isFile())
    //是不是一个文件夹
    console.log(data.isDirectory())

})