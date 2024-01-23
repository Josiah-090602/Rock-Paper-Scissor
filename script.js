const playButton = document.getElementById("play-game")
const gameState = document.getElementById("game-container")
const homeState = document.getElementById("home-container")

//Play Function
playButton.addEventListener("click", ()=>{
    homeState.style.display = "none"
    gameState.style.display = "flex"
})

