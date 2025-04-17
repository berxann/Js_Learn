"use strict"

function checkCB(src, callback) {
    console.log(src)
    callback();
}
checkCB('Moscow calling!', function (){
    console.log('Callback is calling!')
})
// callbacks