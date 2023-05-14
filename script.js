// Welcome message
console.log("Welcome to the Rock Paper Scissors Game!");

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
  // Convert player and computer selections to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Check if it's a tie
  if (playerSelection === computerSelection) {
    message = "It's a tie!";
    return "tie";
  }
  // Check if player selected rock
  else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      message = "You lose! Paper beats Rock";
      return false;
    } else {
      message = "You win! Rock beats Scissors";
      return true;
    }
  }
  // Check if player selected paper
  else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      message = "You lose! Scissors beats Paper";
      return false;
    } else {
      message = "You win! Paper beats Rock";
      return true;
    }
  }
  // Check if player selected scissors
  else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      message = "You lose! Rock beats Scissors";
      return false;
    } else {
      message = "You win! Scissors beats Paper";
      return true;
    }
  }
}

// Array of choices for the computer
const choices = ["rock", "paper", "scissors"];

// Initialize game variables
let round = 0;
let playerScore = 0;
let computerScore = 0;
let message = "";

// Function to get a random choice for the computer
function getComputerChoice() {
  const computersChoice = choices[Math.floor(Math.random() * choices.length)];
  return computersChoice;
}

// Main game function
function game() {
  // Repeat for 5 rounds
  while (round < 5) {
    // Ask player for their choice
    let playerSelection = prompt("Rock, Paper or Scissors?");
    // Convert player selection to lowercase
    playerSelection = playerSelection.toLowerCase();

    // Check if player selection is valid
    if (!choices.includes(playerSelection)) {
      alert("Invalid option");
      continue;
    }

    // Play a round and get the result
    let roundResult = playRound(playerSelection, getComputerChoice());

    // Show the result to the player
    alert(message);

    // Update scores based on the round result
    if (roundResult === "tie") {
      continue;
    }

    if (roundResult === false) {
      computerScore++;
    } else {
      playerScore++;
    }

    // Show current scores to the player
    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    // Increment round counter
    round++;
  }
}

// Start game
game();
