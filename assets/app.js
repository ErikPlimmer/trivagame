var correct = 0;

var incorrect = 0;

var incomplete = 0;

var timer = 0;

var number = 120;

var intervalId;

	function startGame() {
		$("#timer").text(number);
		run();

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

        endGame();
      }
    }

    //  The stop function
    function stop() {

	}



function endGame() {

	var q1 = ($("input[name=q1]:checked").val()!="heart");
	if (q1 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}

	var q2 = ($("input[name=q2]:checked").val()!="chester");
	if (q2 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}

	var q3 = ($("input[name=q3]:checked").val()!="true");
	if (q3 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}

	var q4 = ($("input[name=q4]:checked").val()!="1");
	if (q4 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}

	var q5 = ($("input[name=q5]:checked").val()!="smallwrld");
	if (q5 === true) {
		incorrect+=1;
	}	else {
		correct+=1;
	}

	clearInterval(intervalId);
	document.querySelector(".q1").innerHTML = "Correct answers:" + correct + "<br>";
	document.querySelector(".q2").innerHTML = "Incorrect answers: " + incorrect + "<br>";
	document.querySelector(".q3").innerHTML = " " + "<br>";
	document.querySelector(".q4").innerHTML = " " + "<br>";
	document.querySelector(".q5").innerHTML = " " + "<br>";
	document.querySelector("#button").value = "Play again" ;
}