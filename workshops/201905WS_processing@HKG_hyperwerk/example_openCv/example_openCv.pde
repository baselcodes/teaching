import gab.opencv.*;
import processing.video.*;

Capture cam;
OpenCV opencv;

void setup() {
  size(640, 480);
  cam = new Capture(this, 640, 480, 30);
  cam.start();
  
  opencv = new OpenCV(this, 640, 480);
  // opencv.capture(640, 480);
  opencv.startBackgroundSubtraction(5, 3, 0.5);
  
}

void draw() {
  if(cam.available()){
    cam.read(); 
  }
  
  image(cam, 0, 0);  
  opencv.loadImage(cam); 
  
  opencv.updateBackground();  
  opencv.dilate();
  opencv.erode();

  noFill();
  
  strokeWeight(6);
  stroke(255, 0, 0);
  for (Contour contour : opencv.findContours()) {
    
    contour.draw();
  }
}
