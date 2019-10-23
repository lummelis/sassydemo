console.log('hello');
const sitenav = document.querySelector('.site-header .site-nav');
const menubutton = document.querySelector('.menu-button');

menubutton.onclick = function () {
    console.log('clicked');
    sitenav.classList.toggle('active');
}