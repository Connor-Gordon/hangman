

// pull out word from array and create variables



// pull out words with 3 or more letters from the array commonWords and save the new array to the variable result
var results = commonWords.filter(word => word.length >= 3)
// pull out one of the words from the new results array, and set it to our variable currentWord for the game
var currentWord = results[Math.floor(Math.random() * results.length)];






// create variables for throughout


// lets set a global variable for answer so we can use it all over
var answer = ""
// lets give the user three more turns than the number of letters in their word
var counter = currentWord.length + 3
// and well create an empty array to store the guesses
var answersArray = []

console.log(currentWord)
console.log(counter)



// begin with underscores


// for every letter throughout the length of the array, display an underscore
for (var i = 0; i < currentWord.length; i++){
	answersArray[i] = "_ "
	document.getElementById("wordDisplay").innerHTML = answersArray
}


answer = answersArray.join("")
document.getElementById("wordDisplay").innerHTML = answersArray.join("")



document.getElementById("button").addEventListener("click", counterFN)
document.getElementById("button").addEventListener("click", displayFN)



// create function counterFN 


function counterFN(){
	// set the counter to decrease by one each guess
	counter = counter - 1
	// display "attempts left:" and the counter to the counter id
	document.getElementById("counter").innerHTML = `Attempts left: + ${counter}`
	console.log(counter)


	// if the counter reaches 0 then...
	if (counter < 1){
		// display to alert how much they suck
		alert("You suck, game over, refresh to play again!")
	}
}


// create a function displayFN to push guess to browser

function displayFN(){
	// for each letter in the currentWord, 
	var letter = document.getElementById("input").value
	for (var i = 0; i < currentWord.length; i++){
		// if the word contains a letter that matches whats typed in then...
		if (currentWord[i] === letter){
			// put that letter into the answersArray in place of the underscore
			answersArray[i] = letter
			// and display the letter to the answers array
			document.getElementById("wordDisplay").innerHTML = answersArray.join("")
			document.querySelector("#input").value = ""	
			document.getElementById("input").focus()
		} else {
			document.querySelector("#input").value = ""	
			document.getElementById("input").focus()
		}
	}
	console.log(answersArray)
	// if the answers array changes to match the current word then...
	if (answersArray.join("") == currentWord){
		// display to alert pop up that they won the game
		alert("You won!")
	}
	

} 







