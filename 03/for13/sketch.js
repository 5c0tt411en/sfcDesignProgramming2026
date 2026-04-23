function setup() {
  createCanvas(400, 400);
  background(255);
  rectMode(CENTER);
  noFill();

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      for (let d = 10; d <= 50; d += 10) {
        let x = width / 20 + i * width / 10;
        let y = height / 20 + j * height / 10;

        stroke(0, j * 25, i * 25);
        strokeWeight(5 - d / 10);
        rect(x, y, d, d);
      }
    }
  }
}
