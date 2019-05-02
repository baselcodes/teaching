import processing.opengl.*;
import processing.video.*;

Capture video;


PImage img;
int[][] values;
float angle;

void setup() {
  size(1024, 768, P3D);
  noFill();

  printArray(Capture.list());
  video = new Capture(this, Capture.list()[6]);
  video.start();

  values = new int[width][height];

  //img = loadImage("nasa-iceberg.jpg");
  //img.loadPixels();
  //for (int i = 0; i < img.height; i++) {
  //  for (int j = 0; j < img.width; j++) {
  //    color pixel = img.pixels[i*img.width + j];
  //    values[j][i] = int(brightness(pixel));
  //  }
  //}
}

void draw() {

  background(0);                     // Set black background
  translate(width/2, height/2, 0);   // Move to the center
  scale(2.0);                        // Scale to 400%

  if (video.available()) {
    video.read();
  }
  video.loadPixels();
  for (int i = 0; i < video.height; i++) {
    for (int j = 0; j < video.width; j++) {
      color pixel = video.pixels[i*video.width + j];
      values[j][i] = int(brightness(pixel));
    }
  }

  // Update the angle
  angle += 0.005;
  rotateY(angle);  

  // Display the image mass
  for (int i = 0; i < video.height; i += 2) {
    for (int j = 0; j < video.width; j += 2) {
      stroke(values[j][i], 153);
      float x1 = j-video.width/2;
      float y1 = i-video.height/2;
      float z1 = -values[j][i]/2;
      float x2 = j-video.width/2;
      float y2 = i-video.height/2;
      float z2 = -values[j][i]/2-4;
      line(x1, y1, z1, x2, y2, z2);
    }
  }
}
