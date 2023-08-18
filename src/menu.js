const displayMenu= () => {
    const bodyContent = document.querySelector('.body-content')

    const menuDisplay = document.createElement('div')
    menuDisplay.id = 'menu-display'
    bodyContent.appendChild(menuDisplay)

    for (let i = 1; i <= 6; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = `card-${i}`
        const pizzaTitle = document.createElement('h3')
        pizzaTitle.classList.add('pizza-title')
        pizzaTitle.id = `title-${i}`
        const pizzaDescription = document.createElement('p')
        pizzaDescription.classList.add('pizza-description')
        pizzaDescription.id = `description-${i}`
        card.appendChild(pizzaTitle)
        card.appendChild(pizzaDescription)
        menuDisplay.appendChild(card)
    }

    const margheritaTitle = document.getElementById('title-1')
    const margheritaDesc = document.getElementById('description-1')
    margheritaTitle.innerText = "Classic Margherita"
    margheritaDesc.innerText = "San Marzano tomato sauce, fresh mozzarella, garden-fresh basil, drizzle of extra-virgin olive oil."

    const mediterraneanTitle = document.getElementById('title-2')
    const mediterraneanDesc = document.getElementById('description-2')
    mediterraneanTitle.innerText = "Mediterranean Delight"
    mediterraneanDesc.innerText = "Roasted garlic spread, feta cheese, kalamata olives, sun-dried tomatoes, artichoke hearts, baby spinach."

    const farmhouseTitle = document.getElementById('title-3')
    const farmhouseDesc = document.getElementById('description-3')
    farmhouseTitle.innerText = "Rustic Farmhouse"
    farmhouseDesc.innerText = "House-made sausage, caramelized onions, roasted red bell peppers, smoked provolone, fresh oregano."

    const forestTitle = document.getElementById('title-4')
    const forestDesc = document.getElementById('description-4')
    forestTitle.innerText = "Forest Feast"
    forestDesc.innerText = "Wild mushrooms medley, truffle-infused ricotta, baby arugula, shaved Parmesan, white truffle oil."

    const harvestTitle = document.getElementById('title-5')
    const harvestDesc = document.getElementById('description-5')
    harvestTitle.innerText = "Harvest Harvest"
    harvestDesc.innerText = "Butternut squash purée, goat cheese, candied pecans, fresh sage, arugula, balsamic reduction."

    const sicillianTitle = document.getElementById('title-6')
    const sicillianDesc = document.getElementById('description-6')
    sicillianTitle.innerText = "Sicilian Sunrise"
    sicillianDesc.innerText = "Prosciutto di Parma, roasted figs, gorgonzola crumbles, honey drizzle, arugula."
}

export { displayMenu }