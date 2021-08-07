//function calling for removing duplicate values from an array
function removeDuplicate(values) {
    let uniqueValue = [];

    for (let element of values) {
        if (uniqueValue.indexOf(element) == -1) {
            uniqueValue.push(element);
        }
    }
    return uniqueValue;
}

//driver code 
let arr1 = [10, 43, 12, 32, 76, 46, 10, 43];
let arr2 = [-2, 5, 7, -1, -2, 5];
console.log(removeDuplicate(arr1));
console.log(removeDuplicate(arr2));