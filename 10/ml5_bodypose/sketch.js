// ml5.js: BodyPose で人の動きを検出する
// カメラ映像から関節（鼻・肩・肘・手首など）を緑の点で描画

let video;
let bodyPose;
let poses = [];

function preload() {
    bodyPose = ml5.bodyPose();
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    bodyPose.detectStart(video, gotPoses);
}

function draw() {
    image(video, 0, 0, width, height);
    for (let pose of poses) {
        for (let kp of pose.keypoints) {
            if (kp.confidence > 0.5) {
                fill(0, 255, 0); noStroke();
                circle(kp.x, kp.y, 10);
            }
        }
    }
}

function gotPoses(results) {
    poses = results;
}
