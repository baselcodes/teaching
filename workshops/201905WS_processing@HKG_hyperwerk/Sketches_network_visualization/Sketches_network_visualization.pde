/*
A simple wifi interception based on the Carnivore Library
by Max Frischknecht, www.maxfrischknecht.ch, 2018

Library:
http://r-s-g.org/carnivore

List of TCP Ports:
check here for all ports: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

+ Windows:  first install winpcap (http://winpcap.org)
+ Mac:      first open a Terminal and execute this commmand: sudo chmod 777 /dev/bpf*
            (must be done each time you reboot your mac)

*/
import org.rsg.carnivore.*;
import org.rsg.lib.Log;

int intercepted;
float t = 0;
int size = 10;

float xloc;
float yloc;

CarnivoreP5 c;

void setup() {
  size(500, 500);
  Log.setDebug(true); // Uncomment for verbose mode
  c = new CarnivoreP5(this); 
  //c.setVolumeLimit(4); //limit the output volume (optional)
  //c.setShouldSkipUDP(true); //tcp packets only (optional)
  background(120);
  noStroke();
  xloc = width/2;
  yloc = height/2;
}

void draw() {
  //draw a background to make a disappearing effect
  fill(120, 2);
  rect(0, 0, width, height);

  // check for ports & change the color of the dot
  if (intercepted == 443||intercepted == 80) { 
    // HTTPS, HTTP, Website
    // => blue
    color c = color(0, 0, 255);
    drawPoints(c);
  } else if (intercepted == 1900||intercepted == 5353||intercepted == 6690||intercepted == 34824||intercepted == 59225) { 
    // streaming media and real-time multiplayer games
    // => pink
    color c = color(255, 0, 255);
    drawPoints(c);
  } else if (intercepted == 25||intercepted == 143) { 
    // SMTP (Simple mail) or IMAP
    // => yellow
    color c = color(255, 255, 0);
    drawPoints(c);
  } else if (intercepted == 53) { 
    // hacking tool??
    // => red
    color c = color(255, 0, 0, 20);
    drawPoints(c);
  } else { 
    // undefined
    // => white
    color c = color(255, 20);
    drawPoints(c);
  }
}

// a little function to draw the dots based on a random gaussian principle
// https://processing.org/reference/randomGaussian_.html
void drawPoints(color c) {
  xloc = randomGaussian();
  yloc = randomGaussian();

  float sd = 60;                // Define a standard deviation (Kurve, oder Attack/Release...)
  float mean = width/2;         // Define a mean value (Mittelwert)
  xloc = ( xloc * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean
  yloc = ( yloc * sd ) + mean;

  fill(c);
  ellipse(xloc, yloc, size, size);
  intercepted = 0;
}

// Called each time a new packet arrives
void packetEvent(CarnivorePacket p) {
  println("(" + p.strTransportProtocol + " packet) " + p.senderSocket() + " > " + p.receiverSocket());
  println("Date Stamp: " + p.dateStamp());
  println("Payload: " + p.ascii());
  intercepted = p.receiverPort;
  println("(" + p.strTransportProtocol + " packet) " + "port: " + intercepted);
  println("------------------------------------------------------\n");
}
