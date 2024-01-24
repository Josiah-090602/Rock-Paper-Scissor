const playButton = document.getElementById("play-game")
const gameState = document.getElementById("game-container")
const homeState = document.getElementById("home-container")

//Play Function
playButton.addEventListener("click", ()=>{
    let hiddenItems = document.querySelectorAll(".hide")

    hiddenItems.forEach(hidden => {
        hidden.classList.remove("hide")
    })

    playButton.classList.add("hide")

})

