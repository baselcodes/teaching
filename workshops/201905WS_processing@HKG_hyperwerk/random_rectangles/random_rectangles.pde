void setup() {
  size(800, 800);
  frameRate(60);
}

void draw() {
  for (int x = 0; x < 100; x++) {
    fill(random(255), random(255), random(255));
    rect(random(width), random(height), 40, 40);
  }
  fill(255);
  rect(mouseX, mouseY, 100, 100);


  saveFrame("mysavedimage_##.png");
}


void keyPressed() {
  if (key == 's' || key == 'S') {
    saveFrame("mysavedimage_##.png");
    println("Saved yo!");
  }
}
