let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let result = document.getElementById("result-el")


function add() {
    let results = num1 + num2
    result.textContent = "Sum: " + results
}

function subtract() {
    let results = num1 - num2
    result.textContent = "Subtract: " + results
}

function divide() {
    let results = num1 / num2
    result.textContent = "Divide: " + results
}

function multiply() {
    let results = num1 * num2
    result.textContent = "Multiply: " + results
}
