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
var misteryLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
//Then, the computer must choose a random letter from our "misteryLetters" array
var myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];


//When the user releases a key on the keyboard:
document.onkeyup = function(event) {
    //Print 'myRandomLetter' in the console to check my progress & ensure my code is working so far
    console.log("COMPUTER GUESSED: " + myRandomLetter) 
    //Convert user's entry to lowercase
    userLetter = event.key.toLowerCase();
    //Print 'userLetter' in the console
    console.log("You guessed: " +userLetter)

    //If user guesses correctly:
    if(userLetter === myRandomLetter) {
        //increment wins
        wins++;
        //reset array 
        guessedLetters = [];
        //reset number of guesses left
        guessesLeft = 5;
        //Congratulate the user to keep her/him engaged in the game
        alert("You're a Supernova Star!🤩")
        //computer must select a different letter
        myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
    } 

    //If userLetter is not equals to myRandomLetter, push userLetter inside the empty array
    else if(userLetter !== myRandomLetter) {
            guessedLetters.push(userLetter);
            //decrease number of guesses left by 1
            guessesLeft--;
    }
    
    //If guessesLeft = to zero:
    if(guessesLeft === 0) {
        //increment losses by 1
        losses++;
        //reset array
        guessedLetters = [];
        //reset guessesLeft
        guessesLeft = 5;
        //alert user game is over
        alert("GAME OVER");
        //computer must select a new letter
        myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
    }
    
    //Reach to DOM & update HTML tags by grabbing the element tag id's
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remaining").innerHTML = guessesLeft;
    document.getElementById("keepTrack").innerHTML = guessedLetters;
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
        
