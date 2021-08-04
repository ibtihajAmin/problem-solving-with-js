//checking leap year
function checkLeapYear(takenYear) {
    if ((takenYear % 4 == 0) && ((takenYear % 100 != 0) || (takenYear % 400 == 0))) {
        return true;
    } else {
        return false;
    }
}

//driver code
const takenYear1 = checkLeapYear(2020);
const takenYear2 = checkLeapYear(2065);
console.log(takenYear1);
console.log(takenYear2);