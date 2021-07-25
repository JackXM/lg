/**
 * 数组结构
 */
const arr = [1, 2, 3]
// const [x, y, z] = arr
// console.log(x, y, z);

// const [x, ...rest] = arr
// console.log(rest);

const [a, b, c = 100, z = 'default'] = arr
console.log(c, z);

// const path = '/foo/bar/baz'
// const [, rootdir] = path.split('/')
// console.log(path.split('/'),rootdir);