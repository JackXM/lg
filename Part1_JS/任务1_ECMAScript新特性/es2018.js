/**
 * es2018
 * 1. 展开和剩余在对象上的应用
 * 2. 正则表达式的增强
 * 3. Promise.prototype.finally()
 */

// +++++++++++++ 展开和剩余在对象上的应用 +++++++++++++++

const obj = { one: 1, two: 2, three: 3, four: 4, five: 5 }
const { one, four, ...rest } = obj
// console.log(one, four, rest);
// rest => { two: 2, three: 3, five: 5 }

const obj2 = {foo: 'bar', ...rest}
// console.log(obj2);

// 值覆盖 如果里面是对象而不是值的话 就是浅拷贝了 { foo: { one: 1 }}
const obj3 = { foo: 'bar', two: 200, ...rest}
// console.log(obj3);

// 可以代替 Object.assign({}, {})

// + +++++++++++++++正则表达式的增强+++++++++++++++

// 环视
const intro = '张三是张三, 张三丰是张三丰, 张三不是张三丰, 张三丰也不是张三'

// const res = intro.replace(/张三/g, '李四') // 不可取

// 向后否定
// const res = intro.replace(/张三(?!丰)/g, '李四')
// 向后肯定
// const res = intro.replace(/张三(?=丰)/g, '李四')
// 向前否定 向前肯定
// const res = 'A00 B00'.replace(/(?<!A)00/g, 99)
// const res = 'A00 B00'.replace(/(?<=A)00/g, 99)
console.log(res);


// 正则组命名 ?<name>
// const data = '2020-09-06'
// const reg = /(?<year>\d{4})-(?<month>\d{2}-(?<day>\d{2}))/
// const res = reg.exec(data)
// console.log(res);


// +++++++++++++++ Promise.prototype.finally() +++++++++++++++
