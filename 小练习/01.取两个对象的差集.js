const obj1 = {
  gender: '1',
  name: 'xiaomeng',
}

const obj2 = {
  gender: '1',
  name: 'sunlu',
}

const newObj = {}

for (const [key, value] of Object.entries(obj1)) {
  !(obj2[key] == value) && (newObj[key] = obj2[key])
}
console.log(newObj);