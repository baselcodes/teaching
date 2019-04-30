void setup() {
  size(800, 800);
  rectMode(CENTER);
}

void draw() {
  background(0);
  stroke(255, 0, 0);
  strokeWeight(10);
  rect(500, 500, 100, 100);
  println("1 mouse position: " + mouseX);
  fill(mouseX + mouseY, mouseY, mouseX);
  rect(mouseX, mouseY, mouseX/4, mouseY/6);
  line(mouseX, mouseY, 0, 0);
  line(mouseX, mouseY, 0, width);
  line(mouseX, mouseY, height, 0);
  line(mouseX, mouseY, width, height);
}
