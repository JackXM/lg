const _ = require('lodash')

function getSum(a, b, c) {
  return a + b + c
}
// 把多元函数转换为一元函数
const curried = _.curry(getSum)

// console.log(curried(1, 2, 3))
// console.log(curried(1)(2, 3))

// 案例：寻找空白字符
// ''.match(/\s+/g)

const match = _.curry(function (reg, str) {
  return str.match(reg)
})

const havaSpace = match(/\s+/g)

// const filter = _.curry(function (func, array) {
//   return array.filter(func)
// })
// ES6
const filter = _.curry((func, array) => array.filter(func))
const filterSpace = filter(havaSpace)
// console.log(filterSpace(['Jon Connor,', 'John_Donne']))


/**
 * 模拟实现lodash 中的 curry 方法
 */


