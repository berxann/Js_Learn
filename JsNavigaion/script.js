// console.log(document.documentElement) //вернуть тег HTML в консоль
// console.log(document.body) //вернуть body
console.log(document.body.querySelector('ul').childNodes)
console.log(document.body.childNodes) //вернуть ноды дочерних элементов
// console.log(document.body.firstChild)
// console.log(document.body.childElementCount)
console.log(document.body.children)
// console.log(document.body.firstElementChild) 
const dataAtt = document.querySelector('[data-current="3"]')
console.log(dataAtt)

for (let value of document.querySelector('ul').childNodes){
    if(value.nodeName === '#text'){
        continue;
    }
    console.log(value)
}