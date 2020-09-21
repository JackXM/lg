/**
 * point free
1. 不需要指明处理的数据
2. 只需要合成运算过程
3. 需要定义一些辅助的基本运算函数
 */
// Hello World => hello_world

const fp = require('lodash/fp')
const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)
console.log(f('Hello World'))

// 案例
// world wild web =》 W. W. W

// const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))

console.log(firstLetterToUpper('world wild web'))
