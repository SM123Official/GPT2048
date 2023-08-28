const board = document.getElementById("game-board");

// Your 2048 game logic implementation here

// Example: Creating and displaying the initial game board
function initializeGame() {
    for (let i = 0; i < 16; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.innerText = "2"; // Initial tile value
        board.appendChild(tile);
    }
}

initializeGame();
