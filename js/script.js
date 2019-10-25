// mobile nav
console.log('hello');
const sitenav = document.querySelector('.site-header .site-nav');
const menubutton = document.querySelector('.menu-button');

menubutton.onclick = function () {
    console.log('clicked');
    sitenav.classList.toggle('active');
};

// Remove active clicked when user click on overlay links
const sitenavlinks = document.querySelectorAll(".site-header .site-nav a");
for (var i = 0, len = sitenavlinks.length; i < len; i++) {
    sitenavlinks[i].onclick = function () {
        sitenav.classList.remove('active');
    };
};