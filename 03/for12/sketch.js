function setup() {
  createCanvas(400, 400);
  background(255);
  rectMode(CENTER);
  noFill();

  for (let d = 10; d <= 50; d += 10) {
    let x = width / 20;
    let y = height / 20;
    strokeWeight(5 - d / 10);
    rect(x, y, d, d);
  }
}
