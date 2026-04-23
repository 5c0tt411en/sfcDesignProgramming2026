function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 5000; i++) {
    let x = int(random(width));
    let y = int(random(height));
    let w = int(random(30));
    let h = int(random(30));
    let d = dist(width / 2, height / 2, x, y);

    if (d >= 0 && d < 100) fill(140, 150, 198);
    else if (d >= 100 && d < 200) fill(158, 188, 218);
    else fill(191, 211, 230);

    rect(x, y, w, h);
  }
}
