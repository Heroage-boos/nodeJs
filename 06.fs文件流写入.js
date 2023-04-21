/**
 * 观书有感
 */
//1.导入fs
const fs=require("fs")

//创建写入流对象
const ws=fs.createWriteStream("./观书有感.txt")

//3.write
ws.writable("半亩方塘一鉴开\r\n")
ws.writable("天光云影共徘徊\r\n")

//4.关闭通道
ws.close();

