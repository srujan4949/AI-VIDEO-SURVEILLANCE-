video = "";

function preload(){
video = createVideo('video.mp4');
video.hide();
} 
function setup(){
canvas =  createCanvas(480, 380);
canvas.center();
}

function draw(){
image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector  = ml5.js.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelloaded(){
    console.log("Model loaded");
    status = true;
    video.loop();
    video.speed();
    video.volume(0);
}