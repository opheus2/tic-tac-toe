export default class GameView {
    constructor() {
        console.log("init game view");
    }

    updateBoard(game) {
        this.updateTurn(game);
        let winningCombination = game.findWinningCombinations();
        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == "X" ? "tile-X" : "tile-O";

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`;
            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");
        if (game.turn == "X") {
            playerX.classList.add('active');
            playerO.classList.remove('active');
        } else {
            playerX.classList.remove('active');
            playerO.classList.add('active');
        }
    }
}
