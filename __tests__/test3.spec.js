const  booleanToInt  = require("../task3");


describe("booleanToInt", () => {
  test("Корректное значение", () => {
    expect(booleanToInt('qwerty')).toEqual("qwerty");
    expect(booleanToInt(false)).toEqual(0);
    expect(booleanToInt(true)).toEqual(1);
    expect(booleanToInt([1, 'qwerty', false])).toEqual([1, 'qwerty', 0]);
    expect(booleanToInt([1, 'qwerty', { a: true }])).toEqual([1, 'qwerty', { a: 1 }]);
    expect(booleanToInt({ a: { b: true }, c: false, d: 'qwerty' })).toEqual({ a: { b: 1 }, c: 0, d: 'qwerty' });
  });
});





// booleanToInt('qwerty') // 'qwerty'
// booleanToInt(1) // 1
// booleanToInt(false) // 0
// booleanToInt(true) // 1
// booleanToInt([1, 'qwerty', false]) // [1, 'qwerty', 0]
// booleanToInt([1, 'qwerty', { a: true }]) // [1, 'qwerty', { a: 1 }]
// booleanToInt({ a: { b: true }, c: false, d: 'qwerty' }) // { a: { b: 1 }, c: 0, d: 'qwerty' }
// booleanToInt({
//   date1: {
//     date1_1: 1,
//     date1_2: [
//       {
//         date2_1: false,
//         date2_2: 'str1',
//       },
//       {
//         date2_3: true,
//         date2_4: 'str2',
//       },
//       {
//         date2_5: false,
//         date2_6: 'str1',
//       },
//     ],
//     date1_3: false,
//     date1_4: {
//       date3_1: true,
//       date3_2: false,
//       date3_3: 'str1',
//       date3_4: true,
//       // date3_4: 123, 
//     },
//     date1_5: 'true',
//   }
// })
// /**
//   date1: {
//     date1_1: 1,
//     date1_2: [
//       {
//         date2_1: 0,
//         date2_2: 'str1',
//       },
//       {
//         date2_3: 1,
//         date2_4: 'str2',
//       },
//       {
//         date2_5: 0,
//         date2_6: 'str1',
//       },
//     ],
//     date1_3: 0,
//     date1_4: {
//       date3_1: 1,
//       date3_2: 0,
//       date3_3: 'str1',
//       date3_4: 1,
//       date3_4: 123,
//     },
//     date1_5: 'true',
//   }

