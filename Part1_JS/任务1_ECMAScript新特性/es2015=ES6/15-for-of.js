const arr = [100, 299, 300, 500]
const obj = {
  name: 'xioa',
  age: 18
}

// for of 遍历的是value 而 for in 遍历的是key
// for of 可以直接遍历数组或Map 但不能直接遍历对象

// for (const item of arr) {
//   if (item > 100) {
//     console.log(item)
//     break // for-of 可以break 来中断
//   }
// }

// const s = new Set(['foo', 'bar'])
// s.forEach(i => console.log(i))
// console.log(s);

// Map 是可迭代的 , 而可以直接进行迭代 for-of foreach
for (const item of Object.entries(obj)) {
  console.log(item)
}