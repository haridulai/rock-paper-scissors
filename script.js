console.log("Welcome to the Rock Paper Scissors Game!");

// function called getComputerChoice()
// will return a random choice from the array ['rock', 'paper', 'scissors']
// display option in console.log

// console.log(getComputerChoice());

// function should take two parameters - the playerSelection and computerSelection
// then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// return result

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats Paper";
    } else {
      return "You win! Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  }
}

// let playerSelection = "rock";
// console.log(playRound(playerSelection, getComputerChoice()));

// function game() { playRound() } , play round 5 times
// keep the score
// report as winner or loser

const choices = ["rock", "paper", "scissors"];
let round = 0;

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

    playRound(playerSelection, getComputerChoice());
    round++;
  }
}

game();
