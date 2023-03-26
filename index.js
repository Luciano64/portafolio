const menu = document.getElementById("hamburger");

const navbar = document.getElementById("navbar");

menu.addEventListener('click', (e) => {
    navbar.classList.toggle("open");
})