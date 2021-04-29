/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases(){
        let phrases = [new Phrase('Web Browser'), new Phrase('Internet of Things'), new Phrase('Virtual Reality'), 
        new Phrase('Crypto Exchange'), new Phrase('Graphical Processing Unit')];
        return phrases;
    }


/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    } 


/**
 * Begins game by selecting a random phrase and displaying it to user
 */
 startGame() {
     this.resetGame();
     let startScreen = document.getElementById('overlay');
     startScreen.style.display = 'none';
     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
 }

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won */
checkForWin() {
    let phrase = document.getElementById('phrase');
    let remainingLetters = phrase.querySelectorAll('.hide');

    return (remainingLetters.length === 0);
};

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
 removeLife() {
     let heart = document.querySelector("img[src='images/liveHeart.png']");
     heart.src = "images/lostHeart.png";
     this.missed += 1;
     if(this.missed === 5){
         this.gameOver(this.checkForWin());
     }
 }

 /**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
gameOver(gameWon) {
    let startScreen = document.querySelector('#overlay');
    let gameOverMessage = document.querySelector('#game-over-message');

    startScreen.classList.remove('start', 'lose', 'win');

    if(gameWon){
        startScreen.classList.add('win');
        gameOverMessage.innerHTML = 'Congratulations! You won the game.';
    } else {
        startScreen.classList.add('lose');
        gameOverMessage.innerHTML = 'Oops! Better luck next time.';
    }
    startScreen.style.display = '';
}

/**
 * Removes the old phrase from the DOM, resets virtual keyboard buttons, and refills all hearts/chances.
 */
resetGame(){
    let phraseElement = document.querySelector('#phrase').firstElementChild;
    let buttonElements = document.querySelectorAll('.key');
    let heartImages = document.querySelectorAll("img[src='images/lostHeart.png");

    while (phraseElement.children.length > 0) {
         phraseElement.removeChild(phraseElement.firstElementChild);
    }

    for (let i = 0; i < buttonElements.length; i++){
        buttonElements[i].disabled = false;
        buttonElements[i].classList.remove('chosen', 'wrong');
    }

    for (let i = 0; i < heartImages.length; i++){
        heartImages[i].src = 'images/liveHeart.png';
    }
}

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
handleInteraction(button){
    button.disabled = true;
    if(!this.activePhrase.checkLetter(button.textContent)){
        button.classList.add('wrong');
        this.removeLife();
    } else {
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(button.textContent);
        let gameWon = this.checkForWin();
        if(gameWon){
            this.gameOver(gameWon);
        };
    }
}

}