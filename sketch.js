var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

surface1=createSprite(0,580,360,30)
surface2=createSprite(295,580,200,30)
surface1.shapeColor="blue"
surface2.shapeColor="green"
surface3=createSprite(515,580,200,30)
surface3.shapeColor="red"
surface4=createSprite(740,580,200,30)
surface4.shapeColor="yellow"

    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40)
box.shapeColor="orange"
box.velocityX=4
box.velocityY=9
edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

drawSprites()
box.bounceOff(edges)
    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor="blue"
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor="green"
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="red"
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="yellow"
}
}
