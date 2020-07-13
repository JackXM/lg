const bar = '345'

const obj = {
  foo: 123,
  bar, // 若值是变量 且和属性名相同 可省略
  // method: function () {
  //   console.log('method1');
  // }
  method() {
    console.log('1', this);
  },
  [Math.random()]: 123, // 计算属性名 用[] 将属性名包起来
}

console.log(obj);
obj.method()