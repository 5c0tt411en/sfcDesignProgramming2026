function setup() {
  let r = 0.02;
  let d = 5;
  createCanvas(400, 400);
  background(255);
  noStroke();

  for (let i = 0; i < 10000; i++) {
    let x = width / 2 + int(r * i * cos(radians(i)));
    let y = height / 2 - int(r * i * sin(radians(i)));

    fill(0, 50);
    ellipse(x, y, d, d);
  }
}
