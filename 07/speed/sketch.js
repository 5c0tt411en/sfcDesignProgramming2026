function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(0);
  nyoro(15, width / 2, height / 2, color(237, 248, 233), 1.0);
  nyoro(20, width, height / 4, color(199, 233, 192), 3.0);
  nyoro(30, width + 100, 3 * height / 4, color(161, 217, 155), 0.4);
}

function nyoro(n, x, y, c, sp) {
  for (let i = 0; i < n; i++) {
    fill(c, (n - i) * 255 / n);
    ellipse(
      x - n * i * width / 500,
      y + 50 * cos(radians(n * i + frameCount * sp)),
      (n - i) * 2,
      (n - i) * 2
    );
  }
}
