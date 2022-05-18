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
    one:'1',
    two:'2'
}

const key_array=['one.two']
function copy(obj,arr) {
    if(!obj||!arr){
        return 'no arguments'
    }
    let temp ={ }
    arr.forEach(element => {
        let deep=element.split('.')
        deep.forEach(key=>{
            if(!obj.hasOwnProperty(key)){
                return;
            }
            temp[key] = obj[key]
            console.log('=================')
            console.log(temp)
            console.log('=================')
        })
    });
    return temp
}

console.log('original:',o)
console.log('original:',o.one.two)
console.log('copied:',copy(o,key_array))
