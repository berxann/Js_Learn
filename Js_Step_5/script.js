"use strict"

const arr = [1,2,5,9]


arr.forEach(function(value, index, arr) {
    console.log(`число ${value} находится в позиции: ${index} в массиве ${arr}`)       //метод forEach
})


arr.push(11)
console.log(arr)


for(let value of arr){
    console.log(value)
}

const str = prompt('Что вам нужно?')



arr.sort()
console.log(arr);