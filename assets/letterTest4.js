//my attempt to submit by midnight
//Define variables for Wins, Losses, Guesses & Your Guesses so Far
//Increase by 1 if user wins
var wins = 0;
//Increse by 1 if user losses
var losses = 0;
//User has 10 opportunities to guess the letter correctly
var guessesLeft = 11;
//We want to create an empty array to be able to push the letters (failed attempts) & display the list of letters on the screen for our user to see 
var guessedLetters = [];
//Declare a variable to be used in our function in the outer scope to assign it later inside my function
var userLetter;



///First, computer selects a random letter and prints it in the console. We can start by saving an empty array in the attempts variable.
    //Later, we can push the attempted letters to the empty array so the user does not lose twice if she/he press the same letter *********
// var attempts = [];


//+First, the computer selects a random letter and prints it in the console
//How will the computer select a random letter?????????????????
    //Math.random() returns a random number between 0 & 1
    //Math.random() + Math.floor() * # return random integers (so how can I return a random letter??????)
                                                //I do not know????? ....research......*********go to office hours
//We can start by creating an array of random letters from which the computer can choose from...
var misteryLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
//Then, we have to make the computer choose a random letter from our 'misteryLetters' array
var myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];

//Now, the computer must recognize the event of our user pressing a key. Use onkeyup! 

//When the user releases a key on the keyboard: the letter must be printed on the screen in front of 'Your Guesses so Far:'
document.onkeyup = function(event) {
    console.log("computer guess " + myRandomLetter) 
    if(guessesLeft === 0) {
        //reach to DOM and update guess left
        // document.getElementById("remaining").innerHTML = 0;
        alert("GAME OVER!");
        losses++;
        //last letter pressed remains displayed
        console.log(guessedLetters)
        guessedLetters = [];
        console.log(guessedLetters)
         //last letter pressed remains displayed
        // guessedLetters.splice(0,guessedLetters.length); DOES NOT WORK EITHER
        guessesLeft = 11;
        myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
        return;
    }
    //Convert letter pressed by user to lowercase, and save it to the variable 'userLetter'
    userLetter = event.key.toLowerCase();
    if(userLetter === myRandomLetter) {
        //Congratulate the user to encourage her/him to keep playing!
        alert("Congratulations!!!");
        //Increase wins by 1
        wins++; 
        //Reset empty array
        guessedLetters = [];
        //Reset guessesLeft
        guessesLeft = 11;
        //Computer must choose a diffetent letter
        myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];
        //wins.textContent = wins; //did not work????????
        // document.getElementById(wins.value).innerHTML = wins;  (console says it can't set innerHTML property????????????????)😭

        //I need the wins to increase by 1 and display them on the screen
        //tried document.write but it overwrites everything so not the best option here
        // wins.textContent += attempts + ''; maybe??? did not work

        //if guessed incorrectly, display the incorrect letter in front of Your Guesses so Far
        } else {
            // if(guessedLetters !== myRandomLetter);  commented out for testing other statement 12/21/18  
            console.log("you guessed: " + userLetter);
            //PUSH INCORRECT GUESS TO ARRAY  
            guessedLetters.push(userLetter);
            //increments losses
            // losses++;
            //here I want to print the guessed letters in front of your guesses so far
        } 
        //decrements guessesLeft
        guessesLeft--;

        //display the letter the user pressed in front of guessed letters
         //a for loop could help    
                
                
                
               
                // document.getElementById("keepTrack").innerHTML = guessedLetters;
                

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("remaining").innerHTML = guessesLeft;
        document.getElementById("keepTrack").innerHTML = guessedLetters;

    }