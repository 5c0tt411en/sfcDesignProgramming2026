function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  circles(width / 2, width / 2, width / 2, 5);
}

function circles(x, y, r, n) {
  ellipse(x, y, r * 2, r * 2);
  if (n > 0) {
    let nextR = r / 2;
    circles(x + nextR, y, nextR, n - 1);
    circles(x - nextR, y, nextR, n - 1);
  }
}
