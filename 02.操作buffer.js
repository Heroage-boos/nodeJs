//[]
// let buf=Buffer.from("hello");
// console.log(buf[0].toString(2));//这里的toString进行二进制转换


//溢出
let buf=Buffer.from("hello");
buf[0]=361;//舍弃高位的数字   0001 0110 1001 => 0110 1001

//中文
let buf=Buffer.from("你好");
console.log(buf)
