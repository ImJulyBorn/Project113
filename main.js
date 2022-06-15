function preload() {
}

function setup() {
    canvas = createCanvas(800, 550);
    canvas.position(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 80, 35, 640, 480);
    circle(90, 90, 70);
    circle(710, 90, 70);
    circle(90, 480, 70);
    circle(710, 480, 70);
    fill(0, 180, 255);
    stroke(0, 180, 255)

    circle(90, 90, 50);
    circle(710, 90, 50);
    circle(90, 480, 50);
    circle(710, 480, 50);
    fill(0, 230, 255);
    stroke(0, 230, 255)

    circle(90, 90, 30);
    circle(710, 90, 30);
    circle(90, 480, 30);
    circle(710, 480, 30);
    fill(0, 255, 255);
    stroke(0, 255, 255)
}

function take_snapshot(){
    save('yay.png');
}