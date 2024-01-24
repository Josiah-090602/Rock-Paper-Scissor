const playButton = document.getElementById("play-game")
const gameState = document.getElementById("game-container")
const result = document.getElementById("output")
const playerSelect = document.getElementById("player-select")
const computerSelect = document.getElementById("computer-select")
const gameTitle =  document.getElementById("game-title")
const selectionButtons = document.querySelectorAll(".choices")
const computerScore = document.getElementById("com-score")
const playerScore = document.getElementById("pl-score")
const postGame = document.getElementById("post-game")
const gameDescission = document.getElementById("descission")



let cScore = 0
let pScore = 0


//Play Game Function
playButton.addEventListener("click", ()=>{
    let hiddenItems = document.querySelectorAll(".hide")

    hiddenItems.forEach(hidden => {
        hidden.classList.remove("hide")
    })

    playButton.classList.add("hide")
    selectionButtons.forEach(button => {
        button.classList.add("in-game")
        button.disabled = false
    })
    gameTitle.classList.add("in-game")

})

//Selection Button Functions
selectionButtons.forEach(selection => {
    selection.addEventListener("click", () => {
        const playerChoice = selection.getAttribute("choice-data")
        let computerChoice = comChoice()
        playerSelect.src = `/img/${playerChoice}.png`
        computerSelect.src = `/img/${computerChoice}.png`
        console.log(computerChoice)
        roundWinner(computerChoice, playerChoice)
        playerScore.textContent = pScore
        computerScore.textContent = cScore
        gameWinner(cScore, pScore)
    })
})

//Computer Selection
const comChoice  = () =>{
    const choices = ["rock", "paper", "scissor"]
    const randomSelection = Math.floor(Math.random() * choices.length)

    return choices[randomSelection]
}

//Check Round Winner
const roundWinner = (computer, player) =>{
    if (computer === "rock" && player === "scissor" ||
        computer === "scissor" && player === "paper" ||
        computer === "paper" && player === "rock"){

            result.textContent = "You Lose!"
            result.style.backgroundColor = "rgb(250, 112, 112, 0.2)"
            cScore++

    } else if (computer === player) {

            result.textContent = "Draw"
            result.style.backgroundColor = "rgb(182, 187, 196, 0.2)"

    } else {

            result.textContent = "You Win!"
            result.style.backgroundColor = "rgb(161, 238, 189, 0.2)"
            pScore++
    }
}

//Game Winner
const gameWinner = (computer, player) => {
    if (computer === 3) {
        postGame.classList.add("show")
        gameDescission.textContent = "You Lose, Better luck next time"
        postGame.style.backgroundColor = "rgb(117, 14, 33, 0.8)"
        disableButtons()
        gameState.style.filter = "blur(5px) brightness(80%)"
    } else if (player === 3) {
        postGame.classList.add("show")
        gameDescission.textContent = "Congratulations! You win"
        postGame.style.backgroundColor = "rgb(80, 141, 105, 0.8)"
        disableButtons( )
        gameState.style.filter = "blur(5px) brightness(70%)"
    }
}

const disableButtons = () =>{
    selectionButtons.forEach(buttons => {
        buttons.disabled = true
    })
}

const playAgain = document.getElementById("play-again").addEventListener("click", () => {
    resetGame()
})

//Reset Game
const resetGame = () => {
    postGame.classList.remove("show")
    gameState.style.filter = "blur(0) brightness(100%)"
    pScore = 0
    cScore = 0
    playerScore.textContent = pScore
    computerScore.textContent = cScore
    result.textContent = "Round Winner"

    selectionButtons.forEach(button => {
        button.disabled = false
    })
}

//OnLoad
window.onload = () => {
    playerScore.textContent = "0"
    computerScore.textContent = "0"
    disableButtons()
    
}





