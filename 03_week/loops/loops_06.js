// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function calcAvg() {

    let number, sum = 0, confirmation, count = 0;
    while (true) {

        number = +prompt('Enter a number: ');
        sum += number;
        count++;
        confirmation = prompt('Do you want to continue giving numbers? (y/n)');
        if (confirmation === 'y' || confirmation === 'Y') {
            continue;
        } else if (confirmation === 'n' || confirmation === 'N') {
            break;
        }
    }
    alert(`Average is ${sum / count}`);
}
calcAvg();