// pull out words with 3 or more letters from the array commonWords and save the new array to the variable result
var results = commonWords.filter(word => word.length >= 3)
// pull out one of the words from the new results array, and set it to our variable currentWord for the game
var currentWord = results[Math.floor(Math.random() * results.length)];

// lets set a global variable for answer so we can use it all over
var answer = ""
// lets give the user two more turns than the number of letters in their word
var counter = currentWord.length + 2

// and well create an empty array to store the guesses
var answersArray = []

console.log(currentWord)
console.log(counter)

// create a function called begin that...
function begin(){
	// for every letter throughout the length of the array, display an underscore
	for (var i = 0; i < currentWord.length; i++){
		answersArray[i] = "_"
	// and join the underscores together into a string and display to the html id wordDisplay
	answer = answersArray.join("")
	document.getElementById("wordDisplay").innerHTML = answer
	}
}

// create another function called guess that...
function guess(){
	// pulls whatever value is entered into the input box and stores it in the variable letter
	var letter = document.getElementById("letter").value
	// and if they only put in one letter then....
	if (letter.length > 0 && letter.length < 2){
		for (var i = 0; i < currentWord.length; i++){
			// if the word contains a letter that matches whats typed in then...
			if (currentWord[i] === letter){
				// put that letter into the answersArray in place of the underscore
				answersArray[i] = letter
			}
		} 
		// set the counter to decrease by one each guess
		counter = counter - 1
		// display "attempts left:" and the counter to the counter id
		document.getElementById("counter").innerHTML = "Attempts left:" + counter
		// display the word to the answers array
		document.getElementById("wordDisplay").innerHTML = answersArray.join("")
	} 
	// // else if more or less than one letter is typed in, alert them that they are idiots
	// else if (letter.length < 0 && letter.length > 1) {
	// 	document.getElementById("message").innerHTML = "Only one letter at a time"
	// // else if anything other than a letter is typed in, alert them that they are idiots
	// } else if (typeof letter !== "string"){
	// 	document.getElementById("message").innerHTML = "It has to be a letter, no numbers or symbols"
	// }

	// // if the counter reaches 0 then...
	// if (counter = 0){
	// 	// display to the message how much they suck
	// 	document.getElementById("message").innerHTML = "You suck"
	// }
	// // if the answers array changes to match the current word then...
	// if (answersArray == currentWord){
	// 	// display to the message that they won the game
	// 	document.getElementById("message").innerHTML = "You won!"
	// }
}