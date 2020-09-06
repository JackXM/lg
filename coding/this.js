/**
 * this指向问题：取决于调用
*/

// 'use strict'
// function foo () {
//   console.log(this);
// }
// // 1. 普通调用
// foo() // =>   全局， 严格模式指向undefined
// // 2. new 调用
// new foo() // this => foo {}
// // 3. call/apply/bind
// foo.call('111') // ‘111’

// 总结： 沿着作用域向上找最近的一个 function，看这个 function 最终是怎样执行的

// eg: ------------------------------------------------------------------------------------
// const obj1 = {
//   foo: function () {
//     console.log(this);
//   }
// }
// const fn = obj1.foo
// fn() // 全局

//-----------------------------------------------------------------------------------------

// const obj2 = {
//   foo: function () {
//     function bar () {
//       console.log(this);
//     }
//     bar() // 调用者是全局
//   }
// }
// obj2.foo() // 指向全局


//-----------------------------------------------------------------------------------------
// 箭头函数不会改变this指向， 再向外找function
// const obj2 = {
//   foo: function () {
//     // 这里的this
//     const bar = () =>  {
//       console.log(this);
//     }
//     bar() // 调用者是全局
//   }
// }
// obj2.foo() // 指向全局

// ps： es5以后 functino是可以省略的
const obj2 = {
  foo () {
    // 这里的this
    const bar = () =>  {
      console.log(this);
    }
    bar() // 调用者是全局
  }
}
obj2.foo() // 指向全局



