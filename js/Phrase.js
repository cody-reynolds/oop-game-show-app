/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        let phraseDiv = document.getElementById("phrase").firstElementChild; //this is targeting the ul.

        for (let i = 0 ; i < this.phrase.length; i++) {
            let phraseLetter = this.phrase[i];
            if(phraseLetter === ' '){
                phraseDiv.innerHTML += '<li class="space"> </li>';
            } else {
                phraseDiv.innerHTML += `<li class="hide letter ${phraseLetter}">${phraseLetter}</li>`
            }
        }
    }

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
checkLetter(letter) {
    return this.phrase.includes(letter);
};

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
 showMatchedLetter(letter) {
     if(this.checkLetter(letter)){
        let matchedLetters = document.querySelectorAll(`.${letter}`);

        for(let i = 0; i < matchedLetters.length; i++){
        matchedLetters[i].classList.remove('hide');
        matchedLetters[i].classList.add('show');
        }
     }
 };


}
