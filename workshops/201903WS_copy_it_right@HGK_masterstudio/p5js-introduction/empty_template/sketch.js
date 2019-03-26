// this executes once at the beginning
function setup() {
	var cnv = createCanvas(windowWidth, windowHeight); // how big your sketch should be
	cnv.parent('p5-sketch-holder'); // where to place your sketch in the index.html document
}

// this executes 60 times a second
function draw() {
	background(0, 0, 255); // blue background
}

// resize the canvas if window resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}