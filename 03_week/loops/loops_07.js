/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */
function calcNum() {

    let count = 10, number, sum = 0, smallNum = Infinity, bigNum = -Infinity;
    for (count = 1; count <= 10; count++) {
        number = +prompt('Enter ten numbers: ');
        sum += number;
        if (number < smallNum) {
            smallNum = number;
        } else if (number > bigNum) {
            bigNum = number;
        }
    }

    console.log(`Sum of the numbers: ${sum}`);
    console.log(`Average of the numbers: ${sum / (count - 1)}`);
    console.log(`Smallest number is: ${smallNum}`);
    console.log(`Largest number is: ${bigNum}`);
}

calcNum();