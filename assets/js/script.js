// Card Array

const cardArray = [
    {
        name: 'Cloud',
        img: '/assets/images/cloudflip.png',
    },
    {
        name: 'Barett',
        img: '/assets/images/barettflip.png',
    },
    {
        name: 'Chocobo',
        img: '/assets/images/chocoboflip.png',
    },
    {
        name: 'Seph',
        img: '/assets/images/Sephflip.png',
    },
    {
        name: 'Red XIII',
        img: '/assets/images/red13.png',
    },
    {
        name: 'Tifa',
        img: '/assets/images/tifaflip.png',
    },
    {
        name: 'Vincent',
        img: '/assets/images/vincentflip.png',
    },
    {
        name: 'Yuffie',
        img: '/assets/images/yuffieflip.png',
    },
    {
        name: 'Aerith',
        img: '/assets/images/aerithflip.png',
    },
    {
        name: 'Cloud',
        img: '/assets/images/cloudflip.png',
    },
    {
        name: 'Barett',
        img: '/assets/images/barettflip.png',
    },
    {
        name: 'Chocobo',
        img: '/assets/images/chocoboflip.png',
    },
    {
        name: 'Seph',
        img: '/assets/images/Sephflip.png',
    },
    {
        name: 'Red XIII',
        img: '/assets/images/red13.png',
    },
    {
        name: 'Tifa',
        img: '/assets/images/tifaflip.png',
    },
    {
        name: 'Vincent',
        img: '/assets/images/vincentflip.png',
    },
    {
        name: 'Yuffie',
        img: '/assets/images/yuffieflip.png',
    },
    {
        name: 'Aerith',
        img: '/assets/images/aerithflip.png',
    },

]

cardArray.sort(() => 0.5 - Math.random())

//--- Above is a shortcut to sort arrays randomly using .sort ---//

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '/assets/images/backCardsmall.png');
        card.setAttribute('data-id', i);
        cardChosen.push()
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        // console.log(card, i)
    }
}

createBoard();


//--- runs a function to console log check for match ---//

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("check for match")

    if (optionOneId == optionTwoId){
        alert('You clicked the same card!')
    }
    if (cardChosen[0] == cardChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', "assets/images/blankflip.png")
    cards[optionTwoId].setAttribute('src', "assets/images/blankflip.png")
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen)
} else {
    cards[optionOneId].setAttribute('src', "assets/images/backCardsmall.png")
    cards[optionTwoId].setAttribute('src', "assets/images/backCardsmall.png")
    alert('Sorry try again!')
}

resultDisplay.textContent = cardsWon.length;
cardChosen = []
cardsChosenIds = []

if (cardsWon.length == (cardArray.length/2)){
    resultDisplay.textContent = "Congradulations you found them all!"
}

}

//--- function for grabbing card data and attaching image based on data ---//
function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length  === 2){
        setTimeout(checkMatch, 500)

    }
}












