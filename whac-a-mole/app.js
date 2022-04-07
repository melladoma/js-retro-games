//select and store needed html elements
const squares = document.querySelectorAll('.square') // array of squares of the grid
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition
let currentTime = 30;
let timerId = null;

function randomSquare() {
    //removes the mole from each square
    squares.forEach(square => {
        square.classList.remove('mole');
    })
    //selects a random square from 0 to 8
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    //make the mole appear in the random square
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole() {
    //calls randomsquare (mole apparition) at a timed interval
    timerId = setInterval(randomSquare, 1000);
}
moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId) //stops countDown interval calling
        clearInterval(timerId) //stops moveMole interval calling
        alert(`GAME OVER! Your final score is ${result}`)
    }
}

let countDownTimerId = setInterval(countDown, 1000);