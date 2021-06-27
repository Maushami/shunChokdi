import Game from "./Game.js" 
import GameView from "./Gameview.js"

let game = new Game();
let gameView = new GameView();
let tileClicked = 0;

document.querySelector(".restart")
.addEventListener("click", ()=>{
    onRestartCick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index)
    })
})

let dayNightMode = document.querySelector(".switch")
dayNightMode.addEventListener("click", () =>{
      dayNightMode.classList.toggle("night-switch")
      let body = document.querySelector("body")
      body.classList.toggle("night-mode")
    }
)

function onTileClick(i){
    game.clickSound()
    tileClicked++;
    game.makeMove(i)
    gameView.updateBoard(game)
    if(tileClicked == game.board.length){
        gameView.checkTie(game);
        tileClicked = 0;
    }
}

function onRestartCick(){
    tileClicked = 0;
    let winner = document.querySelector(".winner");
    winner.className = "winner"
    let tie = document.querySelector(".tie");
    tie.classList.remove("showTie")
    game = new Game();
    gameView.updateBoard(game);
}



gameView.updateBoard(game);