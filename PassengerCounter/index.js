//intialize count to 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

//increment count when click button
function increment() {
    count++
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
