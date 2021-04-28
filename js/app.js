/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.getElementById("btn__reset");

startButton.addEventListener('click', (e) => {
    game = new Game;
    game.startGame();
});

let keyboardButtons = document.getElementById('qwerty');

keyboardButtons.addEventListener('click', (event) => {
    if(event.target.className === 'key') {
        game.handleInteraction(event.target);
    }
});


// document.addEventListener('keyup', (event) => {
//         let pressedButton = document.querySelector(`.js-${event.key}`);
//         game.handleInteraction(pressedButton);
//         console.log(event.key);
// });