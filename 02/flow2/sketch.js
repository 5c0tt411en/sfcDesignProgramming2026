let x = 100;

function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0);
}

function draw() {
  x++;
  ellipse(x, 100, 50, 50);
}
