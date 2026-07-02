// objectDetection: カメラ映像から物体を検出する

let detector;
let video;
let detections = [];

function preload() {
    detector = ml5.objectDetection("cocossd");
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    detector.detectStart(video, gotDetections);
}

function draw() {
    image(video, 0, 0, width, height);
    for (let d of detections) {
        stroke(0, 255, 0); strokeWeight(2);
        noFill();
        rect(d.x, d.y, d.width, d.height);
        fill(255); noStroke();
        text(d.label, d.x + 5, d.y + 15);
    }
}

function gotDetections(results) {
    detections = results;
}
