const arr = ['foo', 'bar', 'ass']

console.log.apply(console, arr);

console.log(...arr) // 展开运算符