function setup() {
  createCanvas(400, 400);
  fill(0);
  textSize(50);
}

function draw() {
  background(255);
  let sum = 0;
  for (let i = 0; i < width; i++) {
    let rand = int(random(height));
    ellipse(i, rand, 5, 5);
    sum += rand;
  }
  line(0, average(width, sum), width, average(width, sum));
  text(str(average(width, sum)), 0, average(width, sum));
}

function average(n, s) {
  let avg;
  avg = float(s) / float(n);
  return avg;
}
