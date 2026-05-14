let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (let i = 0; i < 360; i++) {
    let x = width / 2 + 300 * sin(radians(i + frameCount)) * noise(float(i + frameCount) / 50);
    let y = height / 2 + 300 * cos(radians(i + frameCount)) * noise(float(i + frameCount) / 50);
    stroke(127 * (1 + sin(radians(i + frameCount))), 102, 194, 100);

    line(int(x), int(y), width / 2, height / 2);
  }
}

function keyPressed() {
  if (key === 's') {
    save("test" + str(counter) + ".png");
  }
  counter++;
}
