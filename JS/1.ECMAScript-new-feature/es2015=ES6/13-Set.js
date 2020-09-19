// 不允许重复
const s = new Set()
s.add(1).add(2).add(3).add(2) // 链式调用

// s.forEach(element => {
//   console.log(element)
// });

// for (const iterator of s) {
//   console.log(iterator)
// }

// 方法:
// console.log(s.size); // size 
// console.log(s.has(100));
// console.log(s.delete(1));
// s.clear()
// console.log(s);

const arr = [1, 2, 3, 3, 5]
const newArr = new Set(arr)
// 变成数组的两种方式
//  1.
const res = Array.from(new Set(arr))
//   2.
const result = [...new Set(arr)]
console.log(newArr, res, result);