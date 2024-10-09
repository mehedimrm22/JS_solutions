const backToTop = document.querySelector('#backToTop');
const mobileButton = document.querySelector('.mobile-menu');
const navList = document.querySelector('nav ul');
const modalButton = document.querySelector('#mobBtn');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.overlay button');

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").classList.add('navFixed');
    } else {
        document.querySelector("header").classList.remove('navFixed');
    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

const toggleModal = () => {
    overlay.classList.toggle('visible');
}

mobileButton.addEventListener('click', toggleMenu);
modalButton.addEventListener('click', toggleModal);
closeOverlay.addEventListener('click', toggleModal)