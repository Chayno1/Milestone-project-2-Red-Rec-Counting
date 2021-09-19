document.addEventListener("DOMContentLoaded", function() {
    changeColors();
});

// start button operation
let startButton = document.getElementById("start-game");

startButton.addEventListener('click', function() {
    runGame();
});

// color change rectangles
function changeColors() {
    numberReds = 0;
    let colors = [ 'blue', 'purple', 'green', 'gold', 'orange', 'red'];
    let recs = document.getElementsByClassName("cell");
    for(let i = 0; i < recs. length; i++){
        let rand = Math.floor(Math.random()*6);
        let randomColor = colors[rand];
        recs[i]. style. backgroundColor = randomColor;
    }
    }
