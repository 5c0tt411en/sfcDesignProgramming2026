let img;
let norm = 30000;
let h;

function preload() {
  img = loadImage("data/sfc2.jpg");
}

function setup() {
  createCanvas(512, 300);
  noStroke();
  h = height / 3;
}

function draw() {
  background(255);
  for (let i = 0; i <= 255; i++) {
    let r = 0, g = 0, b = 0;
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        let c = img.get(x, y);
        if (red(c) === i) r++;
        if (green(c) === i) g++;
        if (blue(c) === i) b++;
      }
    }
    fill(255, 0, 0);
    rect(i * 2, h, 2, -h * r / norm);
    fill(0, 255, 0);
    rect(i * 2, h * 2, 2, -h * g / norm);
    fill(0, 0, 255);
    rect(i * 2, h * 3, 2, -h * b / norm);
  }
}
