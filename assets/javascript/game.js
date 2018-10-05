var wins = 0;
var losses = 0;
var attempts = 9;
var guesses = [];

computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// This is run whenever the user presses and releases a key 

document.onkeyup = function () {

    // gathers the users keyCode and makes it a string and also makes it lowercase

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // tells the computer to select the computerChoice array pick something at random

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    // checking to see if the users guess is the same as the computers choice

    if (userGuess === computerGuess) {
        wins++;
        attempts = 9;
        guesses = [];
    } else if (attempts < 2) {
        losses++;
        attempts = 9;
        guesses = [];
    } else {
        guesses.push(userGuess);
        attempts--;
    }

    // now take the variables and replace the text content
    winText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    attemptText.textContent = "Attempts left: " + attempts;
    guessLeftText.textContent = "Guesses So Far: " + guesses;

    document.getElementById("Directions").textContent = "";

    
}

// this is linking the new variables with the ID's in the HTML 

var winText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var attemptText = document.getElementById("attemptsLeft-text");
var guessLeftText = document.getElementById("guessesSoFar")

