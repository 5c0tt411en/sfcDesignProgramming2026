function setup() {
  createCanvas(400, 400);
  background(255);

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let x = width / 20 + i * width / 10;
      let y = height / 20 + j * height / 10;
      let r = 20;

      ellipse(x, y, r, r);
    }
  }
}
