//1st way: even function
function isNumberEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//2nd way: odd function
function isNumberOdd(value) {
    if (value % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

//driver code
const checking1 = isNumberEven(48);
const checking2 = isNumberOdd(59);
console.log(checking1);
console.log(checking2);