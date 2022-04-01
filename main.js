song1 = "";
song2 = "";
leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
rightwristX = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSoung("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses(results) {
  if(results.length > 0) {
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x; rightwristX=results[0].pose.rightWrist.x;
     difference=floor(leftwristX-rightwristX);
     console.log("leftwristX = " + leftwristX + "rightwristX = " + rightwristX + " difference = " + difference);
  }
}