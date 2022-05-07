const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const outputDiv = document.getElementById("output-div");
const scoreDiv = document.getElementById("score-div");

// TODO: find a better way, get param from button attribute?
rockBtn.addEventListener("click", function () {
  playRound("rock");
});
paperBtn.addEventListener("click", function () {
  playRound("paper");
});
scissorsBtn.addEventListener("click", function () {
  playRound("scissors");
});

let playerPoints = 0;
let computerPoints = 0;

class Hand {
  static Rock = new Hand("rock");
  static Paper = new Hand("paper");
  static Scissors = new Hand("scissors");

  constructor(name) {
    this.name = name;
  }
}

function output(text) {
  outputDiv.textContent = text;
}

function updateScore() {
  scoreDiv.innerText = `Score: ${playerPoints} - ${computerPoints}`;
}

// min included, max excluded
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerHand() {
  let choice = randomInt(0, 3);
  let hand;
  switch (Number(choice)) {
    case Number(0):
      hand = Hand.Rock;
      break;
    case Number(1):
      hand = Hand.Paper;
      break;
    case Number(2):
      hand = Hand.Scissors;
      break;
  }
  return hand;
}

function getPlayerHand(choice) {
  let hand;
  switch (choice) {
    case "rock":
      hand = Hand.Rock;
      break;
    case "paper":
      hand = Hand.Paper;
      break;
    case "scissors":
      hand = Hand.Scissors;
      break;
  }
  return hand;
}

function playRound(playerChoice) {
  let player = getPlayerHand(playerChoice);
  let computer = getComputerHand();

  let winner;
  if (
    (player === Hand.Rock && computer === Hand.Scissors) ||
    (player === Hand.Scissors && computer === Hand.Paper) ||
    (player === Hand.Paper && computer === Hand.Rock)
  ) {
    winner = "PLAYER";
    playerPoints++;
  } else if (player === computer) {
    winner = "DRAW";
  } else {
    winner = "COMPUTER";
    computerPoints++;
  }

  if (winner === "DRAW") {
    output(
      `Player played ${player.name}.
      Computer played ${computer.name}.
      ${winner}.`
    );
  } else {
    output(
      `Player played ${player.name}.
      Computer played ${computer.name}.
      ${winner} won the round.`
    );
  }

  updateScore();

  return winner;
}
