/**
 * 座右铭.txt 文件中，追加文字：择期上者而从，则其不善则改之
 */

//1.引入fs模块
const fs = require('fs')
//2.调用appendFile 异步
fs.appendFile("./座右铭.txt", '择期上者而从，则其不善则改之', err => {
    if (err) {
        console.log("追加写入失败")
        return
    }
    console.log("追加写入成功")
})

//2.调用appendFile 同步
// fs.appendFileSync("./座右铭.txt", '择期上者而从，则其不善则改之', err => {
//     if (err) {
//         console.log("追加写入失败")
//         return
//     }
//     console.log("追加写入成功")
// })

/**
 * 了解一下 第三种追加写入方式
 * 应用场景:记录用户访问信息，写入日志
 */
fs.writeFile("./座右铭.txt", 'love,love,love', { flag:"a" }, err => {
    if (err) {
        console.log("追加写入失败")
        return
    }
    console.log("追加写入成功")
})