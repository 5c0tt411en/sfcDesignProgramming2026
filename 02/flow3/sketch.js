let x = 100;

function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0);
}

function draw() {
  background(255);
  x++;
  ellipse(x, 100, 50, 50);
}
