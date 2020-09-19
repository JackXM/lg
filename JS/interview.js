// 1. 
console.log('A');

setTimeout(() => console.log('B'), 1000) // 第一个进入队列

const start = new Date()
while (new Date() - start < 3000) {} // 阻塞操作

console.log('C');

setTimeout(() => console.log('D'), 0) // 第二个进入队列

new Promise((resolve, reject) => {
  console.log('E');
  foo.bar(100) // 报错 ， 进入catch
})
.then(() => console.log('F'))
.then(() => console.log('G'))
.catch(_ => console.log('H'))

console.log('I');

// A
// C
// E
// I
// H
// B
// D