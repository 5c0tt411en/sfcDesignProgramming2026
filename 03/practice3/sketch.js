function setup() {
  createCanvas(255, 255);

  for (let i = 0; i < 255; i++) {
    stroke(i);
    line(i, 0, i, height);
  }
}
