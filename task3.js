// Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
// В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
// Т.е. пример
function booleanToInt (arg){
    let str = JSON.stringify(arg,function(key, value) {
        if(typeof value!=='boolean') return value
        if(value===true) return 1
        if(value===false) return 0
    })
    return JSON.parse(str)
}
module.exports = booleanToInt
