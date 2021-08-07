//calling a function to reverse a string
function stringReverse(str) {
    let reverse = '';
    for (let val of str) {
        reverse = val + reverse;
    }
    return reverse;
}

//driver code
let str1 = 'Hello Boi,Whats up';
let str2 = 'B te Boka na hoye N te Nogod e dour den mia!';

console.log(stringReverse(str1));
console.log(stringReverse(str2));
