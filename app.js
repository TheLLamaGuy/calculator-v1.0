let displayNumber = document.getElementById("calc-output");
let number1 = null;
let number2 = null;
let result = null;
let tempNumber = "";

let operation = null;

function reset(){
	displayNumber.innerHTML = "";
	number1 = null;
	number2 = null;
	result = null;
	operation = null;
	tempNumber = "";
}

function num_append(value) {
	tempNumber = tempNumber + value;
	displayNumber.innerHTML = tempNumber;
}

function calculate() {
	result = eval(tempNumber)
	displayNumber.innerHTML = result
	tempNumber = ""
	result = ""
}