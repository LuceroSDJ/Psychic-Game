//Define variables for Wins, Losses, Guesses & Your Guesses so Far
//Increase score by 1 if user wins
var wins = 0;
//Increse score by 1 if user losses
var losses = 0;
//User has 5 opportunities to guess the letter correctly
var guessesLeft = 5;
//We want to create an empty array to be able to push the letters (failed attempts) & display the list of letters pressed visible to the user
var guessedLetters = [];
//Declare a variable in the outer scope to be assigned later inside my function
var userLetter;

//I can start by creating an array of random letters from which the computer can choose from:
var misteryLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
//initialize a variable to later assign a random letter
var randomLetter = null;

// Generate a function to generate a new random letter
var generateNewRandom = function () {
    //here we generate a random letter from our misteryLetters array & store it in randomLetter variable initialized globally
    randomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
}
//call function to generate random letter on page load
generateNewRandom();

// generate a function to reset our guessesLeft & guessedLetters array
var reset = function () {
    guessesLeft = 5;
    guessedLetters = [];
    
    //document.getElementById("remaining").innerHTML = guessesLeft;  //test
    setTimeout(function () {
        document.getElementById("answer").style.visibility = "hidden";
        document.getElementById("remaining").innerHTML = guessesLeft;
        document.getElementById("keepTrack").innerHTML = guessedLetters.join(", ");
        alert("Guess the new random letter!");
        document.getElementById("image").src = "assets/images/questionmark4.png"
    }, 100);
}


//grab reference to the button
var clear = document.getElementById("erase");
clear.addEventListener("click", function () {
    var clear = confirm("Are you sure you want to set your scores back to zero?");
    if (clear) {
        window.location.reload(true);
    }
    else {
        alert("Let's keep playing!");
    }
});


// "The keyup event fires when the user releases a key that was previously pressed"
// syntax:  target.onkeyup = functionRef;
//"The function receives a KeyboardEvent object as its sole argument"
document.onkeyup = function (event) {
    //Print 'myRandomLetter' in the console to check my progress & ensure my code is working so far
    console.log("RANDOM LETTER: " + randomLetter);
    //KeyboardEvent.key "Returns a DOMString representing the key value of the key represented by the event." 
    console.log(event);
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

    //Then, grab the value of the key pressed by the user & convert to upper case to match our misteryLetter
    userLetter = event.key.toUpperCase();
    //Print 'userLetter' in the console
    console.log("You guessed: " + userLetter);

    // =============   TEST CODE =====================
    //I want to create a for loop to check if a key has already been incorrectly guessed
    //clicking on the same letter twice should not affect the number of guesses left & should not be pushed to guessedLetters array
    for (var i = 0; i < guessedLetters.length; i++) {
        if (guessedLetters[i] === userLetter) {
            return alert("letter \"" + guessedLetters[i] + "\" has already been guessed incorrectly. \n Choose a different letter!");
        }
    }

    console.log("incorrect guesses: " + guessedLetters);


    //If user guesses correctly:
    if (userLetter === randomLetter) {
        //increment wins
        wins++;

        // Grab reference to image tag
        document.getElementById("answer").innerText = event.key.toUpperCase(); 
        document.getElementById("answer").style.visibility = "visible";
        document.getElementById("image").src = "assets/images/test7.txt";
            
        //reset guessesLeft & empty guessedLetters array 
        reset();
        //Congratulate the user to keep her/him engaged in the game
        //alert("You're a Supernova Star!🤩")
        //call function to generate a new random letter from our array
        generateNewRandom();
    }

    //If userLetter is not equals to myRandomLetter, push userLetter inside the empty array "guessedLetters"
    else if (userLetter !== randomLetter) {
        guessedLetters.push(userLetter);
        //decrease number of guesses left by 1
        guessesLeft--;
        document.getElementById("remaining").innerHTML = guessesLeft;
        document.getElementById("keepTrack").innerHTML = guessedLetters.join(", ");
    }

    //If guessesLeft === to zero:
    if (guessesLeft === 0) {
        //increment losses by 1
        document.getElementById("remaining").innerHTML = guessesLeft;
        //reset guessesLeft & empty guessedLetters array 
        reset();
        //document.getElementById("remaining").innerHTML = guessesLeft;
    
        //alert user game is over
        //setTimeout(function(){reset(); }, 1000);  //TEST
        //alert("GAME OVER");
        losses++;
        //call function to generate a new random letter from our array
        generateNewRandom();
    }

    //Reach to DOM & update HTML tags by grabbing the element tag id's
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    //document.getElementById("remaining").innerHTML = guessesLeft;
    //document.getElementById("keepTrack").innerHTML = guessedLetters.join(", ");
}


//Reset button refreshes the page, but user must have the option to 'cancel' & keep playing
// function clearScores(){
//     var clear = confirm("Are you sure you want to set your scores back to zero?");
//     if(clear) { 
//         window.location.reload(true);
//     }
//     else {
//         alert("Let's keep playing!");
//     } 
// }
    