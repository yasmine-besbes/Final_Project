const computerChoiceDisplay = document.getElementById('computer')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('res')
const possibleChoices = document.querySelectorAll('button')
let repalybtn = document.getElementById('replay')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
  }
  else if ((computerChoice === 'rock' && userChoice === "paper")|| (computerChoice === 'paper' && userChoice === "scissors") ||(computerChoice === 'scissors' && userChoice === "rock")) {
    result = 'you win!'
  }
  else if ((computerChoice === 'rock' && userChoice === "scissors")|| (computerChoice === 'paper' && userChoice === "rock")||(computerChoice === 'scissors' && userChoice === "paper") ) {
    result = 'you lost!'
  }
  resultDisplay.innerHTML = result
}
repalybtn.addEventListener('click',rejouer)
function rejouer(){
    computerChoiceDisplay.innerHTML=''
    userChoiceDisplay.innerHTML=''
    resultDisplay.innerHTML=''

}