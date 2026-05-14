let img;

function preload() {
  img = loadImage("data/sfc.png");
}

function setup() {
  createCanvas(720, 420);
}

function draw() {
  let x = int(millis() / 30) % width;
  background(0);
  image(img, 0, 0, width, height);
  for (let y = 0; y < img.height; y++) {
    let c = img.get(x, y);
    stroke(c);
    line(0, y, x, y);
  }
}
