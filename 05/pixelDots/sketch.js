let img;
let p = 10;

function preload() {
  img = loadImage("data/sfc.png");
}

function setup() {
  createCanvas(720, 420);
  noFill();
}

function draw() {
  background(0);
  for (let y = 0; y < img.height; y += p) {
    for (let x = 0; x < img.width; x += p) {
      let c = img.get(x, y);
      stroke(255);
      let r = int((red(c) + green(c) + blue(c)) / 100);
      ellipse(x + p / 2, y + p / 2, r, r);
    }
  }
}
