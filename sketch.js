var sc;
var mn;
var hr;
var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  createSprite(0, 0, 10, 10);
 
}

function draw() {
  background(255,255,255);  
  translate(200,200)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(6)
  line(0,0,100,0)
  pop();
  
  push();
  rotate(mnAngle);
  stroke(255,0,0)
  strokeWeight(6)
  line(0,0,75,0)
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0)
  strokeWeight(6)
  line(0,0,50,0)
  pop();



  drawSprites();
}