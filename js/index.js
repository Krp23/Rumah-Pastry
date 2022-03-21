// Code for navbar responsive
const navIcon = document.getElementById('nav-icon');
const navMenu = document.getElementById('nav-menu');
navIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
}); 