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
// 我的判断: 先按照宏任务排序,然后微任务依序插队进去
// 宏任务进入宏任务队列,微任务进入微任务队列
// E F G A  H C  B  I D 