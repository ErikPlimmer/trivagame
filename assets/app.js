var correct = 0;

var incorrect = 0;

var incomplete = 0;

var timer = 0;

var number = 60;

var intervalId;

	function startGame() {
		$("#timer").text(number);
		run();
	document.querySelector("#button").value = "Play again";
	}

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html(number);


      //  Once number hits zero...
      if (number === 0) {
	
		clearInterval(intervalId);

        endGame();
      }
    }




function endGame() {
	// Checking if answered correctly or incorrectly 
	var q1 = ($("input[name=q1]:checked").val()!="heart");
	if (q1 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}
	// Checking if answered correctly or incorrectly 
	var q2 = ($("input[name=q2]:checked").val()!="chester");
	if (q2 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}
	// Checking if answered correctly or incorrectly 
	var q3 = ($("input[name=q3]:checked").val()!="true");
	if (q3 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}
	// Checking if answered correctly or incorrectly 
	var q4 = ($("input[name=q4]:checked").val()!="1");
	if (q4 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}
	// Checking if answered correctly or incorrectly 
	var q5 = ($("input[name=q5]:checked").val()!="smallwrld");
	if (q5 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}
	// Clearing timer
	clearInterval(intervalId);
	// Replace html with correct and incorrect answers
	document.querySelector(".q1").innerHTML = "Correct answers:" + correct;
	document.querySelector(".q2").innerHTML = "Incorrect answers: " + incorrect;
	document.querySelector(".q3").innerHTML = " " + "<br>";
	document.querySelector(".q4").innerHTML = " " + "<br>";
	document.querySelector(".q5").innerHTML = " " + "<br>";

}

//===========================================================================================
// Unfinished goals 
// make "play again" button reset game 
// stylize questions css
// stylize the endgame screen 
// change color of timer text when nearing timeout 
// display number of unanswered questions at endgame