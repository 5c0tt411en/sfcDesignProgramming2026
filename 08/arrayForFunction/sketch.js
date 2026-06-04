let el = 200;
let n = new Array(el).fill(0);
let x = new Array(el).fill(0);
let y = new Array(el).fill(0);
let sp = new Array(el).fill(0);
let c = [];

function setup() {
  createCanvas(1200, 800);
  for (let i = 0; i < x.length; i++) {
    n[i] = int(random(10, 20));
    x[i] = int(random(width));
    y[i] = int(random(height));
    sp[i] = random(4.0);
    c[i] = color(random(100, 120), random(120, 200), random(200, 220));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    nyoro(n[i], x[i], y[i], c[i], sp[i], true);
  }
}

function nyoro(n, x, y, c, sp, doFill) {
  for (let i = 0; i < n; i++) {
    if (doFill) {
      noStroke();
      fill(c, (n - i) * 255 / n);
    } else {
      noFill();
      stroke(c, (n - i) * 255 / n);
    }
    ellipse(
      x - n * i * width / 500,
      y + 50 * cos(radians(n * i + frameCount * sp)),
      (n - i) * 4 * noise(float(i * 10 + frameCount) / 100),
      (n - i) * 4 * noise(float(i * 10 + frameCount) / 100)
    );
  }
}
