const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const mainEl = document.querySelector('.main-content');
const body = document.querySelector('body');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle("nav--open")
    mainEl.classList.toggle('main-content--blurred');
    body.classList.toggle('no-scroll');
    hamburgerEl.classList.toggle("hamburger--open")

   
});


navEl.addEventListener('click', () => {
    navEl.classList.remove("nav--open")
    hamburgerEl.classList.remove("hamburger--open")
    body.classList.remove('no-scroll');
    mainEl.classList.remove('main-content--blurred');

   
});


var typed = new Typed(".multiple-text", {
    strings:["precision.", "passion.", "sustainability in mind.", "elegance and comfort.", "unmatched quality."],
    typeSpeed:100,
    backpeed:100,
    backDelay: 1000,
    loop:true

})





