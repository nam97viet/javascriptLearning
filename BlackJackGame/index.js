let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 10) + 1
    return randomCard
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20) {
        message = "Do you want to draw a card?"
    }
    else if (sum === 21) {
        message = "You've got a Blackjack"
    }
    else {
        message = "You've out of the game!"
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}