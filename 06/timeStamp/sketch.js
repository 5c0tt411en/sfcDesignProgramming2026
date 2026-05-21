let elapsedTime = 0, time = 0, timeStamp = 0;

function setup() {
  createCanvas(800, 400);
  textSize(50);
  textAlign(LEFT, CENTER);
}

function draw() {
  elapsedTime = float(millis()) / 1000;
  time = elapsedTime - timeStamp;
  background(255);
  fill(0);
  text("time: " + time, 20, 20);
  if (time >= 10.0) {
    timeStamp = elapsedTime;
  }
}
