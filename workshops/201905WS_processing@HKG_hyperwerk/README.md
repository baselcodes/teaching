# Proceesing Workshop 
30.4. & 2.5.2019 @ HGK Hyperwerk, Mark Iandovka & Max Frischknecht

## Day 1 – Basics
Download the Processing software here: [https://processing.org](https://processing.org)

See the full reference here: [https://processing.org/reference/](https://processing.org/reference/)


### Basic Functions
Every Processing sketch needs the following two functions.

`setup` will execute once at the beginning. Here you can define the size of your sketch.


```
void setup(){
  size(200, 200);
}
```

`draw` executes 60 times a second. It's a loop which makes it possible, that your drawing is changing.

```
void draw(){
  // drawing something awesome here
}
```
### Coordinate system and units of measure:

In Processing you work with a `x` and `y` axis. `x` is horizontal or the "width", `y` is vertical or the "height" of an object. Usually you work with numbers which equal to pixel (e.g. `100` is 100px on your screen). You can also use a relative unit instead of pixel. For example trough calculation `x = width * 1.5`. If the `width` changes, `x` is also changing.

```
size(720, 400); //sketch is 720 x 400 px
```

```
rect(10, 20, 50, 50); //rectangle is positioned at x: 10, y: 20 and 50 x 50 px
```


### Shape Primitives
There are different shapes predefined. Including rectangles, circles, triangles and more. Checkout the shapes [here.](https://processing.org/examples/shapeprimitives.html) Depending on there shape they need different arguments:

```
rect(x, y, width, height);
ellipse(x, y, width, height);
line(x1, y1, x2, y2);
triangle(x1, y1, x2, y2, x3, y3);
```


### Colors
Processing uses the RGB color mode by default. Every color needs therefore 3 arguments: `fill(red, green, blue)`. The values range from 0 to 255. If you only write one argument it will result in grayscale. 

```
fill(0); // black
fill(255); // white
fill(255, 0, 0); // red
background(255); // white background
``` 

You can add, remove or change the stroke with:

```
stroke(255, 0, 0); // red stroke
strokeWeight(5); // 5px stroke
noStroke(); // no stroke
```


### Basic Interactivity

You can easily use your mouse position with `mouseX` and `mouseY`.
rect(mouseX, mouseY, mouseX/3, mouseY/3);

### Variables

```
int numA = 100; // integer number
float numB = 12.22 // float point number
String str1 = "CCCP"; // a string (word, sentence)
color c = color(255, 204, 0);  // Define color 'c'
boolean a = false; // can be true or false
```
An additional datatype which we will cover later on.

```
int[] numbersList = { 90, 150, 30 };  // a list of integer numbers
float[] numbersList2 = { 1.3, 12.5, 9.3 };  // a list of float point numbers
```
Variables always have a scope. If you define them at the top they become global, which means you can use them everywhere. If you define them inside a function like `setup` or `draw` they are only available inside this function.

```
int a = 10:

void setup(){
  // a is available
  int b = 20; // b is ONLY available in setup
}

void draw() {
  // a is available
  // b is NOT available in draw
}
```


### Random
Usually you need a bit of random to make you code spicy 🔥 at some point. This outputs you a random number between 0 and 100: `random(0, 100);`. 

### Print

`print();`

`println();`

### if/else
If this condition is true, 

### Loops
Datatype `array[]`

### Advanced Interactivity

### Images

### Tweak Mode
`cmd/ctrl + shift + T` 



### Sketchbook
Your Processing software also has a "sketchbook" where you can collect your sketches. You can define the location of this folder under `Settings -> sketchbook path`. By default the folder is located in your `documents` folder. You can open the sketchbook via `File -> Sketchbook` or `cmd/ctrl + shift + K`



### Examples
Take a look under `File -> examples`

## Day 2 – Individual Work && Mentoring

### Advanced Topics
Sound

Api / Data

Webcam

Open CV / Computer Vision

Networks

Arduino



### Compare Processing && P5.js