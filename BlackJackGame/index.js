let firstCard = 10
let secondCard = 10

let sum = firstCard + secondCard

let isAlive = true
let message = ""

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a card? 🤗"
        console.log(message)
    }
    else if (sum === 21) {
        message = "Congrat!!! You got a black jack 😘"
        console.log(message)
    }
    else {
        message = "You lost!!! 😓"
        console.log(message)
        isAlive = false
    }
}