"use strict"

const obj = {
    a: 5,                                       //массив для копирования
    b: 11
}

const objNum = {
    x:15,
    y:10,
    z:{
        xy:6,                                  //новый массив
        yy: 1
    }
}
function copy(mainObj) {
    let copyObj = {};
    let key;
    for(key in mainObj){
        copyObj[key] = mainObj[key]                  //функция поверхстного копирования объекта
    }
    return copyObj;
}

const newObjNum = copy(objNum)                  //нужно передать в аргументы для копирования
newObjNum.y = 17;

console.log(objNum)
console.log(newObjNum)

const arr = ['Иван', 'Петриченко', 'И', 'JavaScript']        //наглядная работа spread операотра
console.log(...arr)
