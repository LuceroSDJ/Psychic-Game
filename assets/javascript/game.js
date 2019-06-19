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
var generateNewRandom = function() {
    //here we generate a random letter from our misteryLetters array & store it in randomLetter variable initialized globally
    randomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
}
//call function to generate random letter on page load
generateNewRandom();

// generate a function to reset our guessesLeft & guessedLetters array
var reset = function () {
    guessesLeft = 5;
    guessedLetters = [];
}

// "The keyup event fires when the user releases a key that was previously pressed"
// syntax:  target.onkeyup = functionRef;
//"The function receives a KeyboardEvent object as its sole argument"
document.onkeyup = function(event) {
    //Print 'myRandomLetter' in the console to check my progress & ensure my code is working so far
    console.log("RANDOM LETTER: " + randomLetter); 

    //Then, grab the value of the key pressed by the user & convert to upper case to match our misteryLetter
    //KeyboardEvent.key "Returns a DOMString representing the key value of the key represented by the event." 
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
    userLetter = event.key.toUpperCase();
    //Print 'userLetter' in the console
    console.log("You guessed: " + userLetter);

    // =============   TEST CODE =====================
    //I want to create a for loop to check if a key has already been incorrectly guessed
    //clicking on the same letter twice should not affect the number of guesses left & should not be pushed to guessedLetters array
    for(var i = 0; i < guessedLetters.length; i++) {
        if(guessedLetters[i] === userLetter) {
            return alert("letter \"" + guessedLetters[i] + "\" has already been guessed incorrectly. \n Choose a different letter!");
        }
    }

    console.log("incorrect guesses: " + guessedLetters);
    
    //If user guesses correctly:
    if(userLetter === randomLetter) {
        //increment wins
        wins++;
        //reset guessesLeft & empty guessedLetters array 
        reset();
        //Congratulate the user to keep her/him engaged in the game
        alert("You're a Supernova Star!🤩")
        //call function to generate a new random letter from our array
        generateNewRandom();
    } 

    //If userLetter is not equals to myRandomLetter, push userLetter inside the empty array
    else if(userLetter !== randomLetter) {
            guessedLetters.push(userLetter);
            //decrease number of guesses left by 1
            guessesLeft--;
    }
    
    //If guessesLeft === to zero:
    if(guessesLeft === 0) {
        //increment losses by 1
        losses++;
        //reset guessesLeft & empty guessedLetters array 
        reset();
        //alert user game is over
        alert("GAME OVER");
         //call function to generate a new random letter from our array
         generateNewRandom();
    }


    
    //Reach to DOM & update HTML tags by grabbing the element tag id's
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remaining").innerHTML = guessesLeft;
    document.getElementById("keepTrack").innerHTML = guessedLetters.join(", ");
    ;
}

//Reset button refreshes the page, but user must have the option to 'cancel' & keep playing
function clearScores(){
    var clear = confirm("Are you sure you want to set your scores back to zero?");
    if(clear) {
        window.location.reload(true);
    }
    else {
        alert("Let's keep playing!");
    } 
}
        
