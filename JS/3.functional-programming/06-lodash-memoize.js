const _ = require('lodash')

// 记忆函数

function getArea (r) {
  console.log(r);
  return Math.PI**r
}

/* let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4)) // 只打印了一句 4 ， 缓存了下来
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4)) */

// 模拟memoize 方法的实现
function memoize (fn) {
  let cache = {} // 参数作为key ， 结果作为value
  return function () {
    let key = JSON.stringify(arguments) // 把伪数组字符串作为参数
    cache[key] = cache[key] || fn.apply(fn, arguments)
    return cache[key]
  }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4)) // 只打印了一句 4 ， 缓存了下来
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))

