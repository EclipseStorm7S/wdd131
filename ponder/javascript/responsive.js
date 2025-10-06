
const menuButton = document.getElementById("menu-btn");
const navBar = document.querySelector("nav");

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    navBar.classList.toggle('hide');
    menuButton.classList.toggle('change');
}