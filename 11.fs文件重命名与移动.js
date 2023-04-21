//1.导入fs
const fs = require('fs')
//2.fs.rename 修改文件文字  重命名
// fs.rename("./abc.md","./abcd.md",err=>{
//    if(err){
//     console.log(err)
//     return 
//    }
//    console.log("重名名成功!")
// })

//文件移动
fs.rename("./abcd.md", "./测试目录/abcd.md", err => {
    if (err) {
        console.log(err)
        return
    }
    console.log("重名名成功!")
})
