/**
Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях.
Изменение этих ключей в новом объекте не должны менять значения в старом.
Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
Второй аргумент функции - это массив путей,
по которым нужно выполнять копирование.
Этот аргумент может отсутствовать в объекте, например:
a = {
b: null
}
a.b.c
*/

const o = {
  one: "1",
  two: "2",
  three: {
    four: "4",
  },
  five: {
    six: "6",
  },
  some: {
    some: {
      some: "some",
    },
  },
  some1: {
    some: {
      some:null,
    },
  },
};

const key_array = ["three.four", "five.six", "some1.some.some", "some.some.some"];
function copy(obj, arr) {
  let resultArr = [];
    arr.forEach((element) => {
    let temp = obj;
    let deep = element.split(".");
    for (let i = 0; i < deep.length; i++) {
      if (temp[deep[i]]) {
        temp = temp[deep[i]];
      } else {
        return undefined;
      }
    }
    resultArr.push([element, temp]);
  });
  return resultArr
    .map((el) => {
      let deep = el[0].split(".");
      let val = el[1];
      let temp = {};
      for (let i = deep.length - 1; i >= 0; i--) {
        if (!temp[deep[i + 1]]) {
          temp[deep[i]] = val;
        } else {
          temp[deep[i]] = JSON.parse(JSON.stringify(temp));
          if (temp[deep[i + 1]] !== temp[deep[i]]) {
            delete temp[deep[i + 1]];
          }
        }
      }
      return temp;
    })
    .reduce((acc, elem) => {
      return { ...acc, ...elem };
    }, {});
}
let copied = copy(o, key_array);

console.log(copied);
// console.log('test modify copied .three.four')
// copied.three.four='test'
// console.log('original .three.four:',o.three.four)
// console.log('copied .three.four :',copied.three.four)
// console.log('original:',o)
// console.log('copied:',copy(o,key_array))
// const arr = [ [ 'three.four', '4' ], [ 'five.six', '6' ] ]
// const res = arr.
// console.log(res)
