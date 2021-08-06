//function of calculating the sum of array
function sumOfArray(values) {
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

//driver code
let firstExample = [2, 6, 1, 9, 0, 5, 2];
let secondExample = [11, 17, 13, 19, 23, 29];

console.log(sumOfArray(firstExample));
console.log(sumOfArray(secondExample));