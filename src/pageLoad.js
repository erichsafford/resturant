const pageLoad = () => {
    const mainContentContainer = document.querySelector('#content')

    const header = document.createElement('header')
    header.classList.add('main-title')
    header.innerText = "Woodland Oven & Bistro"

    const navbar = document.createElement('div')
    navbar.classList.add('nav')

    const home = document.createElement('button')
    home.innerText = 'HOME'

    const menu = document.createElement('button')
    menu.innerText = 'MENU'

    const contact = document.createElement('button')
    contact.innerText = 'CONTACT'

    const aboutUsDiv = document.createElement('div')
    aboutUsDiv.classList.add('about-us')

    const img = document.createElement('img')
    img.src = 'img/pexels-leonardo-luz-14391216.jpg'
    img.alt = 'Wood pizza oven with fully topped pizza cooking'
    img.classList.add('header-graphic')

    const restDescription = document.createElement('p')
    restDescription.innerText = "At Woodland Oven & Bistro, we blend the rustic warmth of an inviting hearth with the sophistication of artisanal craftsmanship. Our heart and soul lie in the crackling wood-fired oven that brings our traditional pizzas to life, infusing them with an unmistakable smoky aroma and flavor. Rooted in the authenticity of local and seasonal ingredients, each pie is a celebration of both tradition and innovation. Our open kitchen design allows you to witness the dance of our skilled pizzaiolos, their craftsmanship capturing the essence of a true culinary art. Join us to savor the harmony of rich flavors, handpicked wines, and the cozy ambiance of a bistro nestled in the heart of nature. Woodland Oven & Bistro is more than a dining experience; it's a journey where rustic charm meets refined taste."

    mainContentContainer.appendChild(header)

    mainContentContainer.appendChild(navbar)
    navbar.appendChild(home)
    navbar.appendChild(menu)
    navbar.appendChild(contact)

    mainContentContainer.appendChild(aboutUsDiv)
    aboutUsDiv.appendChild(img)
    aboutUsDiv.appendChild(restDescription)
}

export { pageLoad }