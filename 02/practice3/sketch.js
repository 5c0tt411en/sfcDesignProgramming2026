function setup() {
  createCanvas(1000, 1000);

  let c1 = color(255, 0, 0);
  let c2 = color(0, 0, 255);
  let x = int(random(0, 1000));
  let y = int(random(0, 1000));
  let w = 50;
  let h = 50;

  fill(c1);
  stroke(c2);
  ellipse(x, y, w, h);
}
