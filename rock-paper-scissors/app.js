const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.button')
const userWinsDisplay = document.getElementById('user-wins')
const computerWinsDisplay = document.getElementById('computer-wins')
const resetBtn = document.getElementById('reset-btn')
const computerChoiceIcon = document.getElementById('computer-icon')
const userChoiceIcon = document.getElementById('user-icon')

let userChoice
let computerChoice
let result
let userWins = 0;
let computerWins = 0;

computerWinsDisplay.innerHTML = computerWins;
userWinsDisplay.innerHTML = userWins;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    initclass()
    initDisplay()
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    animBump()
    setTimeout(myFunction, 2410)
}))

resetBtn.addEventListener('click', () => {
    userWins = 0
    computerWins = 0
    computerWinsDisplay.innerHTML = computerWins
    userWinsDisplay.innerHTML = userWins
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 //displaying only 1,2,3 

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
        resultDisplay.style.border = "1px solid rgb(128,128,128)";
        resultDisplay.style.backgroundColor = "rgba(128, 128, 128,0.5)";
        resultDisplay.style.color = "white";
        resultDisplay.style.borderRadius = "4px";

    }
    if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock') || (computerChoice === 'paper' && userChoice === 'scissors')) {
        result = "You win!"
        // resultDisplay.style.color = "#00CED1";
        resultDisplay.style.border = "1px solid #00CED1";
        resultDisplay.style.backgroundColor = "rgba(0, 206, 209,0.5)";
        resultDisplay.style.color = "white";
        resultDisplay.style.borderRadius = "4px";
        wintransform(userChoiceIcon, computerChoiceIcon);

    }
    if ((computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper') || (computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock')) {
        result = "You lose!"
        resultDisplay.style.border = "1px solid rgb(255,165,0)";
        resultDisplay.style.backgroundColor = "rgba(255, 165, 0,0.5)";
        resultDisplay.style.color = "white";
        resultDisplay.style.borderRadius = "4px";
        wintransform(computerChoiceIcon, userChoiceIcon);
    }
    resultDisplay.innerHTML = result
}

function counter() {
    if (result == "You lose!") {
        computerWins += 1
    }
    if (result == "You win!") {
        userWins += 1
    }
    computerWinsDisplay.innerHTML = computerWins
    userWinsDisplay.innerHTML = userWins
}

function displayIcons() {
    if (computerChoice === 'scissors') {
        computerChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/hand-scissors--v2.png\"/>"
    }
    if (computerChoice === 'rock') {
        computerChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/clenched-fist.png\"/>"
    }
    if (computerChoice === 'paper') {
        computerChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/hand.png\"/>"
    }

    if (userChoice === 'scissors') {
        userChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/hand-scissors--v2.png\"/>"
    }
    if (userChoice === 'rock') {
        userChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/clenched-fist.png\"/>"
    }
    if (userChoice === 'paper') {
        userChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/hand.png\"/>"
    }
}

function wintransform(iconwin, iconlose) {
    console.log(iconwin.classList)
    iconwin.classList.add("spinner");
    iconlose.classList.add("loser");

    console.log(iconwin.classList)

    // iconwin.addEventListener("animationend", (e) => {
    //     //initclass();
    //     console.log(iconwin.classList)
    // });

    // iconlose.addEventListener("animationend", (e) => {
    //     //initclass();
    // });
}


function initclass() {
    if (userChoiceIcon.classList.contains("spinner")) {
        userChoiceIcon.classList.remove('spinner');
    }
    if (userChoiceIcon.classList.contains("loser")) {
        userChoiceIcon.classList.remove('loser');
    }
    if (computerChoiceIcon.classList.contains("spinner")) {
        computerChoiceIcon.classList.remove('spinner');
    }
    if (computerChoiceIcon.classList.contains("loser")) {
        computerChoiceIcon.classList.remove('loser');
    }
}

function animBump() {

    userChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/angry-fist.png\"/>"
    computerChoiceIcon.innerHTML = "<img src=\"https://img.icons8.com/ios/50/000000/angry-fist.png\"/>"

    computerChoiceIcon.classList.add("bump");
    userChoiceIcon.classList.add("bump");

    // userChoiceIcon.addEventListener("animationend", (e) => {
    //     initclassBump()
    //     bumpHasFinished = true;
    //     userChoiceIcon.removeEventListener("animationend", () => { })
    // });


    // computerChoiceIcon.addEventListener("animationend", (e) => {
    //     initclassBump();
    //     bumpHasFinished = true;
    //     generateComputerChoice()
    //     displayIcons()
    //     getResult()
    //     counter();
    //     // console.log(computerChoiceIcon.classList.contains("spinner"));
    //     computerChoiceIcon.removeEventListener("animationend", () => { })
    // });

}

function myFunction() {
    initclassBump();
    generateComputerChoice()
    displayIcons()
    getResult()
    counter();
}

function initclassBump() {
    if (userChoiceIcon.classList.contains("bump")) {
        userChoiceIcon.classList.remove('bump');
    }
    if (computerChoiceIcon.classList.contains("bump")) {
        computerChoiceIcon.classList.remove('bump');
    }
}

function initDisplay() {
    computerChoiceDisplay.innerHTML = ""
    userChoiceDisplay.innerHTML = ""
    resultDisplay.innerHTML = ""
    resultDisplay.style.backgroundColor = "white"
    resultDisplay.style.border = "none"
}