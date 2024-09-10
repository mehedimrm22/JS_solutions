"use strict";

let userBalance = 1000;
let deposit = 0;


function main() {

    alert('Welcome to ATM simulator! (Check Balance, Deposit, Withdraw, Exit)');
    while (true) {

        let userInput = prompt('What do you want!');

        if (userInput === 'Check Balance' || userInput === 'check balance') {

            function checkBalance() {
                alert(userBalance);
            }
            checkBalance();

        } else if (userInput === 'Deposit' || userInput === 'deposit') {

            function deposit() {
                let depositAmount = +prompt('How much you want to deposit!');
                userBalance += depositAmount;

                alert(userBalance);

            }
            deposit();
        } else if (userInput === 'Withdraw' || userInput === 'withdraw') {
            function withdraw() {

                let withdrawAmount = +prompt('How much you want to withdraw!');
                userBalance -= withdrawAmount;

                alert(userBalance);

            }
            withdraw();
        } else if (userInput === 'Exit' || userInput === 'exit') {

            alert('Exited!');
            return;
        }
    }



}

main();
