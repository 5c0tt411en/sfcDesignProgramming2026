function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 1000; i++) {
    let x = int(random(width));
    let y = int(random(height));
    let w = int(random(30));
    let h = int(random(30));
    rect(x, y, w, h);
  }
}
