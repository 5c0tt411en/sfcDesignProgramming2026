function setup() {
  createCanvas(400, 400);

  let c1 = color(255, 0, 0);
  let c2 = color(0, 0, 255);
  let x = 100;
  let y = 100;
  let w = 50;
  let h = 50;

  fill(c1);
  stroke(c2);
  ellipse(x, y, w, h);
}
