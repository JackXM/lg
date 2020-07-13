// console.log(
// 0 == false
// 0 === false

// 严格相等的两个特殊例子
// +0 === -0 // true
// NaN === NaN // false

// Object.is(+0, -0) // true
// Object.is(NaN, NaN) // true
// );

let obj = {
  name: 'xiao',
  gender: 1,
}
console.log({
  ...obj
});