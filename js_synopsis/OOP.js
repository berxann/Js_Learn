// let str = 'some'
// let strObj = new Object(str);
//
// console.log(typeof(str))
// console.log(typeof(strObj))

// console.dir([1,2,3])

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("hello")        
    }
}
const john = {
    health: 100,
}

const Bob = Object.create(soldier)
console.log(Bob)

// Object.setPrototypeOf(john, soldier)
// john.__proto__ = soldier
console.log(john.armor)
console.log(john.sayHello)

