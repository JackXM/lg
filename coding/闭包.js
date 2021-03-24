/**
 * 闭包解决var变量的问题
 */

// for (var index = 0; index < 5; index++) {
//   (function timer1(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(index);
// }

/**
 * 用闭包实现once
 */

function once(fn) {
  let done = false;
  return function (...args) {
    if (!done) {
      done = true;
      fn.apply(this, args);
    }
  };
}
const pay = once(function (money) {
  console.log(`¥：${money}`);
});
pay(100);
pay(100);
