let x = new Array(100).fill(0);
let y = new Array(100).fill(0);

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < x.length; i++) {
    x[i] = int(random(width));
    y[i] = int(random(height));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    ellipse(x[i], y[i], 10, 10);
  }
}
