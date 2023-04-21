//导入fs
const fs=require('fs')
const path=require('path')

// resolve解决
console.log("__dirname:",__dirname)//__dirname: D:\my-document\nodejs_study
console.log(path.resolve(__dirname,"18.path模块.js"))

//全局路径
let str="D:/my-document/nodeJs_study/18.path模块.js"
console.log(path.parse(str));

//basename
console.log(path.basename(str));


//dirname
console.log(path.dirname(str));


//extname
console.log(path.extname(str));
