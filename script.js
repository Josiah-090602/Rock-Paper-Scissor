const playButton = document.getElementById("play-game")
const gameState = document.getElementById("game-container")
const result = document.getElementById("output")
const playerSelect = document.getElementById("player-select")
const computerSelect = document.getElementById("computer-select")
const gameTitle =  document.getElementById("game-title")
const selectionButtons = document.querySelectorAll(".choices")


//Play Game Function
playButton.addEventListener("click", ()=>{
    let hiddenItems = document.querySelectorAll(".hide")

    hiddenItems.forEach(hidden => {
        hidden.classList.remove("hide")
    })

    playButton.classList.add("hide")
    selectionButtons.forEach(button => {
        button.classList.add("in-game")
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
        
    })
})

//Computer Selection
const comChoice  = () =>{
    const choices = ["rock", "paper", "scissor"]
    const randomSelection = Math.floor(Math.random() * choices.length)

    return choices[randomSelection]
}



