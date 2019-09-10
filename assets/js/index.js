var remainingTries = 9;
var wins = 0;
var losses = 0;
var userInput = '';
var answer = null;

var remainingTriesElement = document.getElementById('remaining-tries');
var winsTextElement = document.getElementById('wins-text');
var lossesTextElement = document.getElementById('losses-text');
var userInputElement = document.getElementById('user-input');
var answerElement = document.getElementById('answer');
var answerArray = [];

initGame();

userInputElement.addEventListener('keyup', function (event) {
    var userInput = userInputElement.value;
    if (remainingTries === 0) {
        alert('Resetting game!')
        resetGame();
    }
    if (userInput) {
        console.log('userInput: ' + userInput);
        remainingTriesElement.innerText = --remainingTries;
        var success = answer.includes(userInput);

        if (success) {
            winsTextElement.innerText = ++wins;
            updateAnswerElement(userInput);
        } else {
            lossesTextElement.innerText = ++losses;
        }
    }
});

function initGame() {
    var computerWordChoice = ["ipad", "iphone", "tech", "apple"];
    var randomWord = computerWordChoice[Math.floor(computerWordChoice.length * Math.random())];
    answer = randomWord
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    console.log('answer: ' + answer)
    console.log('answerArray: ' + answerArray);
    answerElement.innerText = answerArray.join(' ');

    remainingTriesElement.innerText = remainingTries;
    winsTextElement.innerText = wins;
    lossesTextElement.innerText = losses;
}

function updateAnswerElement(userInput) {
    var indexOfInput = answer.indexOf(userInput);
    answerArray[indexOfInput] = userInput
    console.log('answer: ' + answer)
    console.log('answerArray: ' + answerArray);
    answerElement.innerText = answerArray.join(' ');
    if (!answerArray.includes('_')) {
        alert('Success you won! The anser is ' + answer);
        resetGame();
    }
}

function resetGame() {
    remainingTries = 9
    wins = 0;
    losses = 0;
    userInput = '';
    initGame();
    userInputElement.value = userInput;
}