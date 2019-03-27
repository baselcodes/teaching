// this are my variables, the are like placeholders
var sizeForm = 100;
var size2 = 200;
var myWord = "hallo zämä";

// this is a array, you can think of it as a list of things
var myArray = [100, 200, 300];
// array's always start at 0
// so to get the first number (100) you have to use myArray[0]
console.log(myArray[0]);

// this is a condition, either true & false
var myCondition = true;

// you you can talk to the console of your browser
console.log("this is sizeForm: ", sizeForm);

// this function executes once at the beginning
function setup() {
	createCanvas(windowWidth, windowHeight); // how big your sketch should be
	
	// how fast your program runs
	//frameRate(1);
}

// this executes 60 times a second
function draw() {
	
	// condition: if the variable myCondition is true
	if(myCondition == true){
		// it's true
		background(255, 0, 0); // yellow background
	} else {
		// nope, it's not
		background(0, 0, 255);
	}

	// this is a loop, it let's you do many things at once
	for(var i = 0; i < 100; i = i + 1){
		// create to random numbers between 0 and 100
		var xPos = random(0, 100);
		var yPos = random(0, 100);

		// create a color based on your mouse positions
		fill(mouseX, mouseY, 255);
		// draw a rectangle based on mouse positions + random number
		// define the size trough using the array from the beginning
		rect(mouseX + xPos, mouseY + yPos, myArray[0], myArray[0]);	
	}
	
	// redefine the colors
	fill(0, 255, 0);
	// draw an ellipse based on your mouse position
	ellipse(mouseX+300, mouseY+300, size2, size2);

}
