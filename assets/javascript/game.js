// Initiate arrays and variables.
var wordArray = ["SHADE", "CURVE", "STORE", "PARK", "CLEAR", "MOVE", "AMBIENT", "BRAZEN", "REMOTE", "DUSTY"];
var alphaArray = [];
var outputArray = [];
var alpha = 0;

// Choose random word from array.
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(randomWord);

// Create array from random word.
var lettersArray = randomWord.split("");

// Create the word grid the user sees.
for (var i = 0; i < lettersArray.length; i++) {
    outputArray[i] = "_";
}
console.log(lettersArray);
console.log(lettersArray.length);
console.log(outputArray);

// Main game event.
document.onkeyup = function (event) {
    var userGuess = event.key;

    // Makes sure letter hasn't already been used.
    for (var i = 0; i < alphaArray.length; i++) {
        if (userGuess === alphaArray[i]) {
            return;
        }
    }

    // Sees if guessed letter is in word.
    for (var i = 0; i < lettersArray.length; i++) {
        if (userGuess = lettersArray[i]) {
            outputArray[i] = userGuess;
        }
    }

    // Adds latest guessed letter to the used letter Array.
    alphaArray.push(userGuess);
}
