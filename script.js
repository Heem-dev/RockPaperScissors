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
  } else if (AiChoice === userChoice) {
    console.log("It's a tie");
  } else if (AiChoice === "rock" && userChoice === "scissors") {
    console.log("Computer wins");
    computerScore++;
  } else if (AiChoice === "rock" && userChoice === "paper") {
    console.log("User wins");
    userScore++;
  } else if (AiChoice === "paper" && userChoice === "rock") {
    console.log("Computer wins");
    computerScore++;
  } else if (AiChoice === "paper" && userChoice === "scissors") {
    console.log("User wins");
    userScore++;
  } else if (AiChoice === "scissors" && userChoice === "rock") {
    console.log("User wins");
    userScore++;
  } else if (AiChoice === "scissors" && userChoice === "paper") {
    console.log("Computer wins");
    computerScore++;
  } else {
    console.log("Invalid choice");
  }
  console.log("Computer: " + computerScore + " User: " + userScore);
}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame();
