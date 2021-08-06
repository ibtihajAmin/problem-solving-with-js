//function to find maximum number from an array
function maxOfArray(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

//function to find minimum number from an array
function minOfArray(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

//driver code
let arr1 = [10, 43, 78, 63, 19, 100];
let arr2 = [-4, 0, 78, 21, 33, 11];

console.log('Largest Number of array is:', maxOfArray(arr1))
console.log('Largest Number of array is:', maxOfArray(arr2));

console.log('Smallest Number of array is:', minOfArray(arr1))
console.log('Smallest Number of array is:', minOfArray(arr2));