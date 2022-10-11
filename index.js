var player;
var computer;
var numberOfWins = 0;
var numberOfDraws = 0;
var numberOfLosses = 0;
const wonText = document.getElementById("won")
const drawText = document.getElementById("draw")
const lostText = document.getElementById("lost")
const resultText = document.getElementById("resulttext")

function startGame(playerChoice) {
    player = playerChoice;
    computerChoice();
}

function computerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber) {
        case 0:
            computer = "rock";
            break;
        case 1:
            computer = "paper";
            break;
        case 2:
            computer = "scissors"
            break;
    }
    gameResultHandler();
}

function gameResultHandler() {
    if (player == "rock" && computer == "scissors" ||
    player == "paper" && computer == "rock" ||
    player == "scissors" && computer =="paper") {
        numberOfWins += 1;
        wonText.textContent = `You won: ${numberOfWins}`;
        resultText.textContent = `You won, computer chose: ${computer}`;
    }
    else if (player == computer) {
        numberOfDraws += 1;
        drawText.textContent = `You drew: ${numberOfDraws}`;
        resultText.textContent = `You drew, computer chose: ${computer}`;
    }
    else if (player == "rock" && computer == "paper" ||
    player == "paper" && computer == "scissors" ||
    player == "scissors" && computer == "rock") {
        numberOfLosses += 1;
        lostText.textContent = `You lost: ${numberOfLosses}`;
        resultText.textContent = `You lost, computer chose: ${computer}`;
    }
}

function resetGame() {
    numberOfWins = 0;
    wonText.textContent = `You won: ${numberOfWins}`;
    numberOfDraws = 0;
    drawText.textContent = `You drew: ${numberOfDraws}`;
    numberOfLosses = 0;
    lostText.textContent = `You lost: ${numberOfLosses}`;
    resultText.textContent = ``;
}