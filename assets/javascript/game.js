// Initiate arrays and variables.
var wordArray = ["SHADE", "CURVE", "STORE", "PARK", "CLEAR", "MOVE", "AMBIENT", "BRAZEN", "REMOTE", "DUSTY"];
var imageArray = ["assets/images/0.jpg", "assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg", "assets/images/9.jpg", "assets/images/10.jpg"];
var alphaArray = [];
var outputArray = [];
var alpha = 0;
var win = 0;
var lose = 0;
var nogo = 0;
var result = "";

// Choose random word from array.
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// Create array from random word.
var lettersArray = randomWord.split("");
console.log("random word is " + lettersArray);




// Create the word grid the user sees.
for (var i = 0; i < lettersArray.length; i++) {
    outputArray[i] = "_";
}

console.log(outputArray);
$("#current").text(outputArray).addClass("box-text");
$("#used").text(alphaArray).addClass("box-text");

// // Main game event.
document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();

    nogo = 0;

    if (result === "") {
        $('h3').hide();
    }else{
        $('h3').show();
    }

    // Makes sure letter hasn't already been used.
    for (var i = 0; i < alphaArray.length; i++) {
        if (userGuess === alphaArray[i]) {
            return;
        }
    }

    alphaArray.push(userGuess);

    var output = $('output');

    // Sees if guessed letter is in word and determines if word is complete.
    for (var i = 0; i < lettersArray.length; i++) {
        if (userGuess === lettersArray[i]) {
            outputArray[i] = userGuess;
            win++;
        } else {
            nogo++;
        }
    }

    if (nogo === lettersArray.length) {
        lose++;
    }

    // console.log("wrong guess total = " + lose);
    $("#graphic").attr("src", imageArray[lose]);

    $("#current").text(outputArray).addClass("box-text");
    $("#used").text(alphaArray).addClass("box-text");


    if (lose === 10) {
        var result = "Sorry, you lose.";
        // How do I stop the event?
    }

    if (win === lettersArray.length) {
        var result = "You win!";
        // How do I stop the event?
    }


}
