const arr = [1, 3, 4, 5, 6]
// !! 用于转换成boolean类型
const newArr = arr.filter(i => !(i % 2))
// console.log(newArr);

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(this, this.name);
  // }

  // sayHi: () => {
  //   console.log(this.name);
  // }

  sayHiAsync: function () {
    const _this = this // 借助闭包 来改变this
    setTimeout(function () {
      console.log(_this, _this.name); // this指向window
    }, 1000);
  }

  // sayHiAsync: function () {
  //   console.log(this);
  //   setTimeout(() => {
  //     console.log(this, this.name); // this 执行person
  //   }, 1000);
  // }
}

// person.sayHi()
person.sayHiAsync()