function setup(){
    vid=createCapture(VIDEO);
    video.size(500 , 550);
    video.position(200,300);
    can=document.getElementById("ncanvas");  
    poseNet=ml5.poseNet(vid, modelLoaded);
}
function modelLoaded(){
    console.log("Woohoo!!! Model loaded!!!");
}
function gotposes(results){
    if(results.length > 0){
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        sz=floor(lwx-rwx);
    }
    else{
       sz=100;
    }
}    
function draw(){
    can.background("#6C91C2");
    can.textSize(sz);
    can.fill("FFE787");
    can.text("Hello World!",50,400);
    gotposes(results);
}

