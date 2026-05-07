let s = "";

function setup() {
  createCanvas(400, 400);
  fill(0);
}

function draw() {
  background(255);
  textSize(40);
  text(s, 0, 0, width, height);
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    if (s.length >= 1) {
      s = s.substring(0, s.length - 1);
    }
  } else if (key.length === 1) {
    s += key;
  }
}
