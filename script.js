let c1 = document.getElementById("C4")
let d1 = document.getElementById("D4")
let e1 = document.getElementById("E4")
let f1 = document.getElementById("F4")
let g1 = document.getElementById("G4")
let a1 = document.getElementById("A4")
let b1 = document.getElementById("B4")

let c2 = document.getElementById("C5")
let d2 = document.getElementById("D5")
let e2 = document.getElementById("E5")
let f2 = document.getElementById("F5")
let g2 = document.getElementById("G5")
let a2 = document.getElementById("A5")
let b2 = document.getElementById("B5")

let db1 = document.getElementById("Db4")
let fb1 = document.getElementById("Eb4")
let gb1 = document.getElementById("Gb4")
let ab1 = document.getElementById("Ab4")
let bb1 = document.getElementById("Bb4")

let db2 = document.getElementById("Db5")
let fb2 = document.getElementById("Eb5")
let gb2 = document.getElementById("Gb5")
let ab2 = document.getElementById("Ab5")
let bb2 = document.getElementById("Bb5")

let buttons = [c1, d1, e1, f1, g1, a1, b1, c2, d2, e2, f2, g2, a2, b2, db1, fb1, gb1, ab1, bb1, db2, fb2, gb2, ab2, bb2]

let transpose_up = document.getElementById("transpose_up")
let transpose_down = document.getElementById("transpose_down")

let transpose_number = document.getElementById("transpose")
let transpose_key = document.getElementById("key")


let C = {one: new Audio("./piano/C4.mp3"), two: new Audio("./piano/C5.mp3")}
let D = {one: new Audio("./piano/D4.mp3"), two: new Audio("./piano/D5.mp3")}
let E = {one: new Audio("./piano/E4.mp3"), two: new Audio("./piano/E5.mp3")}
let F = {one: new Audio("./piano/F4.mp3"), two: new Audio("./piano/F5.mp3")}
let G = {one: new Audio("./piano/G4.mp3"), two: new Audio("./piano/G5.mp3")}
let A = {one: new Audio("./piano/A4.mp3"), two: new Audio("./piano/A5.mp3")}
let B = {one: new Audio("./piano/B4.mp3"), two: new Audio("./piano/B5.mp3")}
let Db = {one: new Audio("./piano/Db4.mp3"), two: new Audio("./piano/Db5.mp3")}
let Eb = {one: new Audio("./piano/Eb4.mp3"), two: new Audio("./piano/Eb5.mp3")}
let Gb = {one: new Audio("./piano/Gb4.mp3"), two: new Audio("./piano/Gb5.mp3")}
let Ab = {one: new Audio("./piano/Ab4.mp3"), two: new Audio("./piano/Ab5.mp3")}
let Bb = {one: new Audio("./piano/Bb4.mp3"), two: new Audio("./piano/Bb5.mp3")}


// Scales
let C_ = [C.one, D.one, E.one, F.one, G.one, A.one, B.one, C.two]
let Db_ = [Db.one, Eb.one, F.one, Gb.one, Ab.one, Bb.one, C.two, Db.two]
let D_ = [D.one, E.one, Gb.one, G.one, A.one, B.one, Db.two, D.two]
let Eb_ = [Eb.one, F.one, G.one, Ab.one, Bb.one, B.one, D.two, Eb.two]
let E_ = [E.one, Gb.one, Ab.one, Bb.one, B.one, Db.two, Eb.two, E.two]
let F_ = [F.one, G.one, A.one, Bb.one, C.two, D.two, E.two, F.two]
let Gb_ = [Gb.one, Ab.one, Bb.one, B.one, Db.two, Eb.two, F.two, Gb.two]
let G_ = [G.one, A.one, B.one, C.two, D.two, E.two, Gb.two, G.two]
let Ab_ = [Ab.one, Bb.one, C.two, Db.two, Eb.two, F.two, G.two, Ab.two]
let A_ = [A.one, B.one, Db.two, D.two, E.two, Gb.two, Ab.two, A.two]
let Bb_ = [Bb.one, C.two, D.two, Eb.two, F.two, G.two, A.two, Bb.two]
let B_ = [B.one, Db.two, Eb.two, E.two, Gb.two, Ab.two, Bb.two, B.two]


let keys = [{key: C_, name: 'C'}, {key: Db_, name: "C#"}, {key: D_, name: "D"}, {key: Eb_, name: "D#"}, {key: E_, name: "E"}, {key: F_, name: "F"}, {key: Gb_, name: "F#"}, {key: G_, name: "G"}, {key: Ab_, name: "G#"}, {key: A_, name: "A"}, {key: Bb_, name: "A#"}, {key: B_, name: "B"},]

let key_names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]
let transpose = 0;

transpose_key.innerText = key_names[transpose]
transpose_number.innerText = transpose

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let id = e.target.id
        let key, octave

        if (id.length == 2) {
            key = id.substr(0, 1)
            octave = id.substr(-1)
        } else {
            key = id.substr(0, 2)
            octave = id.substr(-1)
        }

        if (octave == "4") {
            octave_num = "one"

        } else {
            octave_num = "two"
        }

        let the_note = eval(key)[octave_num]
        play_note(the_note)

    })
})

document.addEventListener('keypress', (event) => {
    let notes = keys[transpose].key
    let num = Number(event.key)
    let the_note = notes[num - 1]
    if (num) {
        switch (num) {
            case 1:
                play_note(the_note)
                break
            case 2:
                play_note(the_note)
                break
            case 3:
                play_note(the_note)
                break
            case 4:
                play_note(the_note)
                break
            case 5:
                play_note(the_note)
                break
            case 6:
                play_note(the_note)
                break
            case 7:
                play_note(the_note)
                break
            case 8:
                play_note(the_note)
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


function play_note(the_note) {
    let id = the_note.src.substr(-7, 3)
    if (id[0] != "/") {
        btn = document.getElementById(id)
        changeColor(btn, "black")
    } else {
        btn = document.getElementById(id.substr(1))
        changeColor(btn, "white")
    }


    if (!the_note.paused) {
        the_note.pause()
        the_note.currentTime = 0
    }
    the_note.play()
}

