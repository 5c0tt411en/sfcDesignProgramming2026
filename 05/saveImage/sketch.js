function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 360; i++) {
    let x = width / 2 + 300 * sin(radians(i)) * noise(float(i) / 50);
    let y = height / 2 + 300 * cos(radians(i)) * noise(float(i) / 50);
    stroke(127 * (1 + sin(radians(i))), 102, 194, 100);

    line(int(x), int(y), width / 2, height / 2);
  }

  save("test.png");
}
