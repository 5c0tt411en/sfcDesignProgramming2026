let r;

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  r = 0;
}

function draw() {
  r = r + 1;
  background(255);
  if (mouseIsPressed) {
    fill(255, 0, 0);
  } else {
    fill(255, 255, 255);
  }
  ellipse(mouseX, mouseY, r, r);
}
