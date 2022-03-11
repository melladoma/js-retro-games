const gameList = {
    1: {
        "name": "Rock Paper Scissors",
        "image": "",
        "link": "./rock-paper-scissors/index.html",
        "id": 1,
    },
    2: {
        "name": "Memory Game",
        "image": "",
        "link": "./memory-game/index.html",
        "id": 2,
    },
    3: {
        "name": "Whac-a-mole",
        "image": "",
        "link": "./whac-a-mole/index.html",
        "id": 3,
    },
    4: {
        "name": "more to come soon!",
        "image": "",
        "link": "",
        "id": 4,
    },
}



let screenDisplayText = document.getElementById('display-text');

function displayGame(id) {
    screenDisplayText.textContent = gameList[id]["name"].toUpperCase();
    screenDisplayText.setAttribute('href', gameList[id]["link"]);
}

let gameId = 0;//initilize the game ID (even if not displayed)

let length = Object.keys(gameList).length;

function goLeft() {
    let i = gameId;
    if (gameId === 0) {
        gameId = length;
    } else if (gameId === 1) {
        gameId = length;
    } else {
        gameId = i - 1;
    }
}

function goRight() {
    let i = gameId;
    if (gameId === length) {
        gameId = 1;
    } else if (gameId === 0) {
        gameId = 1;
    } else {
        gameId = i + 1;
    }
}

let buttonLeft = document.getElementById('go-left');
let buttonRight = document.getElementById('go-right');

buttonLeft.addEventListener("click", () => {
    goLeft()
    displayGame(gameId);
})

buttonRight.addEventListener("click", () => {
    goRight()
    displayGame(gameId);
})

//quid disable buttons when gameId=length?