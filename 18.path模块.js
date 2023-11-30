const path=require('path')

//获取路径分隔符
console.log(path.sep);

// 拼接绝对路径 resolve解决
console.log("__dirname:",__dirname)//__dirname: D:\my-document\nodejs_study
console.log(path.resolve(__dirname,"18.path模块.js"))

//全局路径
let str="D:/my-document/nodeJs_study/18.path模块.js"
console.log(path.parse(str));

//获取路径的基本名称
console.log(path.basename(str));

//获取路径的目录名
console.log(path.dirname(str));

//获得路径的扩展名
console.log(path.extname(str));
