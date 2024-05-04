console.log("Hello World");

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
  console.log(userChoice);
}
