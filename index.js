const playerPoints = 0;
const computerPoints = 0;

game();

// min included, max excluded
function randomInt(min, max) {
  return Math.floor(Math.random * (max - min)) + min;
}

function computerPlay() {
  let choice = randomInt(0, 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound() {
  // TODO: get player choice in a better way
  let playerChoice = prompt("Type in 'Rock', 'Paper', or 'Scissors'.");

  let computerChoice = computerPlay();

  let winner = "player";
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    winner = "player";
  }
  // TODO: finish rock-paper-scissors comparison logic

  console.log(winner);
}

function game() {
  while (playerPoints < 5 && computerPoints < 5) {
    playRound();
  }
}
