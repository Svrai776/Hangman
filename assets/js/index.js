// random word generator , utilized for computer word choice
document.onkeyup = function(event) {
    var userTextChoice = document.getElementById("directions-text");
    userTextChoice.textContent = event.key;



    var computerWordChoice = ["ipad","iphone","tech","apple"];
    var randomWord = computerWordChoice[Math.floor(computerWordChoice.length * Math.random())];

    var wins= []; //user correct guesses
    var losses= []; //user incorrect guesses
    var remainingTries= 9; //remaining guesses




//get elements
var remainingTries= document.getElementById("remainingtries-text");
var wins= document.getElementById("wins-text");
var losses= document.getElementById("losses-text");

}

var computerWordChoice = ["ipad","iphone","tech","apple"];
var randomWord = computerWordChoice[Math.floor(computerWordChoice.length * Math.random())];
var anwserArray= [];
for( var i= 0; i< randomWord.length; i++){
    anwserArray[i]= "_";
}

console.log(anwserArray);
var userInput = document.getElementById("user-input");

userInput.value = anwserArray.join(' ')

var remainingLetters = computerWordChoice.length;

while(remainingLetters>0){
    if(guess===null){
        break;
    }
    // else if (guess.length !== 1){
    //     //document.getElementById("direction-text") = textContent.("Please enter a single letter.");
    // }
    else {
        for (var a= 0; a<randomWord.length; a++){
            if(computerWordChoice[a]=== guess) {
                anwserArray[a] = guess; remainingTries--;
            }
        }
    }
}

