const menuBtn = document.querySelector('.menu-btn')
const hamburguer = document.querySelector('.menu-btn__burguer')
const nav = document.querySelector('.navbar')
const menuNavbar = document.querySelector('.menu-navbar')
const navItems = document.querySelectorAll('.menu-navbar__item')
const navLinks = document.querySelectorAll('.menu-navbar__link')


let showMenu = false
menuBtn.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open')
        nav.classList.add('open')
        menuNavbar.classList.add('open')
        navItems.forEach( item => item.classList.add('open'))
        navLinks.forEach( item => item.classList.add('open'))

        showMenu = true
        return
    }
    hamburguer.classList.remove('open')
    nav.classList.remove('open')
    menuNavbar.classList.remove('open')
    navItems.forEach( item => item.classList.remove('open'))
    navLinks.forEach( item => item.classList.add('open'))


    showMenu = false
}