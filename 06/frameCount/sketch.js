function setup() {
  createCanvas(400, 400);
  ellipseMode(LEFT);
}

function draw() {
  let c = float(frameCount);
  background(255);
  for (let i = 0; i < width; i += 10) {
    let h = noise((i + c) / 200);
    ellipse(i, h * height, 10, 10);
  }
}
