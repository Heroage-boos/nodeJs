//1.alloc 分配
let buf=Buffer.alloc(10);
console.log('buf',buf);

//2.allocUnsafe
let buf_2=Buffer.allocUnsafe(100000);
console.log('buf_2',buf_2);

//3.from
let buf_3=Buffer.from('hello');
let buf_4=Buffer.from([105,108,109,111,234,117]);

console.log('buf_3',buf_3);
console.log('buf_4',buf_4);

