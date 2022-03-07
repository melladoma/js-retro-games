const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
    {
        name: 'fries',
        img: './images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png',
    },
    {
        name: 'pizza',
        img: './images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random()); //sorting the array randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const messageDisplay = document.querySelector('#message')
const resetButton = document.querySelector('#reset-btn')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) { // could have been with .forEach
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard) //callback of FlipCard
        gridDisplay.appendChild(card)
    }
}


createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cardsChosenIds[0], cardsChosenIds[1])
    console.log(optionOneId, optionTwoId)

    if (optionOneId === optionTwoId) {
        messageDisplay.textContent = ('You clicked the same card!')
        setTimeout(() => messageDisplay.textContent = '', 1000)
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')

    } else if (cardsChosen[0] == cardsChosen[1]) {
        messageDisplay.textContent = ('You found a match!')
        setTimeout(() => messageDisplay.textContent = '', 1000)
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard) //remove the ability to clik on matched card
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        messageDisplay.textContent = ('Sorry, try again!')
        setTimeout(() => messageDisplay.textContent = '', 1000)
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []


    if (cardsWon.length == (cardArray.length / 2)) {
        resultDisplay.textContent = "Congratulations, you found them all!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id') //why does it know on click? because call back???
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}

resetButton.addEventListener('click', () => {
    let element = gridDisplay
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    cardArray.sort(() => 0.5 - Math.random());
    console.log(gridDisplay)
    createBoard();
})