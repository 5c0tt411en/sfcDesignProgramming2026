let x = 100;

function setup() {
  createCanvas(500, 500);
  fill(255, 0, 0);
  frameRate(60);
}

function draw() {
  x++;
  ellipse(x, 100, 50, 50);
}
