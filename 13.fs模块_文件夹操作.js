//1.fs
const fs=require('fs')

//2-1.创建文件夹 mk  make制作+ dir   directory文件夹
fs.mkdir('./html',err=>{
    if(err){
        console.log("make failed")
        return 
    }
    console.log("make success")
})

//2-2 递归创建文件夹
fs.mkdir("./a/b/c",{recursive:true},err=>{
    if(err){
        console.log("make failed")
        return 
    }
    console.log("make success")
})


//2-3 读取文件夹
fs.readdir("./测试目录",(err,data)=>{
    if(err){
        console.log("reading failed")
        return 
    }
    console.log("reading success",data.toString())
});

//2-3 删除文件夹 rmdir  remove移除  未来可能被移除，不建议使用
// fs.rmdir('./html',err=>{
//     if(err){
//         console.log("deleteDir failed",err)
//         return 
//     }
//     console.log("deleteDir success")
// })


//2-4 递归删除
fs.rm("./html",{recursive:true},err=>{
    if(err){
        console.log("deleteDir failed",err)
        return 
    }
    console.log("deleteDir success")
})