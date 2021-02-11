var canvas;
var music;
var b1,b2,b3,b4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(0,500,360,30)
    b1.shapeColor="red";
    b2=createSprite(295,500,200,30)
    b2.shapeColor="blue";
    b3=createSprite(515,500,200,30)
    b3.shapeColor="green";
    b4=createSprite(740,500,220,30)   
    b4.shapeColor="cyan";
    //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40)
    box.shapeColor="white"
    box.velocityX=4
    box.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges=createEdgeSprites();
  box.bounceOff(edges);
  if(b1.isTouching(box) && box.bounceOff(b1)){
    box.shapeColor = rgb(0,0,255);
    music.play();
}
if(b2.isTouching(box)){
    box.shapeColor = rgb(255,128,0);
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}

if(b3.isTouching(box) && box.bounceOff(b3)){
    box.shapeColor = rgb(153,0,76);
}

if(b4.isTouching(box) && box.bounceOff(b4)){
    box.shapeColor = rgb(0,100,0);
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
