function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 360; i++) {
    let x = int(width / 2 + 300 * cos(radians(i)) * noise(float(i) / 50));
    let y = int(height / 2 - 300 * sin(radians(i)) * noise(float(i) / 50));
    stroke(127 * (1 + cos(radians(i))), 102, 194, 100);

    line(x, y, width / 2, height / 2);
  }
}
