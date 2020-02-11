// Input Variables
var Guess = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Tracking Variables
var Wins = 0;
var Losses = 0;
var GuessLeft = 10;
var UserInput = [];
var pcchoice;

// Reset Funtion to clear userinput reset guesses and select the PC choice

function reset() {
  GuessLeft = 10;
  UserInput = [];
  pcchoice = Guess[Math.floor(Math.random() * Guess.length)];
}
// Log and Update Values on Key Press
document.onkeyup = function(event) {
  var keystroke = event.key;
  //   make keystroke lowercase
  keystroke = keystroke.toLowerCase();
  // Add key to input list
  updateChoice(keystroke);
  // Check to see if the choice matches the PC choice
  checkYaChoice(keystroke);
  // log the userchoice to the console
  console.log(keystroke);
};

//
function updateChoice(input) {
  // add the user choice to input array
  UserInput.push(input);
  console.log(input);
  // update the dialogue to the user
  document.getElementById("guess").innerHTML =
    "Your guesses so far: " + UserInput;
}

// Compare userchoice to PC Choice
function checkYaChoice(input) {
  if (input === pcchoice) {
    // If match update wins and reset
    Wins = Wins + 1;
    document.getElementById("w").innerHTML = "Wins: " + Wins;
    reset();
  } else {
    // if didn't match subtract from gueses left until 0, add to losses, and reset
    GuessLeft = GuessLeft - 1;
    if (GuessLeft === 0) {
      Losses = Losses + 1;
      reset();
    }
    // Update counts on the page
    document.getElementById("l").innerHTML = "Losses: " + Losses;
    document.getElementById("left").innerHTML = "Guesses Left:" + GuessLeft;
  }
}
reset();
