let n = 10;
let x = [];
let y = [];
let d = [];
let vx = [];
let vy = [];
let c = [];

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < n; i++) {
    d.push(random(2, 20));
    x.push(random(d[i] / 2, width - d[i] / 2));
    y.push(random(d[i] / 2, height - d[i] / 2));
    vx.push(random(-5, 5));
    while (vx[i] == 0) vx[i] = random(-5, 5);
    vy.push(random(-5, 5));
    while (vy[i] == 0) vy[i] = random(-5, 5);
    c.push(color(random(100, 140), random(150, 220), random(150, 250)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    pingpong(i);
    fill(c[i]);
    stroke(255);
    ellipse(x[i], y[i], d[i], d[i]);
  }
}

function pingpong(i) {
  if (x[i] >= width - d[i] / 2 || x[i] <= d[i] / 2)
    vx[i] = -vx[i];
  if (y[i] >= height - d[i] / 2 || y[i] <= d[i] / 2)
    vy[i] = -vy[i];
  x[i] += vx[i];
  y[i] += vy[i];
}
