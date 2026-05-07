let s = "In Favor of the Extreme";

function setup() {
  createCanvas(400, 400);
  textSize(40);
}

function draw() {
  background(255);
  fill(200);
  rect(10, 10, mouseX, mouseY);
  fill(0);
  text(s, 10, 10, mouseX, mouseY);
}
