const displayHome = () => {
    const bodyContent = document.querySelector('.body-content')
    const homeDisplay = document.createElement('div')
    homeDisplay.id = 'home-display'

    const img = document.createElement('img')
    img.src = 'img/pexels-leonardo-luz-14391216.jpg'
    img.alt = 'Wood pizza oven with fully topped pizza cooking'
    img.classList.add('home-graphic')

    const restDescription = document.createElement('p')
    restDescription.innerText = "At Woodland Oven & Bistro, we blend the rustic warmth of an inviting hearth with the sophistication of artisanal craftsmanship. Our heart and soul lie in the crackling wood-fired oven that brings our traditional pizzas to life, infusing them with an unmistakable smoky aroma and flavor. Rooted in the authenticity of local and seasonal ingredients, each pie is a celebration of both tradition and innovation. Our open kitchen design allows you to witness the dance of our skilled pizzaiolos, their craftsmanship capturing the essence of a true culinary art. Join us to savor the harmony of rich flavors, handpicked wines, and the cozy ambiance of a bistro nestled in the heart of nature. Woodland Oven & Bistro is more than a dining experience; it's a journey where rustic charm meets refined taste."
    restDescription.id = 'rest-description'

    bodyContent.appendChild(homeDisplay)
    homeDisplay.appendChild(img)
    homeDisplay.appendChild(restDescription)
}

export { displayHome }