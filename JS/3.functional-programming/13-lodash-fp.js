/**
 * lodash 的 fp 模块
 * 
 * fp 模块提供了使用的对函数式编程友好的方法
 * 提供了不可变 auto-curried iteratee-first data-last 的方法
 * 也就是 柯里化后的 方法在前，数据在后，不用再麻烦的自己用curry去改造了
 */

const fp = require('lodash/fp')

// const split = _.curry((sep, str) => _.split(str, sep))
// const join = _.curry((sep, array) => _.join(array, sep))
// const map = _.curry((fn, arr) => _.map(arr, fn))
// const f = _.flowRight(join('-'), trace('toLower 之后：'), map(_.toLower), trace('split:'), split(' '))

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE'))
