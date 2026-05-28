let prevSum = 0;

function setup() {
  createCanvas(400, 400);
  fill(0);
  textSize(50);
}

function draw() {
  background(255);
  let sum = 0;
  for (let i = 0; i < width; i++) {
    let n = int(noise(float(i + frameCount) / 200) * height);
    fill(separate(width, prevSum, n));
    ellipse(i, n, 5, 5);
    sum += n;
  }
  fill(0);
  line(0, average(width, sum), width, average(width, sum));
  text(str(average(width, sum)), 0, average(width, sum));

  prevSum = sum;
}

function separate(n, s, y) {
  let avg;
  avg = float(s) / float(n);
  let c;
  if (abs(y - avg) < 20) {
    c = color(255, 0, 0);
  } else {
    c = color(0);
  }
  return c;
}

function average(n, s) {
  let avg;
  avg = float(s) / float(n);
  return avg;
}
