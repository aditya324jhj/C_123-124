function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,550);
    poseNet=ml5.poseNet(video,modelLoaded);
    canvas.position(515,168);

    poseNet.on('pose',gotPoses)
}
function draw(){
    background('rgba(103,143,195,255)');
    canvas.size(520,480);
  
   
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
    console.log(results);    
    }

}
    


