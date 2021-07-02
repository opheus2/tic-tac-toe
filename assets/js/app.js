import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart")
    .addEventListener("click", () => {
        onRestartClick();
    })

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}


const toggleSwitch = document.querySelector('.dark-mode input[type="checkbox"]');
let darkMode = localStorage.getItem('darkMode');
if (darkMode == null) {
    localStorage.setItem('darkMode', false);
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    if (darkMode == "true") {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', false);
    }
}

toggleSwitch.addEventListener('change', (e) => {
    switchTheme(e)
});
