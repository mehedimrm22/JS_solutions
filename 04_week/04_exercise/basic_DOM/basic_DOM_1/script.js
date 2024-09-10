/* 
Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/


const myButton = document.querySelector('button');
const myText = document.querySelector('#content');

function changeText() {

    myText.textContent = 'Hello, World!';

}
