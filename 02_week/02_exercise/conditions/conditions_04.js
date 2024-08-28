/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */

function greaterNum(a, b) {
    if (a > b) {
        return 'Larger number is: ' + a;
    } else if (b > a) {
        return 'Larger number is: ' + b;
    } else {
        return 'Put a valid number!';
    }
}

// Sample usage - do not modify
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
