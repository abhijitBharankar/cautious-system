const firstPlayer = document.querySelector("#player1");
const secondPlayer = document.querySelector("#player2");

const firstPlayerButton = document.querySelector("#firstPlayerBtn");
const secondPlayerButton = document.querySelector("#secondPlayerBtn");
const resetButton = document.querySelector("#resetBtn");

const selected = document.querySelector("#select");

var playerOne = 0;
var playerTwo = 0;

firstPlayerButton.addEventListener('click', function () {
    playerOne++;
    firstPlayer.textContent = playerOne;
    const index = selected.selectedIndex + 5;
    if (playerOne === index) {
        firstPlayer.style.color = "green";
        secondPlayer.style.color = "red";
        firstPlayerButton.disabled = "true"
        secondPlayerButton.disabled = "true"
    }
});

secondPlayerButton.addEventListener('click', function () {
    playerTwo++;
    secondPlayer.textContent = playerTwo;
    const index = selected.selectedIndex + 5;
    if (playerTwo === index) {
        secondPlayer.style.color = "green";
        firstPlayer.style.color = "red";
        firstPlayerButton.disabled = "true"
        secondPlayerButton.disabled = "true"
    }
});

resetButton.addEventListener('click', function () {
    firstPlayerButton.disabled = false;
    secondPlayerButton.disabled = false;
    playerOne = 0;
    playerTwo = 0;
    firstPlayer.innerText = 0;
    secondPlayer.innerText = 0;
    firstPlayer.style.color = "black";
    secondPlayer.style.color = "black";
});

