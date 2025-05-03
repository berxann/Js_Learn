const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
        timofey: 'loskueit',
    },
    makeTest: function (){
        console.log("it's a test bro")
    }
}

for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`ключ ${i}: значение ${options[key][i]}`)
        }
    } else {
        console.log(`ключ ${key}: значение ${options[key]}`)
    }
}

const {border, bg} = options.colors;

console.log(border)

options.makeTest();
console.log(Object.keys(options).length)
console.log(Object.keys(options))

// delete options.colors
// console.log(options)