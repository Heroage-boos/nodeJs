
const fs = require('fs')

/**
 * fs.readFile  异步读取
 * 
 */
// fs.readFile("./座右铭.txt", (err, data) => {
//     if (err) {
//         console.log("err", err)
//         return
//     }
//     console.log("文件读取成功!",data.toString())
// })


//同步读取
fs.readFileSync("./座右铭.txt", (err, data) => {
    if (err) {
        console.log("err", err)
        return
    }
    console.log("文件读取成功!", data.toString())
})


