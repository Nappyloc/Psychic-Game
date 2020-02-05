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
var GuessLeft = 20;
var UserInput = [];
var pcchoice;

// Log and Update Values on Key Press
document.onkeyup = function(event) {
  var keystroke = event.key;
  //   make keystroke lowercase
  keystroke = keystroke.toLowerCase();
  updateChoice(keystroke);
  checkYaChoice(keystroke);
  console.log(keystroke);
};

// Update User Choice
function updateChoice(input) {
  UserInput.push(input);
  console.log(input);
  document.getElementById("guess").innerHTML =
    "Your guesses so far: " + UserInput;
}

// Update Front End HTML
function checkYaChoice(input) {
  if (input === pcchoice) {
    Wins = Wins + 1;
    document.getElementById("w").innerHTML = "Wins: " + Wins;
    reset();
  } else {
    GuessLeft = GuessLeft - 1;
    if (GuessLeft === 0) {
      Losses = Losses + 1;
      reset();
    }
    document.getElementById("l").innerHTML = "Losses: " + Losses;
    document.getElementById("left").innerHTML = "Guesses Left:" + GuessLeft;
  }
}

function reset() {
  GuessLeft = 10;
  UserInput = [];
  pcchoice = Guess[Math.floor(Math.random() * Guess.length)];
}
reset();
