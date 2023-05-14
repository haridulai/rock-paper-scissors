console.log("Welcome to the Rock Paper Scissors Game!");

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    message = "It's a tie!";
    return "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      message = "You lose! Paper beats Rock";
      return false;
    } else {
      message = "You win! Rock beats Scissors";
      return true;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      message = "You lose! Scissors beats Paper";
      return false;
    } else {
      message = "You win! Paper beats Rock";
      return true;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      message = "You lose! Rock beats Scissors";
      return false;
    } else {
      message = "You win! Scissors beats Paper";
      return true;
    }
  }
}

const choices = ["rock", "paper", "scissors"];
let round = 0;
let playerScore = 0;
let computerScore = 0;
let message = "";

function getComputerChoice() {
  const computersChoice = choices[Math.floor(Math.random() * choices.length)];
  return computersChoice;
}

function game() {
  while (round < 5) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (!choices.includes(playerSelection)) {
      alert("Invalid option");
      continue;
    }

    let roundResult = playRound(playerSelection, getComputerChoice());

    alert(message);
    if (roundResult === "tie") {
      continue;
    }

    if (roundResult === false) {
      computerScore++;
    } else {
      playerScore++;
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    round++;
  }
}

game();
