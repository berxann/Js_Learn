const usdCurr = 96.54;
const eurCurr = 104.1;
const discount = 0.9;
const res = convert(10, usdCurr);

function convert(amount, curr){
    return (curr * amount);
}

function calcDiscount(){
    console.log(res * discount)
}
calcDiscount();

//конвертер валют