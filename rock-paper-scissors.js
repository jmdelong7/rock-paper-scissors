function getRandomInt(){
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  const num = getRandomInt()
  if (num == 0) {
    return 'Rock';
  } else if (num == 1){
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  return playerSelection;
}

const computerSelection = getComputerChoice().toLowerCase()
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {

  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

  if (player === 'rock' && computer === 'paper') {
    return ("You lose! Paper beats Rock!");
  } else if (player === 'rock' && computer === 'scissors') {
    return ("You win! Rock beats Scissors!");
  } else if (player === 'rock' && computer === 'rock') {
    return ("Tie, play again!")
  }

  if (player === 'paper' && computer === 'scissors') {
    return ("You lose! Scissors beats Paper!");
  } else if (player === 'paper' && computer === 'rock') {
    return ("You win! Paper beats Rock!");
  } else if (player === 'paper' && computer === 'paper') {
    return ("Tie, play again!")
  }

  if (player === 'scissors' && computer === 'rock') {
    return ("You lose! Rock beats Scissors!");
  } else if (player === 'scissors' && computer === 'paper') {
    return ("You win! Scissors beats Paper!");
  } else if (player === 'scissors' && computer === 'scissors') {
    return ("Tie, play again!")
  }

}

function playGame() {
  for (let i = 0; i < 4; i++){
  console.log(playRound(playerSelection, computerSelection));
  }
}

playGame()


