let img;

function preload() {
  img = loadImage("data/processing.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img, 0, 0, width, height);
}
