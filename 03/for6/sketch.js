function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 360; i++) {
    let x = width / 2 + 300 * cos(radians(i));
    let y = height / 2 + 300 * sin(radians(i));
    stroke(127 * (1 + cos(radians(i))), 102, 194, 100);

    line(int(x), int(y), width / 2, height / 2);
  }
}
