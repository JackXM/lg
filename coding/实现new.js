function _new(fn, ...args) {
  let obj = Object.create(fn.prototype);
  fn.apply(obj, args);
  return obj;
}
function Person() {
  this.name = "xioa";
}
var fnobj = _new(Person);
console.log(fnobj);

// 2
function New(Fn, ...args) {
  const obj = {}; // 创建一个空对象obj
  obj.__proto__ = Fn.prototype; // 该对象的__proto__属性指向该构造函数的原型
  const result = Fn.apply(obj, args); // 将执行上下文（this）绑定到新创建的对象中
  return result instanceof Object ? result : obj; // 如果构造函数有返回值，那么这个返回值将取代第一步中新创建的对象。否则返回该对象
}
