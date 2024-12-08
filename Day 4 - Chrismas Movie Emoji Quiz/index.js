/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js.

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals
- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from './data.js'

// Some useful elements
var movie = 0;
var attempsLeft = 3
var seenFilms = [];

const guessForm = document.getElementById('guess-input')

const guessInput = document.getElementById('guess-input')[0]
const button = document.getElementById('guess-input')[1]

const messageContainer = document.getElementsByClassName('message-container')[0]

const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
console.log("here")
nextMovie();

function nextMovie() {
  if (seenFilms.length == 11) {
      guessInput.disabled = true;
      button.disabled = true;
      button.style.pointerEvents = 'none'
      button.style.background = 'gray'
      messageContainer.innerHTML = `Thats All folks`
      return;
  }
  
  do {
      movie = Math.floor(Math.random() * films.length);
  } while(seenFilms.includes(movie))
  seenFilms.push(movie)
    
  emojiCluesContainer.innerHTML = films[movie].emoji.join(" ")
}

guessForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const formData = new FormData(guessForm);
  
  const guess = formData.get('guess-input');
  if (guess.toLowerCase() == films[movie].title.toLowerCase() && attempsLeft > 0 && seenFilms.length != 11) {
    attempsLeft = 3;
    messageContainer.innerHTML = `Correct the movie was ${films[movie].title}`
    setTimeout(function() {
        messageContainer.innerHTML = `You have ${attempsLeft} guesses remaining`
        guessInput.value = ""
        nextMovie();
    }, 1000);

  } else {
    attempsLeft--;
    if (attempsLeft >= 0) {
        messageContainer.innerHTML = `You have ${attempsLeft} guesses remaining`
    }
}
})