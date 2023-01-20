// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = function () {
    navbarNav.classList.toggle('active');
}

// click diluar navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// const navbarNav = document.querySelector(".navbar-nav");

// document.addEventListener("click", function (e) {
//     if (hamburger.contains(e.target)) {
//         navbarNav.classList.toggle("active");
//     }
// });