const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()
newArray[2] = 'dolby'
console.log(oldArray)
console.log(newArray)

function log(a, b, c){
    console.log(a)
    console.log(b)
    console.log(c)
}

const userData = [2, 5, 7]
log(...userData)