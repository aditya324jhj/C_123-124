difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    canvas.position(515,168);
    poseNet.on('pose',gotPoses)
  
}
function draw(){    
    resizeCanvas(520,480, true);
    background('rgba(103,143,195,255)');
 
    textSize(difference);
    fill('#F90093');
    text('Peter',50,400)
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
    console.log(results);  
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    

    }

}
    


