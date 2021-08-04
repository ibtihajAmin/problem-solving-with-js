// creating a function for making factorial
function getFactorial(value) {
    let factorial = 1;
    let i = 1;

    while (i <= value) {
        factorial = factorial * i;
        i++;
    }

    return factorial;
}

//alternative way to calculate factorial by using while loop
function getFactorial2(input) {
    let facto = 1;

    while (input >= 1) {
        facto = facto * input;
        input--;
    }

    return facto;
}

//driver code
const firstCalculate = getFactorial(4);
const secondCalculate = getFactorial(5);
const thirdCalculate = getFactorial2(6);

//print output
console.log(firstCalculate);
console.log(secondCalculate);
console.log(thirdCalculate);