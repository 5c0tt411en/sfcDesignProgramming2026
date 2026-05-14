let img;
let p = 15;

function preload() {
  img = loadImage("data/sfc.png");
}

function setup() {
  createCanvas(720, 420);
  noStroke();
}

function draw() {
  background(0);
  for (let y = 0; y < img.height; y += p) {
    for (let x = 0; x < img.width; x += p) {
      let c = img.get(x, y);
      fill(c);
      ellipse(x + p / 2, y + p / 2, p, p);
    }
  }
}
