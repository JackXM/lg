let obj = {
  num: 10,
  value: 'haha',
  id: 0,
}
// let a = Object.entries(obj)
// let str = ''
// a.map((item, index) => {
//   str += `${item[0]}=${item[1]}&`
// })
// str.replace(/\W$/g, '1')
// console.log(1, str.replace(/\&$/, ''));

// console.log(str.substring(0, str.lastIndexOf("&")));


// -------------2--------------------  让对象不可改变
// Object.defineProperty(obj, "num", {
//   writable: false,
// })
// obj.num = 90
// obj.value = "xixi"
// console.log(obj);

let str = ''
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    const element = obj[key];
    str += `${key}=${element}&`
  }
}
console.log(str);