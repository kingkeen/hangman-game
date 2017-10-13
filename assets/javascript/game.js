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

//creates array of letters chosen so far
var lettersArray = [];
//creates variable to hide selected word
var wordCurrent = "";
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
var hangman = {
	wordBank: {
		pizza: {},
		pineapple: {},
		jalapeno: {},
		habanero: {},
		rocket: {},
		aquaduct: {},
		princess: {},
		felines: {},
		kittens: {},
		symphony: {}
	},

	//initial set of variables
	wordInPlay: null,
	lettersOfTheWord: [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,

//random word is chosen from the wordbank and saved to a variable ("current word" - start's the current word's loop)
	setup: function() { 
		// this will pick the random work from the wordbank
		var objKeys = Object.keys(this.wordBank);
		this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

		//this will split the word into letters
		this.lettersOfTheWord = this.wordInPlay.split("");
		
		//this calls the function to show letters as _ _ _
		this.rebuildWordView();
		// keeps track of guesses
		this.processUpdateTotalGuesses();
	},

	updatePage: function(letter){
		// checks to see if it is gameover
		if (this.guessesLeft === 0){
			this.restartGame();
		}

		else {
			//handles incorrect guesses
			this.updateGuesses(letter);
			//updates correct guesses
			this.updateMatchedLetters(letter);
			//redoes the site to update for the current guess
			this.rebuildWordView();

			//if the user wins!
			if (this.updateWins() === true){
				this.restartGame();
			}
		}
	},

	updateGuesses: function(letter) {
		// guesses are updated here

		if ((this.guessedLetters.indexOf(letter) === -1) && this.lettersOfTheWord.indexOf(letter) === -1) {
			// adds the letter to the guessed array
			this.guessedLetters.push(letter);
			//decreases guesses left by 1
			this.guessesLeft--;
			//updates to the page
			document.querySelector('#lives-left').innerHTML = this.guessesLeft;
			document.querySelector('#chosenLetters').innerHTML = this.guessedLetters.join(", ");

		}
	},

	processUpdateTotalGuesses: function() {
		// player gets guesses relative to size of word
		this.totalGuesses = this.lettersOfTheWord.length + 5;
		this.guessesLeft = this.totalGuesses;

		// sends the guesses remaining to the page
		document.querySelector('#lives-left');
	},

	updateMatchedLetters: function(letter) {
		// function will loop thru the word array and match or not match the letter
		for(var i=0; i < this.lettersOfTheWord.length; i++) {
			if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
				this.matchedLetters.push(letter);
			}
		}
	},

	rebuildWordView: function() {
		var wordView = "";

		//loops thru word
		for (var i=0; i< this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
				wordView += this.lettersOfTheWord[i];
			}
			else {
				wordView += "&nbsp;_&nbsp;";
			}
		}

		//updates the HTML
		document.querySelector('#hiddenLines').innerHTML = wordView;
	},

	// restarts the game 
	restartGame: function() {
		document.querySelector("#chosenLetters").innerHTML = "";
		this.wordInPlay = null;
		this.lettersOfTheWord = [];
		this.matchedLetters = [];
		this.guessedLetters = [];
		this.guessesLeft = 0;
		this.totalGuesses = 0;
		this.letterGuessed = null;
		this.setup();
		this.rebuildWordView();
	},

	updateWins: function(){
		var win;

		if (this.matchedLetters.length === 0){
			win = false;
		}
		else {
			win = true;
		}

		for (var i =0; i < this.lettersOfTheWord.length; i++) {
			if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1){
				win = false;
			}
		}
		
		if (win){
			this.wins = this.wins +1;
			document.querySelector('#wins').innerHTML = this.wins;
			return true;
		}
		
		return false;
	}
};



hangman.setup();

document.onkeyup = function(event) {
	hangman.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	hangman.updatePage(hangman.letterGuessed);	
}






	// console.log('wordCurrent', wordCurrent);
	
	//code that converts the word chosen from the wordbank into an array, so it can be indexed. 
// 	var currentWordArray = Array.from(wordCurrent);
// 	// console.log('currentWordArray', currentWordArray);

// 	//Display livesLeft, chosenLetter array, 
// 	var chosenLettersArray = document.querySelector("#chosenLettersArray");

// 	var livesLeft = document.querySelector("#lives-left");

// 	//Display is changed to show the empty slots of letters
// 	for (i = 0; i < wordLength; i++) {
// 		wordCurrent += "_";
		
// 		//writes to HTML the number of letters of the hidden random word. 
// 		var hiddenLines = document.querySelector("#hiddenLines");

// 		console.log(wordCurrent);
// 		console.log(wordLength);
// 	};

		
// 	// OnKeyUp saved to chosenLetter,
// 	document.onKeyUp = function(event) {
// 		console.log('hi');
// 		var chosenLetter = event.key;
// 		chosenLettersArray.push(chosenLetter);



// //loop will go thru the array of the word chosen and check each index for the letter, then send that letter to the array with the '-' underscores. 
// 			for (var i = 0; i < currentWordArray.length - 1;  i++) {
// 				if (currentWordArray[i] == chosenLetter) {
// 					wordHidden[i]=chosenLetter;
// 				};
// 			};



// //Le++er is compared to Array of chosen letters, [THIS COULD BE DONE BETTER IN A FOR-LOOP...? ]

// 		}
// 		// if ((currentWordArray[j].charAt(0) === "chosenLetter") || (currentWordArray[j].charAt(1) === "chosenLetter") || (currentWordArray[j].charAt(2) === "chosenLetter") || (currentWordArray[j].charAt(3) === "chosenLetter") || (currentWordArray[j].charAt(4) === "chosenLetter") || (currentWordArray[j].charAt(5) === "chosenLetter") || (currentWordArray[j].charAt(6) === "chosenLetter") || (currentWordArray[j].charAt(7) === "chosenLetter") || (currentWordArray[j].charAt(8) === "chosenLetter")) {
// 		// 	correctGuesses.push(chosenLetter);
// 		// 	//add the letter to the appropriate index location of variable Array "hiddenLines" so that the letter appears instead of "_", add to chosenLettersArray.

// 		//   } else {
// 		//   	livesLeft--;
// 		//   }		

// 			//if all letters have been chosen in the wordHidden, then Alert "You are pardoned"
			

// 	};

	
	
// 		// LOOP-3

// 		// 	if letter is present in chosenLetter, then it will return to beginning of OnKeyUp  (loop-2) with no changes.

// 		// 	if letter is new to array, then add it and proceed to next step. 
		
// 		// 	LOOP-4
// 		// 		letter is saved to array of chosen letters for that game, array display is updated to show player their chosen letters.

// 		// 		letter is compared to the letters of the current word

// 		// 		LOOP-5
// 		// 			if letter is in word, then the letter is displayed;
// 		// 			will search word again for letter, 
// 		// 			if not found then boolean False and will exit loop to loop-4.

				
// 		// 		if letter is not in the word, then one of the livesLeft is deducted and the image array

				
// 		// 		if zero livesLeft, then Alert "you are dead"

				
// 		// 		else, moves to LOOP-2











