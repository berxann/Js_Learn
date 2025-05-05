let a = 5,
    b = a
b = b + 5
console.log(b) // 10
console.log(a) // 5

const masterObject = {
    a: 5,
    b: 1
}
const copyObject = masterObject;    // в копию кладется лишь ссылка на оригинал, а не создается полная его копия
copyObject.a = 10                     //меняем значение в копии

console.log(masterObject)            // { a: 10, b: 1 }, меняя копию, мы поменяли и значение в оригинале
console.log(copyObject)             // { a: 10, b: 1 }

function copy (MainObject){
    let localCopyObject = {}

    for(let key in MainObject){
        localCopyObject[key] = MainObject[key]
    }
    return localCopyObject;
}


const numbers = {
    a: 5,
    b: 6,
    c: {
        x: 1,
        y: 2,
    }
}
const newNumbers = copy(numbers);
newNumbers.a = 60;
newNumbers.c.x = 30;
const biObject = Object.assign({}, numbers)
biObject.b = 10;
const ghibli = {
    tako: 10,
    bebi: 15
}


console.log(numbers)
console.log(newNumbers)

console.log(Object.assign(ghibli, biObject))