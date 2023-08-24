let text = document.getElementById('msg')
let restartBtn = document.getElementById('resetBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let gameActive=true

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
        boxes.forEach(box => box.addEventListener('click', boxClicked))
   
    
}

function boxClicked(e) {
    if(!gameActive)return;
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            gameActive=false
            text.innerHTML = `Game Over :${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        } else if (spaces.every(space => space !== null)) {
            gameActive = false; // Désactiver le jeu si toutes les cases sont remplies sans gagnant
            text.innerHTML = "Game over :It's a Draw!"
        } else {
            currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
        }
    }
    
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    text.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
    gameActive=true
}

startGame()