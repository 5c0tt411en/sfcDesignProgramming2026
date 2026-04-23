function setup() {
  createCanvas(400, 400);

  let a = 0;
  while (a < 100) {
    line(a * 5, 0, (100 - a) * 5, height);
    a++;
  }
}
