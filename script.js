let userScore = 0;
let computerScore = 0;

// a function for the computer to return a random choice
function getComputerChoice() {
  // get random number between 1 and 3
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function getUserChoice() {
  let userChoice = prompt("What's your choice? Rock, Paper, or Scissors");
  userChoice = userChoice.toLowerCase();
  console.log(userChoice);
  // calling play function after getting user choice
  playRound(undefined, userChoice);
}

function playRound(AiChoice, userChoice) {
  AiChoice = getComputerChoice();
  console.log(AiChoice + userChoice);
}
