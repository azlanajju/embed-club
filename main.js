let sideNav = document.getElementById("sideNav");
let menuButton = document.getElementById("menuBtn");
let menuClose = document.getElementById("closeBtn");

function navToggle() {
    sideNav.classList.add('openSideNav');
    menuButton.style.display="none";

}

function closeNav() {
    sideNav.classList.remove('openSideNav');
    menuButton.style.display="block";

}

menuButton.addEventListener('click', navToggle);
menuClose.addEventListener('click', closeNav);
