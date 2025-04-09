let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")

let c = new Audio("./sounds/c4.mp3")
let d = new Audio("./sounds/d4.mp3")
let e = new Audio("./sounds/e4.mp3")
let f = new Audio("./sounds/f4.mp3")
let g = new Audio("./sounds/g4.mp3")
let a = new Audio("./sounds/a4.mp3")
let b = new Audio("./sounds/b4.mp3")

one.addEventListener('click', (e) => {
    c.play()
})

two.addEventListener('click', (e) => {
    d.play()
})
three.addEventListener('click', (es) => {
    e.play()
})
four.addEventListener('click', (e) => {
    f.play()
})
five.addEventListener('click', (e) => {
    g.play()
})
six.addEventListener('click', (e) => {
    a.play()
})
seven.addEventListener('click', (e) => {
    b.play()
})
