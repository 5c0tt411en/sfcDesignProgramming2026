let elapsedTime = 0;

function setup() {
  createCanvas(400, 400);
  textSize(50);
  textAlign(LEFT, TOP);
}

function draw() {
  elapsedTime = float(millis()) / 1000;
  background(255);
  fill(0);
  text(elapsedTime, 20, 20);
}
