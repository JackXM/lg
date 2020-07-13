class Person {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`hi, my name is ${this.name}`);
  }

  // this 不指向实例,而是类型
  static create(name) {
    console.log(`hi, my name is ${this.name}`);
    return new Person(name)
  }
}

const p = new Person('xiaomeng')
// p.say()
// Person.create()

class Student extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  hello() {
    console.log(`Im ${this.name} school number is ${this.number}`)
  }
}

const s = new Student('jack', 100)
s.hello()
s.say()