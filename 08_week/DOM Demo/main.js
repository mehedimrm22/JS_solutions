const backToTop = document.querySelector('#backToTop');

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
