## Hangman | Word guessing game

The game selects a random word and displays the length of the word to the user.
The words are all less than 6 letters.

The user gets 9 tries to guess the letters that constitute the word.
Each time the user guesses a letter a try is used.
If the user gets a try correct then the letter is displayed in the correct position/index.

The game will keep a running score of how many tries were success and how many were failure as well as how many tries the user has left.

## TODO
- [x] create ui layout for game
- [x] create game initialization with random word
- [x] create messaging for success
- [x] create messaging for failure
- [x] create event handler to track user input
- [x] track the answer
- [x] track wins
- [x] track losses
- [x] fix answer lines
- [x] create event handlers to track the score
