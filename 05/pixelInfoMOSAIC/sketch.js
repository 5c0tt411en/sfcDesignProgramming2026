let img;
let p = 10;

function preload() {
  img = loadImage("data/sfc.png");
}

function setup() {
  createCanvas(720, 450);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);
  for (let y = 0; y < img.height; y += p) {
    for (let x = 0; x < img.width; x += p) {
      let c = img.get(x, y);
      fill(c);
      let d = dist(mouseX, mouseY, x + p / 2, y + p / 2);
      if (d > 100) {
        rect(x + p / 2, y + p / 2, p, p);
      }
    }
  }
}
