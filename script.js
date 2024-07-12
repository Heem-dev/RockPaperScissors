let userScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

const computerScoreElem = document.querySelector(
  ".computerScore>h4:nth-child(2)"
);
const userScoreElem = document.querySelector(".playerScore>h4:nth-child(2)");

const winnerText = document.querySelector(".winner>h2");

// a function for the computer to return a random choice
function getComputerChoice() {
  // get random number between 1 and 3
  let randomNumber = Math.ceil(Math.random() * 3);
  // console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

document.querySelectorAll(".choiceContainer>div").forEach((elm) => {
  elm.addEventListener("click", () => {
    const choice = elm.classList.value;
    playRound(null, choice);
  });
});

function playRound(AiChoice, userChoice) {
  AiChoice = getComputerChoice();
  AiChoice = AiChoice.toLowerCase();
  userChoice = userChoice.toLowerCase();

  if (!choices.includes(userChoice)) {
    console.log("invalid choice");
    return;
  } else if (AiChoice === userChoice) {
    winnerText.textContent = "It's a tie";
  } else if (AiChoice === "rock" && userChoice === "scissors") {
    computerPlus();
  } else if (AiChoice === "rock" && userChoice === "paper") {
    playerPlus();
  } else if (AiChoice === "paper" && userChoice === "rock") {
    computerPlus();
  } else if (AiChoice === "paper" && userChoice === "scissors") {
    playerPlus();
  } else if (AiChoice === "scissors" && userChoice === "rock") {
    playerPlus();
  } else if (AiChoice === "scissors" && userChoice === "paper") {
    computerPlus();
  } else {
    winnerText.textContent = "Invalid choice";
  }

  if (computerScore == 5) {
    winnerText.textContent = "Computer Wins The Game";
    document.querySelector(".choiceContainer").style.display = "none";
  }
  if (userScore == 5) {
    winnerText.textContent = "Player Wins The Game";
    document.querySelector(".choiceContainer").style.display = "none";
  }
}

function computerPlus() {
  computerScore++;
  winnerText.textContent = "Computer wins";
  computerScoreElem.textContent = computerScore;
}
function playerPlus() {
  userScore++;
  winnerText.textContent = "Player wins";
  userScoreElem.textContent = userScore;
}
