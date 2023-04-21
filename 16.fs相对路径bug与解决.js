const fs=require('fs')

//在哪一个文件夹下面创建运行 就会创建在哪个文件夹目录下面
fs.writeFile("./index.html","love",(err)=>{
    err ?console.log("err failed"):console.log("err success")
})

//解决  换绝对路径  —  __dirname
console.log("__dirname:",__dirname)
fs.writeFileSync(__dirname+"./index2.html",'love',(err)=>{
    err ?console.log("err failed"):console.log("err success")
})