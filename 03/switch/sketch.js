function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255);
  fill(0);
  switch (key) {
    case '1':
      ellipse(width / 2, height / 2, 400, 400);
      break;
    case '2':
      triangle(0, 0, width - 20, height - 20, 10, height - 20);
      break;
    case '3':
      rect(10, 10, width - 20, height - 20);
      break;
    default:
      break;
  }
}
