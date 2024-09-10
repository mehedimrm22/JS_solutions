// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

function findNum() {

    let initNum, number = 0, smallest = Infinity, biggest = -Infinity;
    initNum = +prompt('How many numbers you want to enter? ');

    for (let i = 1; i <= initNum; i++) {
        number = +prompt(`Enter ${initNum} numbers: `);
        if (number < smallest) {
            smallest = number;
        } else if (number > biggest) {
            biggest = number;
        }
    }
    console.log(`Smallest number is: ${smallest}`);
    console.log(`Biggest number is: ${biggest}`);
}

findNum();