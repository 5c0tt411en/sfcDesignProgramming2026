let x;
let y;

function setup() {
  background(0);
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(0);
  x = int(random(width));
  y = int(random(height));

  ellipse(x, y, 100, 100);
}
