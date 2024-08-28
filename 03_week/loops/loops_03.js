// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function avgSpeed() {

    /* let kilometers = prompt('Kilometers please!');
    if (kilometers === '0') {
        alert('Distance cannot be Zero!!');
    } else {
        let time = prompt('Time please (in hours)');
        let result = kilometers / time;
        console.log(`Average Speed is ${result}`);

    } */

    let kilometers, time;
    while (kilometers != 0) {
        kilometers = +prompt('Kilometers Please!');

        if (kilometers == 0) {
            alert('Distance cannot be zero!');
            break;
        }
        time = +prompt('Time please (in hours)');
        let result = kilometers / time;
        alert(`Average Speed is ${result}`);
        //        console.log(typeof kilometers, typeof result);
    }
}
avgSpeed();