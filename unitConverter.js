//inch to feet convert
function inchToFeet(inches) {
    let feet = inches / 12;
    return feet;
}


//mile to kilometer convert
function mileToKilometer(miles) {
    let km = miles * 1.60934;
    return km;
}

//driver code

let firstExample = inchToFeet(250);
let secondExample = mileToKilometer(10);
console.log(firstExample);
console.log(secondExample);