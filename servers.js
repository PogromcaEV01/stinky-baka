const express = require("express");

        if (seconds <= 0) {

            clearInterval(interval);
            calculatePoints();

        }

    }, 1000);

}

function calculatePoints() {

    let ids = Object.keys(notes);

    if (ids.length === 2) {

        let n1 = notes[ids[0]];
        let n2 = notes[ids[1]];

        if (n1.choice !== poisonCup) scores.p1++;
        if (n2.choice !== poisonCup) scores.p2++;

        if (agreeCount === 2) {
            scores.p1++;
            scores.p2++;
        }

    }

    io.emit("scores", scores);

    notes = {};
    agreeCount = 0;

    round++;

    if (round > maxRounds) {

        io.emit("gameOver", scores);

        round = 1;
        scores = { p1: 0, p2: 0 };

        return;

    }

    poisonCup = Math.random() < 0.5 ? "A" : "B";

    io.emit("nextRound", round);

}

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
