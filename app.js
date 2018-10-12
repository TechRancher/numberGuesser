/*
GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose the play again
*/


// Game Values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI Elements
const game = document.getElementById("game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;    

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate Input
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, "red", "18px", true);
  }

  // Check if won
  if (guess === winningNum){
    // Disable Input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = "green";
    // Set Message
    setMessage(`${winningNum} is correct! YOU WON!!`, "green", "24px", false);
    // Change guess Button Text
    guessBtn.value = "Play Again";
    guessBtn.style.hover
  } else {

  }
});

// Set Message
function setMessage(msg, color, fontSize, time){
  message.style.color = color;
  message.style.fontSize = fontSize;
  message.textContent = msg;
  if (time){
    setTimeout(removeMessage, 3000);
  }
};

// Remove Message
function removeMessage(){
  message.textContent = "";
};