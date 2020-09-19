/**
 * 模拟实现 lodash 中的 curry 方法
 *  - 柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的新函数
    - 这是一种对函数参数的「缓存」，运用了闭包
    - 让函数变得更灵活，让函数的粒度更小
    - 可以把多元函数转换为一元函数，可以组合使用函数产生强大的功能
 */
const _ = require('lodash')

function getSum(a, b, c) {
  return a + b + c
}
const curried = curry(getSum)

console.log(curried(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))

function curry (func) {
  return function curriedFn (...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) { // 方法名.length => 得到参数的个数
      return function () { // 参数为 arguments
        // console.log(args, arguments)
        return curriedFn(...args.concat(Array.from(arguments))) // 递归调用
      }
    }
    return func(...args)
  }
}





