let n = 100;
let x = new Array(100).fill(0);
let y = new Array(100).fill(0);
let d = new Array(100).fill(0);
let vx = new Array(100).fill(0);
let vy = new Array(100).fill(0);
let c = [];

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < x.length; i++) {
    d[i] = int(random(2, 20));
    x[i] = int(random(d[i] / 2, width - d[i] / 2));
    y[i] = int(random(d[i] / 2, height - d[i] / 2));
    while (vx[i] === 0)
      vx[i] = int(random(-5, 5));
    while (vy[i] === 0)
      vy[i] = int(random(-5, 5));
    c[i] = color(random(100, 140), random(150, 220), random(150, 250));
  }
  textSize(10);
}

function draw() {
  background(0);
  for (let i = 0; i < x.length; i++) {
    mouseAttractionForce(i);
    connect(i);
    fill(c[i]);
    stroke(255);
    ellipse(x[i], y[i], d[i], d[i]);
    info(i);
  }
}

function info(i) {
  let s;
  s = "position: (" + x[i] + ", " + y[i] + ")";
  s += "\n" + "velocity: (" + vx[i] + ", " + vy[i] + ")";
  s += "\n" + "diameter: " + d[i];
  s += "\n" + "color: (" + red(c[i]) + ", " + green(c[i]) + ", " + green(c[i]) + ")";
  fill(255, 100);
  text(s, x[i] + 20, y[i] + 20);
}

function connect(i) {
  stroke(c[i]);
  for (let j = 0; j < n; j++) {
    if (i !== j && i < j) {
      if (dist(x[i], y[i], x[j], y[j]) <= 100)
        line(x[i], y[i], x[j], y[j]);
    }
  }
}

function mouseAttractionForce(i) {
  if (dist(mouseX, mouseY, x[i], y[i]) <= 200) {
    vx[i] += (mouseX - x[i]) >= 0 ? 1 : -1;
    vy[i] += (mouseY - y[i]) >= 0 ? 1 : -1;
    x[i] += vx[i];
    y[i] += vy[i];
  }
}
