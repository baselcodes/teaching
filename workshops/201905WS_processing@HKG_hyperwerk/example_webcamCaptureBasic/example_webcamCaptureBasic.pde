import processing.video.*;
Capture video;

void setup() {
  size(displayWidth, displayHeight);

  // see all options of available cameras
  printArray(Capture.list());

  // choose one of the Capture.list[] cameras
  // see libraries/video/GettingStartedCapture example if it creates an error
  video = new Capture(this, Capture.list()[6]);

  // Start capturing the images from the camera
  video.start();
}

// play the video all the time
void captureEvent (Capture video) {
  video.read();
}

// play the video only if the mouse pressed
void mousePressed() {
  //video.read();
}

void draw() {
  //draw the video with ist initial size
  //image(video, 0, 0, video.width, video.height);

  //scale the video up to the screen
  // take a small video & safe processing power & speed
  image(video, 0, 0, width, height);
}
