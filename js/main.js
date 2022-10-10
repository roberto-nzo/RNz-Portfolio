// Select DOM (Document Object Model) Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuLink = document.querySelector('.menu-link');
const navLinks = document.querySelectorAll('.nav-link');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuLink.classList.add('show');

        navLinks.forEach(link => link.classList.add('show'));

        showMenu = true;
    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuLink.classList.remove('show');

        navLinks.forEach(link => link.classList.remove('show'));

        showMenu = false;
    }
}