// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function avgNum() {

    let userNum = 0, userNumSum = 0, count = 0;
    do {
        userNum = +prompt('Enter numbers to get average: ');
        if (userNum != 0) {
            userNumSum += userNum;
            count++;
        }
    } while (userNum != 0);
    alert(`Average is ${userNumSum / count}`);

}
avgNum();