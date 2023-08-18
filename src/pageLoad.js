import { displayHome } from "./home"
import { clearScreen } from "./clear"
import { displayMenu } from "./menu"


const pageLoad = () => {
    const mainContentContainer = document.querySelector('#content')

    const header = document.createElement('header')
    header.classList.add('main-title')
    header.innerText = "Woodland Oven & Bistro"

    const navbar = document.createElement('div')
    navbar.classList.add('nav')

    const home = document.createElement('button')
    home.innerText = 'HOME'
    home.addEventListener('click', () => {
        clearScreen();
        displayHome();
    })

    const menu = document.createElement('button')
    menu.innerText = 'MENU'
    menu.addEventListener('click', () => {
        clearScreen();
        displayMenu();
    })

    const contact = document.createElement('button')
    contact.innerText = 'CONTACT'
    contact.addEventListener('click', () => {
        clearScreen();
        //displayContact();
    })

    const bodyContent = document.createElement('div')
    bodyContent.classList.add('body-content')

    mainContentContainer.appendChild(header)

    mainContentContainer.appendChild(navbar)
    navbar.appendChild(home)
    navbar.appendChild(menu)
    navbar.appendChild(contact)

    mainContentContainer.appendChild(bodyContent)
}


export { pageLoad }