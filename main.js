nosex = 0;
nosey = 0;

function preload(){
moustache = loadImage("https://i.postimg.cc/Tw2V0ppQ/Moustache-PNG-Pic.png");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.position(400,230);
    video = createCapture(VIDEO);
    video.size(400,300)
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPose(result){

if(result.length > 0) {
    console.log(result);
    nosex = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
    console.log("nosex = " + nosex);
    console.log("nosey = " + nosey);
    
}
}

function draw(){
    image(video,0,0,400,300);
    image(moustache,nosex-100,nosey + 25,130,75);
}


function snap(){
    save("Myimg.png");
}