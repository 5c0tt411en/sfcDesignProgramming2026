// imageClassifier: 画像を MobileNet で分類する

let classifier;
let img;
let label = "";

function preload() {
    classifier = ml5.imageClassifier("MobileNet");
    img = loadImage("cat.jpg");
}

function setup() {
    createCanvas(400, 400);
    image(img, 0, 0, width, height);
    classifier.classify(img, gotResult);
}

function draw() {
    fill(255); noStroke();
    textSize(24);
    text(label, 10, height - 20);
}

function gotResult(results) {
    label = results[0].label
          + " (" + nf(results[0].confidence, 0, 2) + ")";
}
