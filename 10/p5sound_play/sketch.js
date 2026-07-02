// p5.sound: 音を鳴らす
// クリックで sample.mp3 を再生する

let sf;

function preload() {
    sf = loadSound("sample.mp3");
}

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
    sf.play();
}
