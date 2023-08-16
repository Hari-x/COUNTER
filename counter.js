let counter = document.getElementById("output")
let output = 0

function increment() {
    output++
    counter.innerText = output
}

function decrement() {
    output--
    counter.innerText = output
}