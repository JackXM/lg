// 函数组合 调试
// NEVER SAY DIE --》 never-say-die
const _ = require('lodash')

// 用于debuger的函数， 可以放在组合函数的参数位置，接收中间的值来查看
const trace = _.curry((tag, v) => {
  console.log(tag, v);
  return v
})

// _.split() 改造为可接收一个参数的
const split = _.curry((sep, str) => _.split(str, sep))
const join = _.curry((sep, array) => _.join(array, sep))
const map = _.curry((fn, arr) => _.map(arr, fn))

const f = _.flowRight(join('-'), trace('toLower 之后：'), map(_.toLower), trace('split:'), split(' '))


console.log(f('NEVER SAY DIE'))

