export default class GameView{
    constructor(){
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`)
            tile.textContent = game.board[i];

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
                let winningPlayer = game.board[i] == 'X' ? "playerX" : "playerO";
                let winner = document.querySelector(".winner");
                winner.classList.add("showWinner",`${winningPlayer}`)
                game.winSound();
            }         
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".player-x")
        let playerO = document.querySelector(".player-o")
        playerX.classList.remove("active")
        playerO.classList.remove("active")
        if(game.turn == 'X'){
        playerX.classList.add('active')
        }
        else{
            playerO.classList.add('active')
        }
    }

    checkTie(game){
        const  winningCombination = game.findWinningCombination();
        console.log(winningCombination);
        if(winningCombination == null){
            let tie = document.querySelector(".tie");
            tie.classList.add("showTie")
            game.loseSound()
        }
    }
}
