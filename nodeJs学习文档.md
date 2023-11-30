### nodeJs 介绍

nodeJs 是一个开源的，跨平台的 javaScript 运行环境；

- 开发服务器应用
- 开发工具类应用（webpack，vite, babel )
- 开发桌面端应用(VScode, Figma,Postman 都是借助 electron,electron 是借助 nodeJs 开发的)

### nodejs 安装

nodejs 官方下载地址：https://nodejs.org/en

![image-20230420103301360](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420103301360.png)

选择长期维护版本，如果需要选择其他版本可以选择 Other Downloads,下一步根据自身系统进行下载

![image-20230420110210172](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420110210172.png)

检查 nodeJs 是否安装成功：win+r 键---输入 node -v，显示版本号，表示安装成功

![image-20230420110627006](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420110627006.png)

### 命令行工具

练习使用命令行工具打开桌面应用程序，后续会使用命令行工具打开/操作 NodeJs

如何调用打开命令行工具：win+r 输入 cmd （也可使用搜索 命令提示符 打开）

例:使用命令打开百度网页

![image-20230420111449983](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420111449983.png)

### 命令行常用工具

![image-20230420112011963](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420112011963.png)

使用实例：

![image-20230420112151127](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420112151127.png)

其他命令行工具：

cd .. 返回上一级目录

node helloWrold.js 运行 nodeJs 文件

使用 vsCode 打开命令行工具：

![image-20230420113018883](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113018883.png)

新建终端：

![image-20230420113403446](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113403446.png)

即可打开命令提示符：

![image-20230420113314174](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113314174.png)

输入命令即可执行代码：

![image-20230420113537353](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230420113537353.png)

### NodeJs 支持 api

1.Node.js 中不能使用 BOM 和 DOM 的 API,可以使用 console 和定时器 API

2.Node.js 中顶级对象为 global，也可以用 globalThis 访问顶级对象

### Buffer

buffer 意为 缓冲区，类似数组的对象，用于固定长度的字节序列

buffer 本质是一段内存空间，用于处理二进制函数

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

### fs 模块\_写入文件

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

fs 模块\_fs 文件异步和同步写入

```
const fs=require("fs")
//异步写入 性能高
// fs.writeFile('./data2.txt',"异步写入")

//同步写入
fs.writeFileSync('./data.txt',"同步写入")
```

文件写入应用场景

- 文件下载
- 安装软件
- 保存程序日志
- 编辑器保存文件
- 视频录制

js
const fs = require('fs');
\```

fs 模块提供了两种类型的 API：同步和异步。同步 API 会阻塞当前线程，直到操作完成，然后返回结果。异步 API 则不会阻塞当前线程，而是通过回调函数或 Promise 对象来返回结果。一般来说，异步 API 的性能更好，更适合网络编程，但是同步 API 在某些场景下也有其优势，比如简单的脚本或初始化操作。

同步 API 和异步 API 的名称通常有一定的规律，比如同步 API 以 Sync 结尾，而异步 API 则没有。例如，读取文件的同步 API 是`fs.readFileSync`，而异步 API 是`fs.readFile`。

\## 读写文件

读写文件是 fs 模块最常用的功能之一。我们可以使用`fs.readFileSync`和`fs.writeFileSync`来同步地读写文件，也可以使用`fs.readFile`和`fs.writeFile`来异步地读写文件。

下面是一个同步读写文件的示例：

\```js
// 同步读取文件
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);

// 同步写入文件
fs.writeFileSync('test.txt', 'Hello NodeJs', 'utf8');
console.log('File written');
\```

下面是一个异步读写文件的示例：

\```js
// 异步读取文件
fs.readFile('test.txt', 'utf8', (err, data) => {
if (err) {
console.error(err);
} else {
console.log(data);
}
});

// 异步写入文件
fs.writeFile('test.txt', 'Hello NodeJs', 'utf8', (err) => {
if (err) {
console.error(err);
} else {
console.log('File written');
}
});
\```

注意，在异步读写文件时，我们需要传入一个回调函数，用于处理错误或结果。如果没有错误发生，err 参数会是 null 或 undefined，否则会是一个 Error 对象。我们可以通过判断 err 参数来处理不同的情况。

另外，在读写文件时，我们还需要指定文件的编码格式，通常是'utf8'。如果不指定编码格式，读取文件时会返回一个 Buffer 对象，而不是字符串；写入文件时则会把字符串转换为 Buffer 对象再写入。

\## 创建删除目录

除了读写文件，fs 模块还可以用于创建删除目录。我们可以使用`fs.mkdirSync`和`fs.rmdirSync`来同步地创建删除目录，也可以使用`fs.mkdir`和`fs.rmdir`来异步地创建删除目录。

下面是一个同步创建删除目录的示例：

\```js
// 同步创建目录
fs.mkdirSync('test');
console.log('Directory created');

// 同步删除目录
fs.rmdirSync('test');
console.log('Directory removed');
\```

下面是一个异步创建删除目录的示例：

\```js
// 异步创建目录
fs.mkdir('test', (err) => {
if (err) {
console.error(err);
} else {
console.log('Directory created');
}
});

// 异步删除目录
fs.rmdir('test', (err) => {
if (err) {
console.error(err);
} else {
console.log('Directory removed');
}
});
\```

注意，在创建目录时，如果目录已经存在，会抛出错误；在删除目录时，如果目录不存在或不为空，也会抛出错误。我们可以通过捕获错误来处理这些情况。

\## 监视文件变化

有时候，我们需要监视文件的变化，比如当文件被修改或删除时执行一些操作。这时候，我们可以使用`fs.watchFile`和`fs.unwatchFile`来监视或取消监视文件变化。

下面是一个监视文件变化的示例：

\```js
// 监视文件变化
const filename = 'test.txt';
fs.watchFile(filename, (curr, prev) => {
console.log(`${filename} changed`);
console.log(`Current size: ${curr.size}`);
console.log(`Previous size: ${prev.size}`);
});

// 取消监视文件变化
setTimeout(() => {
fs.unwatchFile(filename);
console.log(`Stopped watching ${filename}`);
}, 10000);
\```

在这个示例中，我们监视了 test.txt 文件的变化，并打印了当前和之前的文件大小。然后，在 10 秒后取消了监视，并打印了一条消息。

注意，在监视文件变化时，我们需要传入一个回调函数，用于处理变化事件。回调函数会接收两个参数：curr 和 prev，分别表示当前和之前的状态对象。状态对象包含了一些属性，比如 size（大小）、mtime（修改时间）、ctime（创建时间）等。

另外，在取消监视文件变化时，我们需要传入相同的回调函数和文件名。如果传入不同的回调函数或文件名，则无法取消监视。

\## 其他常用 API

除了上面介绍的功能外，fs 模块还提供了一些其他常用的 API，比如：

\- `fs.existsSync(path)`：检查路径是否存在（同步）
\- `fs.exists(path, callback)`：检查路径是否存在（异步）
\- `fs.statSync(path)`：获取路径的状态信息（同步）
\- `fs.stat(path, callback)`：获取路径的状态信息（异步）
\- `fs.readdirSync(path)`：获取目录下的所有文件名（同步）
\- `fs.readdir(path, callback)`：获取目录下的所有文件名（异步）
\- `fs.appendFileSync(file, data)`：追加数据到文件末尾（同步）
\- `fs.appendFile(file, data, callback)`：追加数据到文件末尾（异步）
\- `fs.unlinkSync(path)`：删除路径（同步）
\- `fs.unlink(path, callback)`：删除路径（异步）

更多详细的 API 文档，请参考[NodeJs 官网](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html)。

\## 注意事项和技巧

在使用 fs 模块时，有一些注意事项和技巧可以帮助我们更好地利用它：

\- 在使用异步 API 时，请确保正确处理错误或结果。不要忽略回调函数中的 err 参数。
\- 在使用同步 API 时，请确保捕获可能抛出的异常。不要让异常导致程序崩溃。
\- 在使用同步 API 时，请注意性能影响。不要在高并发或高延迟的场景下使用同步 API。
\- 在使用 watchFile 或 unwatchFile 时，请确保传入相同的回调函数和文件名。不要造成内存泄漏或无法取消监视。
\- 在使用 readFile 或 writeFile 时，请指定正确的编码格式。不要造成乱码或数据丢失。

### 文件读取应用场景

- 电脑开机

- 程序运行

- 编辑器打开文件

- 可选文件

- 打开图片/视频

- git 查看日志

- 上传文件

- 查看聊天记录

### path 模块

![image-20230421154459036](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230421154459036.png)

```javascript
const path = require("path");

//获取路径分隔符
console.log(path.sep);

// 拼接绝对路径 resolve解决
console.log("__dirname:", __dirname); //__dirname: D:\my-document\nodejs_study
console.log(path.resolve(__dirname, "18.path模块.js"));

//全局路径
let str = "D:/my-document/nodeJs_study/18.path模块.js";
console.log(path.parse(str));

//获取路径的基本名称
console.log(path.basename(str));

//获取路径的目录名
console.log(path.dirname(str));

//获得路径的扩展名
console.log(path.extname(str));
```

### http 模块

创建一个 http 服务

```javascript
//1.导入http模块
const http=require("http")

//2.创建server服务
const server=http.createServer((req,res)=>{
    //当我们的服务接收到http请求时候函数会执行
    res.end('hello HTTP Server!')//设置响应体
})

//3.监听端口，启动服务
server.listen(9000,'127.0.0.1',()=>{
    console.log("服务已经启动!")
})
```
端口下运行：node _http.js

在浏览器窗口下通过本机ip地址+端口号，可以看到连接成功

![image-20230707150822657](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230707150822657.png)