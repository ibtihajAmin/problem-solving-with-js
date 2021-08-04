//find factorial for a number
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

//driver code
const firstCheck = getFactorial(4);
const secondCheck = getFactorial(6);
console.log(firstCheck);
console.log(secondCheck);