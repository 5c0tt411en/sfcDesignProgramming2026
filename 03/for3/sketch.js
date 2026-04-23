function setup() {
  let r = 200;
  let d = 20;
  createCanvas(400, 400);
  background(255);
  noStroke();

  for (let i = 0; i < 360; i++) {
    let x = width / 2 + int(r * cos(radians(i)));
    let y = height / 2 - int(r * sin(radians(i)));

    fill(0, 50);
    ellipse(x, y, d, d);
  }
}
