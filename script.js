let userScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];
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
  return prompt("What's your choice? Rock, Paper, or Scissors");
}

function playRound(AiChoice, userChoice) {
  AiChoice = getComputerChoice();
  AiChoice = AiChoice.toLowerCase();
  userChoice = getUserChoice();
  userChoice = userChoice.toLowerCase();
  console.log(userChoice);
  console.log(AiChoice + " VS " + userChoice);

  if (!choices.includes(userChoice)) {
    console.log("invalid choice");
    return;
  }
  if (userChoice == AiChoice) {
    console.log("It's a draw!");
  } else {
    for (let i = 0; i <= choices.length; i++) {
      const choice = array[i];
    }
  }
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

// playGame();
console.log(choices);
