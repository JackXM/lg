// 优势1
// defineProperty 只能监视属性的读写
// proxy 更加强大 监视更多 例如 删除 对对象的调用等

const person = {
  name: 'xm',
  age: 18,
}
// delete person['name'] // 删除对象中的一条

// const personProxy = new Proxy(person, {
//   deleteProperty(target, property) {
//     console.log('del', property);
//     delete target[property]
//   }
// })

// delete personProxy.age
// console.log(person);


// 优势2
// Proxy 更好的支持数组对象的监视
// const list = []
// const listProxy = new Proxy(list, {
//   set(target, property, value) {
//     console.log('set', property, value);
//     target[property] = value
//     return true // 表示设置成功
//   }
// })
// listProxy.push(100)
// listProxy.push(200)


// 优势3: Proxy 不需要侵入对象