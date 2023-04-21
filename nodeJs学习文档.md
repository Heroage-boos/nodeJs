### nodeJs介绍

nodeJs是一个开源的，跨平台的javaScript运行环境；

- 开发服务器应用
- 开发工具类应用（webpack，vite, babel )
- 开发桌面端应用(VScode, Figma,Postman都是借助electron,electron是借助nodeJs开发的)



### nodejs安装

nodejs官方下载地址：https://nodejs.org/en

![image-20230420103301360](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420103301360.png)

选择长期维护版本，如果需要选择其他版本可以选择Other Downloads,下一步根据自身系统进行下载

![image-20230420110210172](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420110210172.png)

检查nodeJs是否安装成功：win+r 键---输入 node -v，显示版本号，表示安装成功

![image-20230420110627006](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420110627006.png)



### 命令行工具

练习使用命令行工具打开桌面应用程序，后续会使用命令行工具打开/操作NodeJs

如何调用打开命令行工具：win+r 输入 cmd  （也可使用搜索 命令提示符 打开）

例:使用命令打开百度网页

![image-20230420111449983](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420111449983.png)



### 命令行常用工具

![image-20230420112011963](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420112011963.png)

使用实例：

![image-20230420112151127](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420112151127.png)

其他命令行工具：

cd .. 返回上一级目录

node helloWrold.js  运行nodeJs文件

使用vsCode打开命令行工具：

![image-20230420113018883](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113018883.png)

新建终端：

![image-20230420113403446](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113403446.png)

即可打开命令提示符：

![image-20230420113314174](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113314174.png)

输入命令即可执行代码：

![image-20230420113537353](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113537353.png)



### NodeJs支持api

1.Node.js中不能使用BOM和DOM的API,可以使用console和定时器API

2.Node.js中顶级对象为global，也可以用globalThis访问顶级对象



### Buffer

buffer意为 缓冲区，类似数组的对象，用于固定长度的字节序列

buffer本质是一段内存空间，用于处理二进制函数

```
``buffer
//1.alloc 分配
let buf=Buffer.alloc(10);
console.log('buf',buf);// <Buffer 00 00 00 00 00 00 00 00 00 00>

//2.allocUnsafe
let buf_2=Buffer.allocUnsafe(100000);
console.log('buf_2',buf_2);//buf_2 <Buffer 50 01 e5 b5 ff 01 00 00 30 1a b2 b7 ff 01 00 00 78 40 00 00 00 00 00 00 04 00 05 00 08 00 10 05 00 10 05 00 0f 0b 00 10 04 00 0b 00 05 00 05 00 04 00 ... 99950 more bytes>

//3.from
let buf_3=Buffer.from('hello');
console.log('buf_3',buf_3);//<Buffer 68 65 6c 6c 6f>

let buf_4=Buffer.from([105,108,109,111,234,117]);
console.log('buf_4',buf_4);//<Buffer 69 6c 6d 6f ea 75>
``
```



### fs模块_写入文件

```
···fs.js
/**
 * 需求：
 * 新建一个文件，座右铭.tst,写入内容，三人行，则必有我师焉
 */
 const fs=require("fs");
 fs.writeFile("./座右铭.txt"，'三人行必有我师焉'，err=>{
    if(err){
     console.log("失败")!
     return 
    }
    console.log("写入成功")!
 })

···
```

文件写入应用场景

- 文件下载
- 安装软件
- 保存程序日志
- 编辑器保存文件
- 视频录制



### 文件读取应用场景

- 电脑开机

- 程序运行

- 编辑器打开文件

- 可选文件

- 打开图片/视频

- git查看日志

- 上传文件

- 查看聊天记录

  

### path模块

![image-20230421154459036](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230421154459036.png)
