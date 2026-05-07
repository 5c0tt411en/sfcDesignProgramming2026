function setup() {
  let s = "In Favor of the Extreme";

  createCanvas(400, 400);
  textSize(40);
  background(255);

  for (let i = 0; i < 100; i++) {
    let x = int(random(-150, width));
    let y = int(random(-150, height));
    let w = int(random(50, 150));
    let h = int(random(50, 150));
    let c = int(random(0, 255));
    fill(c);
    rect(x, y, w, h);
    textSize((w + h) / 10);
    fill(0);
    text(s, x, y, w, h);
  }
}
