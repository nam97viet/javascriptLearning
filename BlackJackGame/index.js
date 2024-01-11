let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Player",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": 💵" + player.chips



function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10){
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum :" + sum
    if (sum <= 20) {
        message = "Do you want to draw a card? 🙄"
    }
    else if (sum === 21) {
        message = "You've got a Blackjack 😘"
        hasBlackJack = true
        updateChips()
    }
    else {
        message = "You've out of the game! 💀 Click RESET GAME TO START AGAIN! 🤗"
        isAlive = false
        updateChips()
    }
    messageEl.textContent = message
}

function updateChips() {
    if (hasBlackJack) {
        player.chips += 10
    }
    else {
        player.chips -= 10
    }
    playerEl.textContent = player.name + ": 💵" + player.chips;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }   
}

function resetGame() {
    cards = [];
    sum = 0;
    hasBlackJack = false;
    isAlive = false;
    message = "";
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.textContent = message;
}