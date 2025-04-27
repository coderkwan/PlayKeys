let c1 = document.getElementById("C_one")
let d1 = document.getElementById("D_one")
let e1 = document.getElementById("E_one")
let f1 = document.getElementById("F_one")
let g1 = document.getElementById("G_one")
let a1 = document.getElementById("A_one")
let b1 = document.getElementById("B_one")

let c2 = document.getElementById("C_two")
let d2 = document.getElementById("D_two")
let e2 = document.getElementById("E_two")
let f2 = document.getElementById("F_two")
let g2 = document.getElementById("G_two")
let a2 = document.getElementById("A_two")
let b2 = document.getElementById("B_two")

let db1 = document.getElementById("Db_one")
let fb1 = document.getElementById("Eb_one")
let gb1 = document.getElementById("Gb_one")
let ab1 = document.getElementById("Ab_one")
let bb1 = document.getElementById("Bb_one")

let db2 = document.getElementById("Db_two")
let fb2 = document.getElementById("Eb_two")
let gb2 = document.getElementById("Gb_two")
let ab2 = document.getElementById("Ab_two")
let bb2 = document.getElementById("Bb_two")

let buttons = [c1, d1, e1, f1, g1, a1, b1, c2, d2, e2, f2, g2, a2, b2, db1, fb1, gb1, ab1, bb1, db2, fb2, gb2, ab2, bb2]

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


let keys = [{key: C_, name: 'C'}, {key: Db_, name: "C#"}, {key: D_, name: "D"}, {key: Eb_, name: "D#"}, {key: E_, name: "E"}, {key: F_, name: "F"}, {key: Gb_, name: "F#"}, {key: G_, name: "G"}, {key: Ab_, name: "G#"}, {key: A_, name: "A"}, {key: Bb_, name: "A#"}, {key: B_, name: "B"},]

let key_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]
let transpose = 0;

transpose_key.innerText = key_names[transpose]
transpose_number.innerText = transpose


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let id = e.target.id
        let key, octave = ""

        if (id.length == 5) {
            key = id.substr(0, 1)
            octave = id.substr(2)
            changeColor(btn, "white")
        } else {
            key = id.substr(0, 2)
            octave = id.substr(3)
            changeColor(btn, "black")
        }

        eval(key)[octave].play()

    })
})

document.addEventListener('keypress', (event) => {
    let notes = keys[transpose].key
    let num = Number(event.key)
    if (num) {
        switch (num) {
            case 1:
                notes[num - 1].play()
                break
            case 2:
                notes[num - 1].play()
                break
            case 3:
                notes[num - 1].play()
                break
            case 4:
                notes[num - 1].play()
                break
            case 5:
                notes[num - 1].play()
                break
            case 6:
                notes[num - 1].play()
                break
            case 7:
                notes[num - 1].play()
                break
            case 8:
                notes[num - 1].play()
                break
            default:
        }
    } else if (event.key == "[") {
        if (transpose > 0) {
            transpose -= 1
        } else {
            transpose = keys.length - 1
        }

        transpose_number.innerText = transpose
        transpose_key.innerText = key_names[transpose]
    } else if (event.key == "]") {
        if (transpose < keys.length - 1) {
            transpose += 1
        } else {
            transpose = 0
        }
        transpose_number.innerText = transpose
        transpose_key.innerText = key_names[transpose]
    }
})



transpose_up.addEventListener('click', (e) => {
    if (transpose < keys.length - 1) {
        transpose += 1
    } else {
        transpose = 0
    }
    transpose_number.innerText = transpose
    transpose_key.innerText = key_names[transpose]
})

transpose_down.addEventListener('click', (e) => {
    if (transpose > 0) {
        transpose -= 1
    } else {
        transpose = keys.length - 1
    }

    transpose_number.innerText = transpose
    transpose_key.innerText = key_names[transpose]
})

function changeColor(btn, to_color) {
    btn.style.backgroundColor = "gray"
    setTimeout(() =>
        btn.style.backgroundColor = to_color, 200)
}

