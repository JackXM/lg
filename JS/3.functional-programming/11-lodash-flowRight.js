/**
 * lodash 中的函数组合
 * flow() // 从左到由执行
 * flowRight() // 从右到左执行，使用较多
 */
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// const f = _.flowRight([_.toUpper, _.first, _.reverse]) // _.flowRight 可以接收的数组，效果一样
const f = _.flowRight(_.toUpper, _.first, _.reverse)

console.log(f(['one', 'tow', 'three']))


/**
 * 模拟实现flowRight
 * @param  {...any} 函数的数组 
 */
function compose (...args) {
  // reduce 对数组中的每个元素执行一个我们提供的函数，将其结果汇总为单个返回值。
  return function (value) {
    return args.reverse().reduce((acc, currentFn) => {
      return currentFn(acc)
    }, value)
  }
}

// 箭头函数的简写
// const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value) 

const fn = compose(toUpper, first, reverse)
console.log(fn(['one', 'tow', 'three']))


