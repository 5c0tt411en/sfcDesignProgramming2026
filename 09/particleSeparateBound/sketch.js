let n = 200;
let p = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let i = 0; i < n; i++) {
    let d = random(3.0, 10.0);
    p.push(new Particle(
      random(d / 2, width - d / 2),
      random(d / 2, height - d / 2),
      d,
      random(5.0),
      random(5.0)
    ));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < p.length; i++) {
    p[i].update();
    p[i].display();
    for (let j = 0; j < p.length; j++) {
      if (i != j)
        p[i].bound(p[j].d, p[j].x, p[j].y);
    }
  }
}

class Particle {
  constructor(x, y, d, vx, vy) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.vx = vx;
    this.vy = vy;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.d, this.d);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= width - this.d / 2 || this.x <= this.d / 2)
      this.vx = -this.vx;
    if (this.y >= height - this.d / 2 || this.y <= this.d / 2)
      this.vy = -this.vy;
  }

  bound(d, x, y) {
    if (dist(this.x, this.y, x, y) < this.d / 2 + d / 2) {
      this.vx = -this.vx;
      this.vy = -this.vy;
    }
  }
}
