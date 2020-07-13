// for (var index = 0; index < 3; index++) {
//   for (var index = 0; index < 3; index++) {
//     console.log(index);
//   }
// }

// for (let index = 0; index < 3; index++) {
//   for (let index = 0; index < 3; index++) {
//     console.log(index);
//   }
// }

var elements = [{}, {}, {}]
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = (function (i) {
    return function () {
      console.log(i);
    }
  })(i);
}
elements[0].onclick() //都是3