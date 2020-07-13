const arr = [100, 299, 300, 500]
const obj = {
  name: 'xioa',
  age: 18
}
for (const item of arr) {
  if (item > 100) {
    console.log(item)
    break // for-of 可以break 来中断
  }
}

// const s = new Set(['foo', 'bar'])
// s.forEach(i => console.log(i))
// console.log(s);

// for (const item of obj) {
//   console.log(item)
// }