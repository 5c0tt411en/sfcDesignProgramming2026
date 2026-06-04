let x = [];
let y = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    x.push(int(random(width)));
    y.push(int(random(height)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    ellipse(x[i], y[i], 10, 10);
  }
}
