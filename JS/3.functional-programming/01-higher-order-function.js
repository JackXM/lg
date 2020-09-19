// 高阶函数对通用问题进行抽象

// 函数作为返回值

// once 实现,只调用一次
function once(fn) {
  let done = false
  return function () { // arguments 是用在这里的参数
    if (!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}

// 测试
// let pay = once(function (money) {
//   console.log(`支付：¥${money}`);
// })
// pay(5)
// pay(5)

// map
const map = (array, fn) => {
  let results = []
  for (let item of array) {
    results.push(fn(item))
  }
  return results
}
// 测试
// const arr = [2, 3, 4]
// let r = map(arr, v => v**2)
// console.log(r);


// every
const every = (array, fn) => {
  let result = true
  for (let value of array) {
    result = fn(value)
    if (!result) {
      break
    }
  }
  return result
}
// 测试
// const arr = [10, 23, 33]
// let r = every(arr, v => v > 10)
// console.log(r);


// some
const some = (array, fn) => {
  let result = false
  for (let value of array) {
    result = fn(value)
    if (result) {
      break
    }
  }
  return result
}
// 测试
// const arr = [10, 23, 33]
// let r = some(arr, v => v % 2 === 0)
// console.log(r);


















