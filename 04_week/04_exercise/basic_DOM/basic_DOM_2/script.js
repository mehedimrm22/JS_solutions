/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const fruits = document.getElementById('fruitList');
const inputFruits = document.querySelector('#fruitInput');
const addFruit = document.getElementById('addFruitBtn');

function fruitFunction() {
    console.log(inputFruits.value);

    /* Creating new element */
    const newFruit = document.createElement('li');
    newFruit.textContent = inputFruits.value;

    /* Add color to new element */
    newFruit.style.color = 'green';

    /* adding into the list */
    fruits.appendChild(newFruit);

    /* Clearing the input box */
    inputFruits.value = '';
}

addFruit.addEventListener('click', fruitFunction);
