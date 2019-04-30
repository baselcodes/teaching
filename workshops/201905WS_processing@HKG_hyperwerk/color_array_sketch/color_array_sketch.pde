// create a variable
int size = 300;

// define 3 colors as variables
color myColor1 = color(255, 204, 150);
color myColor2 = color(45, 32, 234);
color myColor3 = color(255, 0, 255);

// create an Array, think of it as a list of things
// the type is color and the name colors
// we save the color variables from above into the list
color[] colors = {color(255, 204, 150), color(45, 32, 234), color(255, 0, 255)};

// you can also write the color directly into the list
// color[] colors = {myColor1, myColor2, myColor3};

// this is an Array of integer numbers with the name numberList
int[] numberList = {100, 200, 300};

void setup() {
  // set the size of your window
  size(800, 800);
  // define the speed of your sketch
  frameRate(10);
  // put the mouse cursor in the middle of the rect
  rectMode(CENTER);
}

void draw() {
  // colorSelect selects a random value between 0 and 2
  // random gives you float numbers like 2.9 or 1.23, there f
  int colorSelect = int(random(0, 3));

  // asign the selected color as index of the colors array
  fill(colors[colorSelect]);
  rect(mouseX, mouseY, size, size);
}


void keyPressed() {
  if (key == 's' || key == 'S') {
    saveFrame("mysavedimage_##.png");
    println("Saved yo!");
  }
}
