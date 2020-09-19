/**
 * 函数的柯里化:
 * 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
 * 然后返回一个新的函数接收新的参数，返回结果
 */

 // 普通的纯函数
// function checkAge (min, age) {
//   return age >= min
// }

// console.log(checkAge(18, 20))
// console.log(checkAge(18, 24))


// 函数的柯里化
function checkAge (min) {
  return function (age) {
    return age >= min
  }
}

// ES6
let checkAge = min => (age => age >= min)

let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)
console.log(checkAge18(20))
console.log(checkAge20(24))

