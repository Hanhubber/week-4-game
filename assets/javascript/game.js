var counter = 0;
var wins = 0;
var losses =0;
var randomNumber = 0;
var crystal1Value = 0;
var crystal2Value = 0;
var crystal3Value = 0;
var crystal4Value = 0;

startGame();
function startGame() {
	
	counter = 0; // reset counter
	console.log("counter at start of game: " + counter)
	//load the clear counter on page
	$("#counter").empty();
	//load  the clear random number on page
	$("#randomNumber").empty();


	randomNumber = Math.floor(Math.random() * 102) + 19;
	console.log("Target Score: " + randomNumber);
	$("#random-number").text(randomNumber);
	//assigns value to each crystal
	crystal1Value = Math.floor(Math.random() *  12) + 1;
	console.log("First Crystal Value: " + crystal1Value);

	crystal2Value = Math.floor(Math.random() *  12) + 1;
	console.log("Second Crystal Value: " + crystal2Value);

	crystal3Value = Math.floor(Math.random() *  12) + 1;
	console.log("Third Crystal Value: " + crystal3Value);

	crystal4Value = Math.floor(Math.random() *  12) + 1;
	console.log("Fourth Crystal Value: " + crystal4Value);
	
};

//start adding up values every time a crystal is clicked
// jQuery kicks in 
	
	$("#crystal-1").on("click", function(){
		counter = counter + crystal1Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-2").on("click", function(){
		counter = counter + crystal2Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-3").on("click", function(){
		counter = counter + crystal3Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

	$("#crystal-4").on("click", function(){
		counter = counter + crystal4Value;
		console.log(counter);
		$("#counter").text(counter);
		//check after every increment if player won or lost
		winsDetermined()
	});

//write a function to determine win or loss, and ensure to check if 
//user has won or lost after every choice of crystals clicked on  
 	 if(counter > randomNumber) {
 	 	alert("You lose!");
 	 	losses++;
 	 	document.getElementById("losses-count").innerHTML = losses;		
 	 	console.log ("You lose " + losses + " games lost");
 	 	startGame();
 	 }

 	else if(counter === randomNumber) {
 		alert("ChaChing-YOU WIN!");
 		wins++;
 		document.getElementById("wins-count").innerHTML = wins;
 		console.log ("You win " + wins + " games won");
 		startGame();
 	}
};