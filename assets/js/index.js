var remainingTries = 9;
var wins = 0;
var losses = 0;
var userInput = '';

var remainingTriesElement = document.getElementById('remaining-tries');
var winsTextElement = document.getElementById('wins-text');
var lossesTextElement = document.getElementById('losses-text');
var userInputElement = document.getElementById("answer");
var answerElement = document.getElementById('anser');

var computerWordChoice = ["ipad","iphone","tech","apple"];
var randomWord = computerWordChoice[Math.floor(computerWordChoice.length * Math.random())];
var anwserArray= [];
for( var i= 0; i< randomWord.length; i++){
    anwserArray[i]= "_";
}
console.log(anwserArray);
userInput.innerText = anwserArray.join(' ');

remainingTriesElement.innerText = remainingTries;
winsTextElement.innerText = wins;
lossesTextElement.innerText = losses;



