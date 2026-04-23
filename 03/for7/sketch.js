function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 500; i++) {
    line(i, height, i, height * (1 - noise(float(i) / 50)));
  }
}
