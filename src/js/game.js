let score = 0;
let timeLeft = 10;
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const button = document.getElementById("target-button");
const container = document.getElementById("game-container");
const results = document.querySelector(".overlay-text");

function moveButton() {
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    button.style.left = Math.random() * maxX + "px";
    button.style.top = Math.random() * maxY + "px";
}

button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
});

let gameInterval;
document.querySelector(".game-start").addEventListener("click", e => {
    clearInterval(gameInterval);
    timeLeft = 10;
    score = 0;
    button.style.display = "block";
    results.style.display = "none";
    timeDisplay.textContent = 10;
    scoreDisplay.textContent = 0;

    gameInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            button.style.display = "none";
            results.style.display = "block";
            results.textContent = "Час вийшов! Ваш результат: " + score;
        }
    }, 1000);
})

moveButton(); // Initial position
