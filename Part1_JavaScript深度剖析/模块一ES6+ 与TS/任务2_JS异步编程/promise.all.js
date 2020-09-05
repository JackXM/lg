const axios = require('axios')

const urlArr = [
  'https://www.baidu.com',
  'https://api.github.com/users',
  'https://api.qqq.com/u',
]

// 遍历数组 
// Promise.all()失败问题 
// 1. 对数组中的每一个promise都捕获处理错误 这样all 不会被中断
// const promises = urlArr.map(item => axios(item).catch(e => ({})))

// const p = Promise.all(promises)

// p.then(res => {
//   console.log(res);
// })
// .catch(err => {
//   console.log('error');
// })

/**
 * ES2020 即将要发布的方法
 * 2. 也可以使用 Promise.allSettled() 实现
 */
const promise = Promise.allSettled(urlArr.map(item => axios(item)))

promise.then(res => console.log(res))