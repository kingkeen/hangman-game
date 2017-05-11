// ITEMS THAT NEEDS TO BE CODES / VARIABLES:

// DASHBOARD TO CONTAIN:
// 		- HOW MANY CHANCES LEFT
// 		- HOW MANY CHANGES TAKEN
// 		- HOW MANY WINS SO FAR
// 		- HOW MANY LOSES SO FAR

// VARIABLES
// 	- 
// 	- 
// 	- LETTERS CHOSEN, 7 total chances
		// total choices - letters chosen = choices remaining
// 	- CURRENT WORD IN PLAY



// ARRAYS
// 	- word bank
// 	- LETTERS CHOSED
// 	- 

// start game:
// "click to start" and start image of a man robbing a bank - will save this for last to code

//creates the word bank array 
var wordBank = ["pizza", "pineapple", '"jalapeno"', '"habanero"', "rocket", "laptop", "aquaduct", "princess", "felines", "kittens", "cellphone", "painting", "symphony"];

//creates array of letters chosen so far
var lettersArray = [];

//creates variable to hide selected word
var wordCurrent;

//creates variable that stores the array converted from the word that was chosen from the word bank. 
var currentWordArray = [];

//variable of the length of the current word
var wordLength;

//creates variable to hold the onkeyup letter
var chosenLetter;

// variable array of the current word of "_" 
var wordHidden;

// variable array for the letters that have been guessed by player
var chosenLettersArray = [];
var correctGuesses = [];

// creates variable for choices remaining before loosing





//LOOP-1 will run for as long as there are lives left.
function hangman() {


//random word is chosen from the wordbank and saved to a variable ("current word" - start's the current word's loop)

	var wordCurrent = wordBank[3];
	// console.log('wordCurrent', wordCurrent);
	
	//code that converts the word chosen from the wordbank into an array, so it can be indexed. 
	var currentWordArray = Array.from(wordCurrent);
	// console.log('currentWordArray', currentWordArray);

	//Display livesLeft, chosenLetter array, 
	var chosenLettersArray = document.querySelector("#chosenLettersArray");

	var livesLeft = document.querySelector("#lives-left");

	//Display is changed to show the empty slots of letters
	for (i = 0; i < wordLength; i++) {
		wordCurrent += "_ ";
		
		//writes to HTML the number of letters of the hidden random word. 
		var hiddenLines = document.querySelector("#hiddenLines");

		console.log(wordCurrent);
		console.log(wordLength);
	};

		
	// OnKeyUp saved to chosenLetter,
	document.onKeyUp = function(event) {
		console.log('hi');
		var chosenLetter = event.key;
		chosenLettersArray.push(chosenLetter);



	    // Letter is compared to Array of chosen letters, [THIS COULD BE DONE BETTER IN A FOR-LOOP...? ]
		
		if ((currentWordArray[j].charAt(0) === "chosenLetter") || (currentWordArray[j].charAt(1) === "chosenLetter") || (currentWordArray[j].charAt(2) === "chosenLetter") || (currentWordArray[j].charAt(3) === "chosenLetter") || (currentWordArray[j].charAt(4) === "chosenLetter") || (currentWordArray[j].charAt(5) === "chosenLetter") || (currentWordArray[j].charAt(6) === "chosenLetter") || (currentWordArray[j].charAt(7) === "chosenLetter") || (currentWordArray[j].charAt(8) === "chosenLetter")) {
			correctGuesses.push(chosenLetter);
			//add the letter to the appropriate index location of variable Array "hiddenLines" so that the letter appears instead of "_", add to chosenLettersArray.

		  } else {
		  	livesLeft--;
		  }		

			//if all letters have been chosen in the wordHidden, then Alert "You are pardoned"
			

	};

	
	
		// LOOP-3

		// 	if letter is present in chosenLetter, then it will return to beginning of OnKeyUp  (loop-2) with no changes.

		// 	if letter is new to array, then add it and proceed to next step. 
		
		// 	LOOP-4
		// 		letter is saved to array of chosen letters for that game, array display is updated to show player their chosen letters.

		// 		letter is compared to the letters of the current word

		// 		LOOP-5
		// 			if letter is in word, then the letter is displayed;
		// 			will search word again for letter, 
		// 			if not found then boolean False and will exit loop to loop-4.

				
		// 		if letter is not in the word, then one of the livesLeft is deducted and the image array

				
		// 		if zero livesLeft, then Alert "you are dead"

				
		// 		else, moves to LOOP-2

};





document.addEventListener("DOMContentLoaded", function(event) {
    hangman();
  });












