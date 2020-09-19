const person = {
  name: 'xiao',
  age: 18,
}

// console.log('name' in person); // 该属性是否属于某个对象
const {
  log
} = console
const personProxy = new Proxy(person, {
  get(target, property) {
    // console.log(target, property);
    return property in target ? target[property] : 'default'
  },
  set(target, property, value) {
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${value} is not an integer`)
      }
    }
    log(target, property, value)
  }
})
// personProxy.gender = '1'
// console.log(personProxy.name);
personProxy.age = '2'