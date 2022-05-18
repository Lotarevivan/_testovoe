//Как вариант после решения 3 задачки

// const o = {
//   one: "1",
//   two: "2",
//   three: {
//     four: "4",
//   },
//   five: {
//     six: "6",
//   },
//   some: {
//     some: {
//       some: "some",
//     },
//   },
//   some1: {
//     some: {
//       some: null,
//     },
//   },
//   foo: {
//     bar: 123,
//   },
//   asd: [123, 321],
// };
// //   const key_array = ["three.four", "five.six", "some1.some.some", "some.some.some"];
// let counter = 0;
// let k = "";
// let map = new Map();
// JSON.stringify(o, (key, value) => {
//   if (typeof value === "object" && value !== null) { //Array.isarray
//     if (key) {
//       k = k + key + ".";
//     }
//   } else {
//     k = k + key;
//     map.set(k, value);
//     k = "";
//   }
//   return value;
// });

// console.log(map);
