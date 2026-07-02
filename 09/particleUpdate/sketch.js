let p;

function setup() {
  createCanvas(400, 400);
  noStroke();
  p = new Particle();
  p.x = 133.0;
  p.y = 150.0;
  p.d = 50.0;
  p.vx = 5.0;
  p.vy = 2.0;
}

function draw() {
  background(0);
  p.update();
  p.display();
}

class Particle {
  display() {
    ellipse(this.x, this.y, this.d, this.d);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }
}
