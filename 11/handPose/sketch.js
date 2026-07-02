// handPose: カメラ映像から手の関節を検出する

let handPose;
let video;
let hands = [];

function preload() {
    handPose = ml5.handPose();
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    handPose.detectStart(video, gotHands);
}

function draw() {
    image(video, 0, 0, width, height);
    for (let hand of hands) {
        for (let kp of hand.keypoints) {
            fill(0, 255, 0); noStroke();
            circle(kp.x, kp.y, 10);
        }
    }
}

function gotHands(results) {
    hands = results;
}
