// lodash 和 lodash/fp 模块中 map 方法的区别

const _ = require('lodash')
const fp = require('lodash/fp')

// _.map 接收的是三个参数 (value, index|key, collection)
console.log(_.map(['23', '8', '10'], parseInt)) // [ 23, NaN, 2 ]
// parseInt('23', 0)
// parseInt('8', 1)
// parseInt('10', 2)
// console.log(parseInt('10', 2));

console.log(fp.map(parseInt, ['23', '8', '10'])) // [ 23, 8, 10 ]




