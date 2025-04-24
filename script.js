let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")

let transpose_up = document.getElementById("transpose_up")
let transpose_down = document.getElementById("transpose_down")

let transpose_number = document.getElementById("transpose")
let transpose_key = document.getElementById("key")


let C = {one: new Audio("./piano/C3.mp3"), two: new Audio("./piano/C4.mp3"), three: new Audio("./piano/C5.mp3")}
let D = {one: new Audio("./piano/D3.mp3"), two: new Audio("./piano/D4.mp3"), three: new Audio("./piano/D5.mp3")}
let E = {one: new Audio("./piano/E3.mp3"), two: new Audio("./piano/E4.mp3"), three: new Audio("./piano/E5.mp3")}
let F = {one: new Audio("./piano/F3.mp3"), two: new Audio("./piano/F4.mp3"), three: new Audio("./piano/F5.mp3")}
let G = {one: new Audio("./piano/G3.mp3"), two: new Audio("./piano/G4.mp3"), three: new Audio("./piano/G5.mp3")}
let A = {one: new Audio("./piano/A3.mp3"), two: new Audio("./piano/A4.mp3"), three: new Audio("./piano/A5.mp3")}
let B = {one: new Audio("./piano/B3.mp3"), two: new Audio("./piano/B4.mp3"), three: new Audio("./piano/B5.mp3")}
let Db = {one: new Audio("./piano/Db3.mp3"), two: new Audio("./piano/Db4.mp3"), three: new Audio("./piano/Db5.mp3")}
let Eb = {one: new Audio("./piano/Eb3.mp3"), two: new Audio("./piano/Eb4.mp3"), three: new Audio("./piano/Eb5.mp3")}
let Gb = {one: new Audio("./piano/Gb3.mp3"), two: new Audio("./piano/Gb4.mp3"), three: new Audio("./piano/Gb5.mp3")}
let Ab = {one: new Audio("./piano/Ab3.mp3"), two: new Audio("./piano/Ab4.mp3"), three: new Audio("./piano/Ab5.mp3")}
let Bb = {one: new Audio("./piano/Bb3.mp3"), two: new Audio("./piano/Bb4.mp3"), three: new Audio("./piano/Bb5.mp3")}

// Scales
let C_ = [C.two, D.two, E.two, F.two, G.two, A.two, B.two, C.three]
let Db_ = [Db.two, Eb.two, F.two, Gb.two, Ab.two, Bb.two, C.three, Db.three]
let D_ = [D.two, E.two, Gb.two, G.two, A.two, B.two, Db.three, D.three]
let Eb_ = [Eb.two, F.two, G.two, Ab.two, Bb.two, B.two, D.three, Eb.three]
let E_ = [E.two, Gb.two, Ab.two, Bb.two, B.two, Db.three, Eb.three, E.three]
let F_ = [F.two, G.two, A.two, Bb.two, C.three, D.three, E.three, F.three]
let Gb_ = [Gb.two, Ab.two, Bb.two, B.two, Db.three, Eb.three, F.three, Gb.three]
let G_ = [G.two, A.two, B.two, C.three, D.three, E.three, Gb.three, G.three]
let Ab_ = [Ab.two, Bb.two, C.three, Db.three, Eb.three, F.three, G.three, Ab.three]
let A_ = [A.two, B.two, Db.three, D.three, E.three, Gb.three, Ab.three, A.three]
let Bb_ = [Bb.two, C.three, D.three, Eb.three, F.three, G.three, A.three, Bb.three]
let B_ = [B.two, Db.three, Eb.three, E.three, Gb.three, Ab.three, Bb.three, B.three]


let keys = [C_, Db_, D_, Eb_, E_, F_, Gb_, G_, Ab_, A_, Bb_, B_]

let transpose = 0;

document.addEventListener('keypress', (event) => {
    let notes = keys[transpose]
    let num = Number(event.key)
    if (num) {
        switch (num) {
            case 1:
                changeColor(one)
                notes[num - 1].play()
                break
            case 2:
                changeColor(two)
                notes[num - 1].play()
                break
            case 3:
                changeColor(three)
                notes[num - 1].play()
                break
            case 4:
                changeColor(four)
                notes[num - 1].play()
                break
            case 5:
                changeColor(five)
                notes[num - 1].play()
                break
            case 6:
                changeColor(six)
                notes[num - 1].play()
                break
            case 7:
                changeColor(seven)
                notes[num - 1].play()
                break
            case 8:
                changeColor(eight)
                notes[num - 1].play()
                break
            default:
        }
    }
})


transpose_number.innerText = transpose
// transpose_key.innerText = keys[transpose]

transpose_up.addEventListener('click', (e) => {
    if (transpose < keys.length - 1) {
        transpose += 1
    } else {
        transpose = 0
    }
    transpose_number.innerText = transpose
})

transpose_down.addEventListener('click', (e) => {
    if (transpose > 0) {
        transpose -= 1
    } else {
        transpose = keys.length - 1
    }

    transpose_number.innerText = transpose
})

function changeColor(btn) {
    btn.style.backgroundColor = "gray"
    setTimeout(() =>
        btn.style.backgroundColor = "black", 200)
}

