const socket = io();

let choice = null;

function startGame() {

    let difficulty = document.getElementById("difficulty").value;

    socket.emit("startGame", difficulty);

}

function choose(cup) {

    choice = cup;

}

function submitNote() {

    let note = document.getElementById("note").value;

    socket.emit("submitNote", {
        choice,
        note
    });

}

function finishEarly() {

    socket.emit("finishEarly");

}

function sendAgree() {

    let yes = document.getElementById("agreeYes").checked;

    socket.emit("agree", yes);

}

socket.on("roundStart", (data) => {

    document.getElementById("round").innerText = "Round " + data.round;

});

socket.on("timer", (time) => {

    document.getElementById("timer").innerText = "Time: " + time;

});

socket.on("reveal", (data) => {

    document.getElementById("reveal").innerText =
        "Poison in cup: " + data.poisonCup;

});

socket.on("scores", (scores) => {

    document.getElementById("scores").innerText =
        "P1: " + scores.p1 + " | P2: " + scores.p2;

});
