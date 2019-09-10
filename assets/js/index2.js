
    //The onkeyup event occurs when the user releases a key (on the keyboard).
    document.onkeyup = function(event) {
    directionsText.textContent = "Can you guess the following word? Select one letter at a time!";

    var userChoiceText = event.key;
    var substrings = userChoiceText;
    length = substrings.length;
    // Display the user and computer guesses, and wins/losses/remainingtries.

      }

      userChoiceText.textContent = "You chose: " + userChoiceText;
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      remainingTriesText.textContent = "Tries Remaining: " + remainingtries;



    var computerChoices = ["tech", "ipad", "apple", "ipad"];
    var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var userChoiceArray=[];

    for ( var i = 0; i< computerChoices.length; i++){

      userChoiceArray[i] = "_";

    }

    var remainingLetterChoices = computerChoices.length;

    while(remainingLetterChoices>0){

    }

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var remainingtries = 0;

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var remainingTriesText = document.getElementById("remainingtries-text");


    // This function is run whenever the user presses a key.

