function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 0; i < 60; i++) {
    let s = int(50 * sin(radians(6 * i - 90)));
    let c = int(50 * cos(radians(6 * i - 90)));
    let x1 = width / 2 + c, x2 = x1 + c, x3 = x2 + c;
    let y1 = height / 2 + s, y2 = y1 + s, y3 = y2 + s;
    if (i <= second()) {
      stroke(246, 239, 247);
      line(x1, y1, x2, y2);
    }
    if (i <= minute()) {
      stroke(166, 188, 219);
      line(x2, y2, x3, y3);
    }
  }
}
