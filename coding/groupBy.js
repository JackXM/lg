// reduce实现groupBy
const people = [
  { name: "xiao", age: 20 },
  { name: "meng", age: 21 },
  { name: "wang", age: 21 },
  { name: "yi", age: 20 },
];

// function groupBy(arr, property) {
//   return arr.reduce((data, item) => {
//     const key = item[property];
//     if (!data[key]) {
//       data[key] = [];
//     }
//     data[key].push(item);
//     return data;
//   }, {});
// }


// 用forEach实现groupBy
function groupBy(arr, property) {
  const resp = {};
  arr.forEach((item, index) => {
    const key = item[property];
    if (!resp[key]) {
      resp[key] = [];
    }
    resp[key].push(item);
  });
  return resp;
}

console.log(groupBy(people, "age"));
