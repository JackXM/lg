function debounce(fn, delay = 500) {
  let timer;
  return function () { // 此处不能用箭头函数 不然会this不对
    let context = this
    clearInterval(timer)
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, delay);
  }
}

const pay = (money = 100) => {
  console.log('money:' + money)
}
const test = debounce(pay)
test()
test()
setTimeout(() => {
  test()
}, 1000)