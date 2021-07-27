function Person(name) {
  this.name = name;
  return 1; // return 值类型
  // return {id: 1}; // return 引用类型
}
// 模拟一个new
function New(Func, ...rest) {
  // 1. 创建一个空对象
  const obj = {};
  // 2. 将空对象的指针指向构造函数的原型
  obj.__proto__ = Func.prototype;
  // 3. 将执行上下文this绑定到上面创建的新对象上
  const result = Func.apply(obj, rest);
  // 4. 如果构造函数返回「引用类型」的值，那么将其返回。否则返回上面创建的对象
  return result instanceof Object ? result : obj;
}
// const p = new Person('xm')
const p = New(Person, 'xm')

console.log(p);

Person.prototype.sayName = function() {
  // 原型方法尽量不要使用箭头函数: 箭头函数不绑定this, 无法获取实例对象上的属性和方法
  console.log('我的名字: ', this.name);
}
// 构造函数返回引用类型时报错. TypeError: p.eat is not a function
p.sayName(); 

// 在JavaScript构造函数中：
// 如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；
// 如果return引用类型（数组，函数，对象），那么实例化对象就会返回该引用类型