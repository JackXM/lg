const name = 'tom'
const gender = true

function myTagFunc(strings, name, gender) {
  console.log(strings, name, gender); // 数组参数
  const sex = gender ? 'man' : 'women'
  return strings[0] + name + strings[1] + sex + strings[2]
}

const result = myTagFunc `hey, ${name} is a ${gender}.`
console.log(result);