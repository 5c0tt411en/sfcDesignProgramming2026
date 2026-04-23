function setup() {
  createCanvas(255, 255);

  let a = 0;
  while (a < 255) {
    stroke(a);
    line(a, 0, a, height);
    a++;
  }
}
