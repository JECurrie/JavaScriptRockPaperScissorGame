//Simple game:
let userInput = 'Rock';
userInput = userInput.toLowerCase();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 02:
      return 'scissors';
  }
}
  
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb'){
    return 'You won with that BOMB!';  
  }
  if (userChoice ===computerChoice){
    return 'Result is a tie';  
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You win!';
    }; 
  };  
  if (userChoice === 'paper'){
    if (computerChoice === 'scissor') {
      return 'Computer won!';
    } else {
      return 'You win!';
    };     
  };  
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You win!';
    };
  };
} 

function playGame() {
  let userChoice = userInput;
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
