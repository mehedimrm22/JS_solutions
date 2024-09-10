/* Selecting Pancake type */
const pancakeType = document.querySelector('#type');

/* All the toppings declared individually */
const nuts = document.querySelector('#nuts');
const bananas = document.querySelector('#bananas');
const syrup = document.querySelector('#syrup');
const whippedCream = document.querySelector('#whippedCream');
const iceCream = document.querySelector('#iceCream');

/* Declared two variables for the final prices */
const bannerPrice = document.querySelector('.price-banner #totalPrice');
const displayPrice = document.querySelector('.price-display #totalPrice');

/* Declared priceAnimate for the animation */
const priceAnimate = document.querySelector('.price-banner span');


function updatePrice() {

    const initPrice = +(pancakeType.value);

    let finalPrice = initPrice;

    if (nuts.checked) {
        finalPrice += +(nuts.value);
    }
    if (bananas.checked) {
        finalPrice += +(bananas.value);
    }
    if (syrup.checked) {
        finalPrice += +(syrup.value);
    }
    if (whippedCream.checked) {
        finalPrice += +(whippedCream.value);
    }
    if (iceCream.checked) {
        finalPrice += +(iceCream.value);
    }

    bannerPrice.textContent = `$${finalPrice}`;
    displayPrice.textContent = `$${finalPrice}`;

    priceAnimation();

}

function priceAnimation() {
    priceAnimate.style.color = '#0aff7d';
    priceAnimate.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(2)', opacity: 1 },
        { transform: 'scale(1)', opacity: 1 }
    ], {
        duration: 700,
        easing: 'ease-in-out'
    });
}

pancakeType.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);
