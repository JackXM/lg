// 1. 执行流程
setTimeout(() => console.log('A'), 0)
setTimeout(() => console.log('B'), 1000)

Promise.resolve()
  .then(() => {
    setTimeout(() => console.log('C'), 0)
    setTimeout(() => console.log('D'), 1000)
    console.log('E');
    Promise.resolve().then(() => console.log('F'))
  })
  .then(() => console.log('G'))
setTimeout(() => console.log('H'), 0)
setTimeout(() => console.log('I'), 1000)

// promise 微任务: 本轮任务的末尾
// 我的判断: 先执行完宏任务,然后微任务依序插队进去
// E F G A  H C  B  I D 

// E
// F
// G
// A
// H
// C
// B
// I
// D