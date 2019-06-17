// Initiate arrays and variables.
var wordArray = ["SHADE", "CURVE", "STORE", "PARK", "CLEAR", "MOVE", "AMBIENT", "BRAZEN", "REMOTE", "DUSTY"];
var imageArray = ["assets/images/0.jpg", "assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg", "assets/images/9.jpg", "assets/images/10.jpg"];
var checkAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaArray = [];
var outputArray = [];
var wordLine = "";
var win = 0;
var lose = 3;
var nogo = 3;
var result = "";

$(document).ready(function () {

    // Choose random word from array.
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    // Create array from random word.
    var lettersArray = randomWord.split("");

    var printArray = function (array) {
        var returnString = "";
        for (var i = 0; i < array.length; i++) {
            returnString += array[i].trim() + " ";
        }
        return returnString;
    }
    console.log("random word is " + lettersArray);

    $("#playAgain").hide();


    // Create the word grid the user sees.
    for (var i = 0; i < lettersArray.length; i++) {
        outputArray[i] = " _";
        wordLine += outputArray[i];
    }

    console.log(outputArray);
    $("#current").text(wordLine).addClass("box-text");
    $("#used").text(alphaArray).addClass("box-text");

    // // Main game event.

    document.onkeyup = function (event) {
        var userGuess = event.key.toUpperCase();
        if (!checkAlpha.includes(userGuess)) {
            return;
        }

        nogo = 0;

        console.log("array length:" + alphaArray.length);

        // Makes sure letter hasn't already been used.
        for (var i = 0; i < alphaArray.length; i++) {
            userGuess = userGuess.trim();
            alphaArray[i] = alphaArray[i].trim();
            if (userGuess === alphaArray[i]) {
                return;
            }
        }


        alphaArray.push(" " + userGuess);
        console.log(alphaArray);

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

        $("#graphic").attr("src", imageArray[lose]);
        wordLine = "";
        for (var i = 0; i < lettersArray.length; i++) {
            wordLine += outputArray[i];
        }

        $("#current").text(wordLine).addClass("box-text");
        $("#used").text(printArray(alphaArray)).addClass("box-text");


        if (lose === 10) {
            $("#result").text("Guess the pressure got to you.");
            $("#playAgain").show();

            // How do I stop the event?
        }

        if (win === lettersArray.length) {
            $("#result").text("Nicely done!");
            $("#playAgain").show();

            // How do I stop the event?
        }
    }
});
