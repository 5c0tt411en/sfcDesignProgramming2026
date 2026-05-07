function setup() {
  let s = "In Favor of the Extreme";
  createCanvas(400, 400);
  textSize(40);
  background(255);
  fill(0);
  textAlign(LEFT);
  text(s, width / 2, 50);
  textAlign(CENTER);
  text(s, width / 2, height / 2);
  textAlign(RIGHT);
  text(s, width / 2, height);
  line(width / 2, 0, width / 2, height);
}
