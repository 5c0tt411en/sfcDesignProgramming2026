let prevSum = 0;

function setup() {
  createCanvas(400, 400);
  fill(0);
}

function draw() {
  background(255);
  let sum = 0;
  for (let i = 0; i < width; i++) {
    let rand = int(random(height));
    fill(separate(width, prevSum, rand));
    ellipse(i, rand, 5, 5);
    sum += rand;
  }
  prevSum = sum;
}

function separate(n, s, y) {
  let avg;
  avg = float(s) / float(n);
  let c;
  if (abs(y - avg) < 100) {
    c = color(255, 0, 0);
  } else {
    c = color(0);
  }
  return c;
}
