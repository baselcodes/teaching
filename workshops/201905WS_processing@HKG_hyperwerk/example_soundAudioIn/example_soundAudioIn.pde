import processing.sound.*;
AudioIn in;

float sum;
Amplitude rms;

void setup() {
  size(800, 800);
  background(255);
    
  // Create the Input stream
  in = new AudioIn(this, 0);
  in.play();
  
  // Create and patch the rms tracker
  rms = new Amplitude(this);
  rms.input(in);
}      

void draw() {
  background(0);
  int volume = int(rms.analyze()*1000);
  //println(rms.analyze()*1000);
  //fill(volume,0,0);
  //rect(0,0,volume,volume);
  for (int i = 0; i < volume; i++){
    fill(volume,random(255),random(255));
    rect(random(width),random(height),random(50),random(50));
    
  }
}
