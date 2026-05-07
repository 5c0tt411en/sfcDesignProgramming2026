function setup() {
  let s = "In Favor of the Extreme";
  createCanvas(400, 400);
  textSize(40);
  background(255);
  fill(200);
  rect(0, height / 2, textWidth(s), -40);
  fill(0);
  text(s, 0, height / 2);
}
