// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function evenNumbers() {

    let count = 0;
    for (let i = 0; i < 4; i++) {
        let input = +prompt('Please enter 20 numbers');
        if (input % 2 === 0) {
            count++;
        }
    }
    console.log(`Even number: ${count}`);
}
evenNumbers();