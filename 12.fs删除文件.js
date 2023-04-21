//1.导入fs模块
const fs=require('fs')

//2.调用unlike 方法
// fs.unlink('./座右铭3.txt',err=>{
//     if(err){
//         console.log("delete failed")
//         return
//     }
//     console.log("delete success")
// })

//2.调用rm 方法  rmSync  
fs.rm("./座右铭3.txt",err=>{
    if(err){
        console.log("删除失败")
        return 
    }
    console.log("delete success")
})