left_wrist_x = 0;
right_wrist_x =0;
diffference = 0;

function setup (){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);
    
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}
function modelDone(){
    console.log("Posenet Is Initialized And Loaded");
}
function draw(){
    background("#5196e3");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+diffference+"px";   
    fill("#00ff0a");
    text('Mahima',50,400); 
    textSize(100);
}
function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.lenght > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        diffference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
}