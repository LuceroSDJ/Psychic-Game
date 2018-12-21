//Define variables for Wins, Losses, Guesses & Your Guesses so Far
//Increase by 1 if user wins
var Wins = 0;
//Increse by 1 if user loses
var losses = 0;
//User has 10 opportunities to guess the letter correctly
var guessesLeft = 11;
//We want to create an empty array to be able to push the letters (failed attempts) & display the list of letters on the screen for our user to see 
var guessedLetters = [];


///First, computer selects a random letter and prints it in the console. We can start by saving an empty array in the attempts variable.
    //Later, we can push the attempted letters to the empty array so the user does not lose twice if she/he press the same letter *********
// var attempts = [];


//First, the computer selects a random letter and prints it in the console
//How will the computer select a random letter?????????????????
    //Math.random() returns a random number between 0 & 1
    //Math.random() + Math.floor() * # return random integers (so how can I return a random letter??????)
                                    //I do not know? ....research......*********go to office hours
    //We can start by create an array of random letters from which the computer can choose from...
var misteryLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

//Then, we have to make the computer choose a random letter from our 'misteryLetters' array
var myRandomLetter = misteryLetters[Math.floor(Math.random() * misteryLetters.length)];

//Now, the computer must recognize the action of our user pressing a key. Use onkeyup! See previous class activities.
//When the user releases a key on the keyboard, the letter must be printed on the screen in front of 'Your Guesses so Far:'
document.onkeyup = function(event) {
    console.log("computer guess " + myRandomLetter);   

    //Converts user's guessed letter to lowercase, and saves it to the variable 'attempts'..changed variable to guessedLetters
    guessedLetters = event.key.toLowerCase();
    if(guessedLetters === myRandomLetter) {
        //Congratulate the user to encourage her/him to keep playing!
        alert("Congratulations!!!");
        //Increase wins by 1
        wins++; 
        wins.textContent = wins; //did not work
        // document.getElementById(wins.value).innerHTML = "wins";  (console says 'can't set innerHTML property????????????????)😭
        // wins.textContent = event.key; ***worked at some point, but it printed the letter 😱


        //I need the wins to increase by 1 and display them on the screen
        //tried document.write but it overwrites everything so not the best option here
        // wins.textContent += attempts + ''; maybe??? did not work

        //if guessed incorrectly, display the incorrect letter in front of Your Guesses so Far
        } else {
            if(guessedLetters !== myRandomLetter);
                console.log("you guessed " + guessedLetters);
                // document.getElementById("keepTrack").innerHTML = guessedLetters;
                //here I want to print the guessed letters in front of your guesses so far
                //increments losses
                losses++;
                //decrements guessesLeft
                guessesLeft--;
                // Guesses Left must be reset to 11 (10 chances)


                //display the letter the user pressed in front of guessed letters
                //a for loop could help
               
            }



        }
       

    
        
       
        
        
        
        //Keep track of the score 

        //document.getElementById("Wins").innerHTML = function(event); ====DO NOT USE THIS ONE
        //USE targetDiv.textContent = “text”;
    

    // Function that updates the score
    //I believe I need to grab a reference to <strong id...>
    // var guessedL = document.getElementById("wins"); ----failed attempt..delete before submitting
    //I need to keep working on this, but I will back to my previous function




        // var wins = getElementById("wins"); just keep in mind. Might be useful later on


        ////////////////WANTS///////////////////////////
        //this is just an idea up in the air for  now: I want to display the possible options on the screen, make them 3-D, and position them like if they were in a bridge about to fall.
        //Then, each time the user clicks on the incorrect letter, I want to create a dramatic effec!!!!!
        //I want the letter to fall from the bridge and break at the bottom of the screen. I want the debris to stay visible at the bottom of the page. 
        //I want to keep the user engaged and make her/him play again 
    


///test 
// function newFunction() {
//     document.getElementById("wins").innerHTML = function () { };
        
