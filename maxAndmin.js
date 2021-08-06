// function to find maximum value among three numbers 
function maximumAmongThree(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}

// function to find minimum value among three numbers 
function minimumAmongThree(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}

//driver code
let firstNumber = 12;
let secondNumber = 17;
let thirdNumber = 15;

console.log('Maximum number is:', maximumAmongThree(firstNumber, secondNumber, thirdNumber));
console.log('Minimum number is:', minimumAmongThree(firstNumber, secondNumber, thirdNumber));