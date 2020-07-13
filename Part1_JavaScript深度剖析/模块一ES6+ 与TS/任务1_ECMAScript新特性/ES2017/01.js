const obj = {
  foo: 'value1',
  bar: 'value2'
}
// Object.values ----------------------------------------------

// console.log(Object.values(obj));

// Object.entries ---------------------------------------------

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// Object.getOwnPropertyDescriptors --------------------------------

const p1 = {
  firstName: 'xiao',
  lastName: "meng",
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
// const p2 = Object.assign({}, p1)
// p2.firstName = 'haha'
// console.log(p1.fullName); // xioa meng

// const descriptors = Object.getOwnPropertyDescriptors(p1)
// console.log(descriptors);
// const p2 = Object.defineProperties({}, descriptors)
// console.log(p2);
// p2.firstName = 'hehe'
// console.log(p2.fullName);

// String.prototype.padStart / String.prototype.padEnd ------------------

const object = {
  eng: 89,
  math: 45,
  html: 1,
}
for (const [name, count] of Object.entries(object)) {
  console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(3, '0')}`);

}