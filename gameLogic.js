// Generate random colors
var colors = generateRandomColor();
//Randomly select a correct result
var correctResult = correctColor();

var squares = document.querySelectorAll(".square");
var result = document.querySelector("#correct-result");
var header = document.querySelector(".header");
var resetButton = document.querySelector("#new-game");
var message = document.querySelector("#message");

/* MAIN */
changeSquaresColor();
displayColorCode();
/* ---- */


/* Function to reset the game everytime the button is clicked */
resetButton.addEventListener("click", function(){
	colors = generateRandomColor(); // Generate 6 new random colors
	changeSquaresColor(); // Change the squares' color
	correctResult = correctColor(); // Generate new correct result
	displayColorCode(); // Update the color code
	resetButton.textContent="New Game"; 
	message.textContent=""; 
	header.style.backgroundColor="#334b72";
})

/* Function to generate random number from 0 to 255 (inclusive)*/
function randomColor() {
	var randomRed = Math.floor(Math.random() * 256);
	var randomGreen = Math.floor(Math.random() * 256);
	var randomBlue = Math.floor(Math.random() * 256);
	return ("rgb("+randomRed.toString()+", "+randomGreen.toString()+", "+randomBlue.toString()+")");
}
/*------------------------------------------------------------------------*/

/* Function to display the correct RGB code */
function correctColor() {
	var correct = Math.floor(Math.random()*6);
	return colors[correct];
}

//Generate an array of 6 random colors
function generateRandomColor() {
	var colors=[];
	for (var i=0;i<6;i++){
		colors.push(randomColor());
	}
	return colors;
}


// Function to change the color of the squares to random color
function changeSquaresColor(colorCode) {
	for (var i=0; i<squares.length;i++){
		if (colorCode === undefined) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.backgroundColor = colorCode;
		}
	}
}


// Game Logic
for (var i=0; i<squares.length;i++){
	// Add event listener to all the squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor==correctResult) {
			header.style.backgroundColor = correctResult; // Change background of the header to match result
			changeSquaresColor(correctResult); // Change all squares to correct result
			resetButton.textContent="Play Again?";
			message.textContent="Correct!";
		} else {
			this.style.backgroundColor="rgb(35, 35, 35)";
			message.textContent="Try Again!";
		}
	})
}

// Function to display the correct color code on top
function displayColorCode() {
	result.textContent = correctResult;
}



