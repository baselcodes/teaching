import processing.video.*;
Capture video;

void setup(){
  size(640, 360);
  
  // look for all cameras & print them in the console
  // printArray(Capture.list());
  // chose the camera from the array
  video = new Capture(this, Capture.list()[3]);
  video.start();
  
  noStroke();
}

// reads video all the time
void captureEvent(Capture video) {
  video.read();
}

void draw(){
  // this would draw a normal video 
  //image(video, 0, 0, width, height);

  // load all the cameras pixel
  video.loadPixels();
  // define your resolution
  int pixelSize = 10;
  
  // go trough all the cameras pixel
  for(int x = 0; x < video.width; x = x + pixelSize){
    for(int y = 0; y < video.height; y = y + pixelSize){
      // look at every pixel color at position x, y
      color pxCol = video.get(x, y); 
      //fill(pxCol);
      
      // look at the brightness of the pxCol
      int bright = int(brightness(pxCol));
      
      // build a selfmade filter based on the brightness
      if(bright < 125){
        fill(255, 0, 0);
      } else {
        fill(0, 0, 255);
      }
      // draw a ellipse as pixel
      ellipse(x, y, pixelSize, pixelSize);
    }
  }
  // a built in processing filter
  //filter(INVERT);
  
  
}
