// Welcome message
console.log("Welcome to the Rock Paper Scissors Game!");

// Initialize game variables
let round = 0;
let playerScore = 0;
let computerScore = 0;
let message = "";
let announcement = document.getElementsByClassName("rps-round-message")[0];
let playerScoreDisplay = document.getElementById("rps-player-score");
let computerScoreDisplay = document.getElementById("rps-computer-score");
let resetButton = document.getElementById("rps-reset");

const rpsBtn = document.querySelectorAll("button");
rpsBtn.forEach((button) => {
  const rpsValue = button.getAttribute("data-value");
  button.addEventListener("click", playRound);
});

// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computersChoice = choices[Math.floor(Math.random() * choices.length)];
  return computersChoice;
}

// Function to play a round of the game
function playRound() {
  let playerSelection = this.getAttribute("data-value").toLowerCase();
  let computerSelection = getComputerChoice().toLowerCase();

  if (playerSelection === "reset") {
    reset();
    return;
  }

  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    message = "It's a tie!";
  }
  // Check if player selected rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      message = "You lose! Paper beats Rock";
      computerScore++;
    } else {
      message = "You win! Rock beats Scissors";
      playerScore++;
    }
  }
  // Check if player selected paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      message = "You lose! Scissors beats Paper";
      computerScore++;
    } else {
      message = "You win! Paper beats Rock";
      playerScore++;
    }
  }
  // Check if player selected scissors
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      message = "You lose! Rock beats Scissors";
      computerScore++;
    } else {
      message = "You win! Scissors beats Paper";
      playerScore++;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    message = `${
      playerScore === 5
        ? "Congratulations , you won"
        : "Sorry, you lost. Computer wins"
    }`;

    resetButton.style.display = "block";
  }

  announcement.textContent = message;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  announcement.textContent = "Let the games begin!";
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resetButton.style.display = "none";
}
