// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
import {start} from '/starter.js'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
export const guessContainer = document.getElementById('guess-container')
export const snowmanParts = document.getElementsByClassName('snowman-part')

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter.
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.

    *** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/


// Set the word to guess
export const word = "gift"

var correct_letter = new Array(4);
// 6 guesses for the 6 parts of the snowman
let guesses = 6

start()

function setStyle(keyPressed) {
    keyPressed.style.poitnerevent = "None";
   keyPressed.style.background = "#f0c419";
   keyPressed.style.color = "Black";
   
   
   keyPressed.onfocus = (event) => {
       keyPressed.style.outline = "None";
       keyPressed.style.boxshadow = "None"
       
   };
}


function checkGuess(event) {
    const keyPressed = event.target
    if (keyPressed.id == "keyboard-container" ){
        return; 
    }
    // Set the style for the button that have already been pressed
    setStyle(keyPressed);

    const letter = keyPressed.innerHTML;

    if (word.includes(letter) ){
        const letter_index = word.indexOf(letter)
        guessContainer.children[letter_index].innerHTML = letter;
        correct_letter[letter_index] = letter;
        
        if (correct_letter.join("") == word) {
            guessContainer.innerHTML = `<div class="Over">You Win!!</div>`
            const keyboard = document.getElementById("keyboard-container");
            keyboard.style.pointerEvents = 'None'
        }
        
        
        
    }
    else {
        snowmanParts[--guesses].style.display = "None"
        if (guesses <= 0 ){
            guessContainer.innerHTML = `<div class="Over">Game Over!!</div>`
        }
    }
    
}


renderKeyboard()