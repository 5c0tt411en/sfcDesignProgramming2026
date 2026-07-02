// matter.js: 物理シミュレーション
// クリックすると重力で落下するボールが追加される

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let World = Matter.World;
let engine, ground, balls = [];

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    ground = Bodies.rectangle(200, 390, 400, 20, { isStatic: true });
    World.add(engine.world, ground);
}

function draw() {
    background(0);
    Engine.update(engine);
    fill(100); rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    fill(255);
    for (let b of balls) {
        ellipse(b.position.x, b.position.y, 20, 20);
    }
}

function mousePressed() {
    let b = Bodies.circle(mouseX, mouseY, 10);
    balls.push(b);
    World.add(engine.world, b);
}
