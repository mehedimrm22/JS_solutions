const myId = document.getElementById('myId');
const mySecondId = document.querySelector('#myId');

const myClass = document.getElementsByClassName('myClass');
const mySecondClass = document.querySelectorAll('.myClass');
const myThirdClass = document.querySelector('.myClass');

const myParagraph = document.getElementsByTagName('p');

const eatButton = document.querySelector('#btnEat');
const drinkButton = document.querySelector('#btnDrink');
const headline = document.querySelector('h1');

function btnEatFunction() {

    console.log('Eat!!');
    headline.textContent = 'What you want to Eat!';
    eatButton.textContent = 'ATE!'

}
function btnDrinkFunction() {

    console.log('Drink!!');
    headline.textContent = 'What you want to drink!';
    drinkButton.textContent = 'Drunk!'
    headline.style.fontSize = '40px';
    headline.style.color = 'green';
    headline.remove();


}

eatButton.addEventListener('click', btnEatFunction);
drinkButton.addEventListener('click', btnDrinkFunction);

