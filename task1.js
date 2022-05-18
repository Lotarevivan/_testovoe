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



// const o = {
//     one:'1',
//     two:'2',
//     three:{
//         four:'4'
//     },
//     five:{
//         six:'6'
//     }
// }

// const key_array=['three.four','five.six']
// function copy(obj,arr) {
//     let resultArr=[]
//     // if(!obj||!arr){
//     //     return 'no arguments'
//     // }
    
//     arr.forEach( element => {
//         let temp = obj
//         let deep = element.split('.')
//         for (let i=0;i<deep.length;i++){
//             if(temp[deep[i]]){
//                 temp=temp[deep[i]]
//             }else{
//                 return undefined
//             }
//             // console.log(deep[i])
//             // console.log(obj[deep[i]])
//         }
    
//         resultArr.push([element,temp])
//     });

//     return  resultArr
//     // return  Object.fromEntries(resultArr)
// }
// copy(o,key_array)
// console.log('original:',o)
// console.log('original:',o.three.four)
// console.log('copied:',copy(o,key_array))



const arr = [ [ 'three.four', '4' ], [ 'five.six', '6' ] ]


const res = arr.forEach(el=>{
    let deep = el[0].split('.')
    let val=el[1]
    // console.log(deep)
    let temp={}
    for(let i=deep.length-1;i>=0;i--){
        // console.log('d',deep[i])
        // console.log('t.d',(temp[deep[i]]))
        // console.log('t')
        if(!temp[deep[i+1]]){
            temp[deep[i]]=val
        }else{
            temp[deep[i]]= JSON.parse(JSON.stringify(temp))
            delete temp[deep[i+1]]
            console.log(temp)
        }
        // console.log('-----------------');
    }
    // console.log(temp)
    // return temp
})

// console.log(res)

