let x = 100;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  fill(255, 10);
  rect(0, 0, width, height);
  x++;
  fill(255, 0, 0);
  ellipse(x, 100, 50, 50);
}
