void setup() {
  size(800, 800);
  rectMode(CENTER);
}


void draw() {

  // draw a grid
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);

  if (mouseX < width/2 && mouseY < height/2) {
    // condition is true, code will be executed
    fill(255, 0, 0);
  } else if (mouseX > width/2 && mouseY < height/2) {
    fill(0, 0, 255);
  } else if (mouseX > width/2 && mouseY > height/2) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 255);
  }

  rect(width/2, height/2, 50, 50);
}
