let p;

function setup() {
  createCanvas(400, 400);
  noStroke();
  p = new Particle(133.0, 150.0, 50.0, 5.0, 2.0);
}

function draw() {
  background(0);
  p.update();
  p.display();
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
}
