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

const key_array=['one']
function copy(obj,arr) {
    // if(!obj||!arr){
    //     return 'no arguments'
    // }
    let temp = obj
    let deep = arr[0].split('.')
    for (let i=0;i<deep.length;i++){
        if(temp[deep[i]]){
            temp=temp[deep[i]]
        }else{
            return undefined
        }
        // console.log(deep[i])
        // console.log(obj[deep[i]])
    }
    return temp
}
copy(o,key_array)
console.log('original:',o)
console.log('original:',o.one)
console.log('copied:',copy(o,key_array))
