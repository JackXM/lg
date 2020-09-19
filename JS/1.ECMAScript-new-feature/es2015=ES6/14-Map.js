const obj = {}
obj[true] = 'value'
obj[123] = 'value'
obj[{
  a: 1
}] = 'value'

// console.log(Object.keys(obj));
// console.log(obj['[object Object]']); //

const m = new Map()
const tom = {
  name: 'tom'
}
m.set(tom, 90)
console.log(m.get(tom)); //Map(1) { { name: 'tom' } => 90 }

// m.has()
// m.delete()
// m.clear()