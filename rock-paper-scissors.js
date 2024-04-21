function getRandomInt(){
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  const num = getRandomInt()
  if (num == 0) {
    return 'rock';
  } else if (num == 1){
    return 'paper';
  } else {
    return 'scissors';
  }
}

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const playerScoreEle = document.querySelector("div.score > p.player-score");
const computerScoreEle = document.querySelector("div.score > p.computer-score");
const results = document.querySelector("div.results");

let playerScore = 0;
let computerScore = 0;



function winner(playerScore, computerScore) {
  if (playerScore === 5) {
    setTimeout(() => {
      alert("YOU WIN YOU HANDSOME BASTARD!!!");
    }, 100);
  }
  if (computerScore === 5) {
    setTimeout(() => {
      alert("YOU LOSE AND YOU SUCK. REEVALUATE YOUR LIFE");
    }, 100);
  }
}

function updatePlayerScore(score){
  playerScoreEle.textContent = "Player Score: " + score;
}

function updateComputerScore(score){
  computerScoreEle.textContent = "Computer Score: " + score;
}

rock.addEventListener("click", () => {
  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  
  let resultText = document.createElement("p");

  let round = playRound(playerSelection, computerSelection);
  
  resultText.textContent = round;
  results.appendChild(resultText);

  if (round.slice(0, 8) === "You win!") {
    playerScore++;
    updatePlayerScore(playerScore);
  } else if (round.slice(0, 9) === "You lose!") {
    computerScore++;
    updateComputerScore(computerScore);
  } 

  winner(playerScore, computerScore);
  
})

paper.addEventListener("click", () => {
  const playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  
  let resultText = document.createElement("p");

  let round = playRound(playerSelection, computerSelection);
  
  resultText.textContent = round;
  results.appendChild(resultText);

  if (round.slice(0, 8) === "You win!") {
    playerScore++;
    updatePlayerScore(playerScore);
  } else if (round.slice(0, 9) === "You lose!") {
    computerScore++;
    updateComputerScore(computerScore);
  }
  
  winner(playerScore, computerScore);  
 
})

scissors.addEventListener("click", () => {
  const playerSelection = "Scissors";
  const computerSelection = getComputerChoice();
  
  let resultText = document.createElement("p");

  let round = playRound(playerSelection, computerSelection);
  
  resultText.textContent = round;
  results.appendChild(resultText);

  if (round.slice(0, 8) === "You win!") {
    playerScore++;
    updatePlayerScore(playerScore);
  } else if (round.slice(0, 9) === "You lose!") {
    computerScore++;
    updateComputerScore(computerScore);
  } 

  winner(playerScore, computerScore);

})

function playRound(playerSelection, computerSelection) {

  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

  if (player === 'rock' && computer === 'paper') {
    return ("You lose! Paper beats Rock!");
  } else if (player === 'rock' && computer === 'scissors') {
    return ("You win! Rock beats Scissors!");
  } else if (player === 'rock' && computer === 'rock') {
    return ("Tie, play again!");
  }

  if (player === 'paper' && computer === 'scissors') {
    return ("You lose! Scissors beats Paper!");
  } else if (player === 'paper' && computer === 'rock') {
    return ("You win! Paper beats Rock!");
  } else if (player === 'paper' && computer === 'paper') {
    return ("Tie, play again!")
  };

  if (player === 'scissors' && computer === 'rock') {
    return ("You lose! Rock beats Scissors!");
  } else if (player === 'scissors' && computer === 'paper') {
    return ("You win! Scissors beats Paper!");
  } else if (player === 'scissors' && computer === 'scissors') {
    return ("Tie, play again!");
  }
}





// function playGame() {
//   let playerScore = 0;
//   let computerScore = 0;
  
//   for (let i = 0; i < 5; i++){
//     const computerSelection = getComputerChoice();
//     const playerSelection = getPlayerChoice();
//     game_result = playRound(playerSelection, computerSelection);
//     if (game_result.slice(0, 8) === "You win!") {
//       playerScore += 1
//     } else if (game_result.slice(0, 9) === "You lose!") {
//       computerScore += 1;
//     } 
//     console.log(playRound(playerSelection, computerSelection));
//   }
  
//   if (playerScore > computerScore) {
//     console.log("You win the whole game! You won the most rounds out of 5!")
//   } else if (computerScore > playerScore) {
//     console.log("You lost the whole game! You lost the most rounds out of 5!")
//   } else {
//     console.log("Out of 5 games, you and the computer tied!")
//   }
// }

// playGame()


