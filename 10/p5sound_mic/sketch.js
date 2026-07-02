// p5.sound: マイク入力で音量を取得
// マイクの音量に応じて円の大きさを変える

let mic;

function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    let vol = mic.getLevel();
    let r = vol * 1000;
    fill(255);
    ellipse(width / 2, height / 2, r, r);
}
