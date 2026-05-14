let img;

function preload() {
  img = loadImage("data/processing.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  tint(mouseX, 0, mouseY);
  image(img, 0, 0, width, height);
  noTint();
  image(img, 0, 0, width / 4, height / 4);
}
