"use strict"
let i;
const preferences= {
    name: "Ivan",
    width: 1024,
    height: 2048,
    color: {
        head: 'White',
        body: 'Cappuccino',
        legs: 'Black'
    }
}

for(let key in preferences) {
    if(typeof(preferences[key] === 'object')) {
        for (let i in preferences[key])
        console.log(`Свойство ${i} имеет значение: ${preferences[key][i]}`)
    }
    else{
    console.log(`Свойство ${preferences.key} имеет значение: ${preferences['key']}`)
    }
}
// не работает как нужно
//задумывалась как деструктивизация объектов(доставание нужных значений из объекта)