//Create an HTML page that has two buttons, one to increment up, and one to increment down.
//The counter should start at 0 of a count and for each press of either button
//will add one or subtract one to the current count.

/*
Step 1: Create two functions that will execute with the onclick event of the button press.
One for the addition and one for the subtraction.
Step 2: Create a variable that will take in the counters current state.
Step 3: For each function, when the onclick event occurs either function will increment up one
or down one for each event and then input the new value into the count ID. 
*/

function addition(){
	let currentState = document.getElementById("count").innerText++;
	console.log(currentState);

	let newState = currentState + 1;
	console.log(newState);
	document.getElementById("count").innerText= newState;
}

function subtraction(){
	let currentState = document.getElementById("count").innerText--;

	let newState = currentState - 1;

	document.getElementById("count").innerText= newState;
}
