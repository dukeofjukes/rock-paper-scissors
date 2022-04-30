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

game();

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

  console.log("computer played: " + hand.name);
  return hand;
}

function getPlayerHand() {
  // TODO: replace this primitive user prompt with gui
  let choice = prompt("Type in 'Rock', 'Paper', or 'Scissors'.").toLowerCase();
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

  console.log("player played: " + hand.name);
  return hand;
}

function playRound() {
  let player = getPlayerHand();
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
    console.log(winner + ".");
  } else {
    console.log(
      `${winner} won the round. Score: ${playerPoints} - ${computerPoints}.`
    );
  }
  return winner;
}

function game() {
  let winner;
  while (playerPoints < 5 && computerPoints < 5) {
    winner = playRound();
  }

  console.log(winner + " won the game.");
}
