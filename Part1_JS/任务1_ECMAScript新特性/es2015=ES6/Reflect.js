// Reflect 是一个内置对象, 但不能new Reflect的所有属性和方法都是静态的

const duck = {
  name: 'Maurice',
  color: 'white',
  // greeting: function () {
  //   console.log(`Quaaaack! My name is ${this.name}`);
  // }
}

// duck.greeting()

// console.log(Reflect.has(duck, 'color'));
// console.log(Reflect.ownKeys(duck));

// const arr = Object.entries(duck)
// let str = ''
// arr.forEach(element => {
//   str += `${element[0]}=${element[1]}&`
// });
// const string = str.substring(0, str.length - 1)
// console.log(string);

// function replaceString(oldS, newS, fullS) {
//   return fullS.split(oldS).join(newS);
// }
// const a = replaceString("World", "Web", "Brave New World");
// console.log('Brave New World'.split('World').join('web'));

// console.log('Brave New World'.replace('World', 'web'));