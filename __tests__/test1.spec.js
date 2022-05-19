const  copy  = require("../task1");
const obj = {
  one: "1", //one
  two: "2", //two
  three: {
    four: "4", //three.four
  },
  five: {
    six: "6", //five.six
  },
  some: {
    some: {
      some: "some", //some.some.some
      some2: "2", //some.some.some2
    },
  },
  some1: {
    some: {
      some: null, //some1.some.some ? null
    },
  },
};
const key_array_set1 = [
  "three.four",
  "five.six",
  "some1.some.some",
  "some.some.some",
];
const key_array_set2 = ["one", "two", "some.some.some2"];
const key_array_set3 = ["one", "two", "some1.some"];
describe("copy", () => {
  test("Корректное значение", () => {
    expect(copy(obj, key_array_set1)).toEqual({
      three: { four: "4" },
      five: { six: "6" },
      some: { some: { some: "some" } },
    });
    expect(copy(obj, key_array_set2)).toEqual({
      one: "1",
      two: "2",
      some: { some: { some2: "2" } },
    });
    expect(copy(obj, key_array_set3)).toEqual({
      one: "1",
      two: "2",
      some1: { some: { some: null } },
    });
  });
});
