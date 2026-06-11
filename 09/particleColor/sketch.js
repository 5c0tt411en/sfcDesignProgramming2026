let n = 10;
let p = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  for (let i = 0; i < n; i++) {
    let d = random(10, 30);
    p.push(new Particle(
      random(d / 2, width - d / 2),
      random(d / 2, height - d / 2),
      d,
      random(1.0, 10.0),
      random(1.0, 10.0)
    ));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < n; i++) {
    p[i].update();
    p[i].display();
  }
}

class Particle {
  constructor(x, y, d, vx, vy) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.vx = vx;
    this.vy = vy;
    this.c = color(255);
  }

  display() {
    fill(this.c);
    ellipse(this.x, this.y, this.d, this.d);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= width - this.d / 2 || this.x <= this.d / 2) {
      this.vx = -this.vx;
      this.changeColor();
    }
    if (this.y >= height - this.d / 2 || this.y <= this.d / 2) {
      this.vy = -this.vy;
      this.changeColor();
    }
  }

  changeColor() {
    this.c = color(
      random(100, 255),
      random(100, 255),
      random(100, 255)
    );
  }
}
