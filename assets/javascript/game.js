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

start game:
"click to start" and start image of a man robbing a bank - will save this for last to code

//creates the word bank array 
var wordBank [pizza, pineapple, jalapeno, habanero, laptop, aquaduct, cellphone, painting, symphony];

//creates array of letters chosen so far
var lettersArray [];

//creates variable to hide selected word
var wordCurrent;

//creates variable that stores the array converted from the word that was chosen from the word bank. 
var currentWordArray;

	//code that converts the word chosen from the wordbank into an array, so it can be indexed. 
    //var currentWordArray = Array.from(wordCurrent)

//variable of the length of the current word
var workLength;

//creates variable to hold the onkeyup letter
var chosenLetter;

// variable array of the current word of "_" 
var wordHidden;

// creates variable for choices remaining before loosing
var livesLeft = 7; 


LOOP-1

//random word is chosen from the wordbank and saved to a variable ("current word" - start's the current word's loop)

	//Display is changed to show the empty slots of letters
	for (i = 0; i < wordsLong; i++) {
		wordHidden += "_" + " ";
	}

	LOOP-2


		OnKeyUp saved to chosenLetter, 
		Display livesLeft, chosenLetter array, 


		Letter is compared to Array of chosen letters, 

			if all letters have been chosen in the wordHidden, then Alert "You are pardoned"


		LOOP-3
			if letter is present in chosenLetter, then it will return to beginning of OnKeyUp  (loop-2) with no changes.

			if letter is new to array, then add it and proceed to next step. 
		
			LOOP-4
				letter is saved to array of chosen letters for that game, array display is updated to show player their chosen letters.

				letter is compared to the letters of the current word

				LOOP-5
					if letter is in word, then the letter is displayed;
					will search word again for letter, 
					if not found then boolean False and will exit loop to loop-4.

				
				if letter is not in the word, then one of the livesLeft is deducted and the image array

				
				if zero livesLeft, then Alert "you are dead"

				
				else, moves to LOOP-2



















