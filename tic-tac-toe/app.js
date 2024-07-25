let i1 = document.getElementById("bt1");
let i2 = document.getElementById("bt2");
let i3 = document.getElementById("bt3");
let i4 = document.getElementById("bt4");
let i5 = document.getElementById("bt5");
let i6 = document.getElementById("bt6");
let i7 = document.getElementById("bt7");
let i8 = document.getElementById("bt8");
let i9 = document.getElementById("bt9");

let count = 0;
let t = document.getElementById("turn");
const tapSound = new Audio("tap.mp3")
const winSound = new Audio("winning.mp3")
const drawSound = new Audio("gameDrawn.mp3")



let progress = 1;
let p1 = 1;
let p2 = 1;
let p3 = 1;
let p4 = 1;
let p5 = 1;
let p6 = 1;
let p7 = 1;
let p8 = 1;
let p9 = 1;

let turn = "X"

const changeTurn = () => {
    if (turn === 'X')
        return '0';
    else
        return 'X'
}

const winGame = () => {
    count++;
    if (i1.textContent === i2.textContent && i2.textContent === i3.textContent && i1.textContent !== "" || i4.textContent === i5.textContent && i5.textContent === i6.textContent && i4.textContent !== "" || i7.textContent === i8.textContent && i8.textContent === i9.textContent && i7.textContent !== "" || i1.textContent === i4.textContent && i4.textContent === i7.textContent && i1.textContent !== "" || i2.textContent === i5.textContent && i5.textContent === i8.textContent && i2.textContent !== "" || i3.textContent === i6.textContent && i6.textContent === i9.textContent && i3.textContent !== "" || i1.textContent === i5.textContent && i5.textContent === i9.textContent && i1.textContent !== "" || i3.textContent === i5.textContent && i5.textContent === i7.textContent && i3.textContent !== "") {
        progress = 0;
        document.querySelector(".gameInfo").textContent = turn + " Wins"
        t.style.opacity = "0"
        winSound.play();
        document.getElementById("victory").style.width = "200px"
        document.getElementById("btn").style.opacity = "1"
    } else {
        if (count == 9) {
            progress = 0;
            document.querySelector(".gameInfo").textContent = "MATCH DRAWN"
            t.style.opacity = "0"
            drawSound.play();
            // document.getElementById("victory").style.width="200px"
            document.getElementById("btn").style.opacity = "1"
        }
    }
}

const reset = () => {
    i1.textContent = ""
    i2.textContent = ""
    i3.textContent = ""
    i4.textContent = ""
    i5.textContent = ""
    i6.textContent = ""
    i7.textContent = ""
    i8.textContent = ""
    i9.textContent = ""
    turn = 'X'
    document.querySelector(".gameInfo").textContent = "TURN:"
    t.style.opacity = "1"
    t.textContent = turn;
    document.getElementById("victory").style.width = "0px"
    document.getElementById("btn").style.opacity = "0"
    progress = 1
    count = 0
    p1 = 1;
    p2 = 1;
    p3 = 1;
    p4 = 1;
    p5 = 1;
    p6 = 1;
    p7 = 1;
    p8 = 1;
    p9 = 1;
}

const mainGame1 = () => {
    if (progress && p1) {

        tapSound.play();
        i1.textContent = turn;
        p1 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame2 = () => {
    if (progress && p2) {

        tapSound.play();
        i2.textContent = turn;
        p2 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame3 = () => {
    if (progress && p3) {

        tapSound.play();
        i3.textContent = turn;
        p3 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame4 = () => {
    if (progress && p4) {

        tapSound.play();
        i4.textContent = turn;
        p4 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame5 = () => {
    if (progress && p5) {

        tapSound.play();
        i5.textContent = turn;
        p5 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame6 = () => {
    if (progress && p6) {

        tapSound.play();
        i6.textContent = turn;
        p6 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame7 = () => {
    if (progress && p7) {

        tapSound.play();
        i7.textContent = turn;
        p7 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame8 = () => {
    if (progress && p8) {

        tapSound.play();
        i8.textContent = turn;
        p8 = 0;
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
const mainGame9 = () => {
    if (progress && p9) {

        tapSound.play();
        i9.textContent = turn;
        p9 = 0
        winGame();
        turn = changeTurn();
        t.textContent = turn;
    }
}
