// faceMesh: カメラ映像から顔の 468 点ランドマークを検出する

let faceMesh;
let video;
let faces = [];

function preload() {
    faceMesh = ml5.faceMesh({ maxFaces: 1 });
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    faceMesh.detectStart(video, gotFaces);
}

function draw() {
    image(video, 0, 0, width, height);
    for (let face of faces) {
        for (let kp of face.keypoints) {
            fill(0, 200, 255); noStroke();
            circle(kp.x, kp.y, 3);
        }
    }
}

function gotFaces(results) {
    faces = results;
}
