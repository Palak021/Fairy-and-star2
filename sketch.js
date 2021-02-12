const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var fairy,fairyImg,star,starImg;
var starnight,starnightImg;
var starbody;

function preload()
{
  fairyImg=loadImage("images/fairy1.png");
  starImg=loadImage("images/star.png");
  starnightImg=loadImage("images/starnight.png");
   //preload the images here
}

function setup() {
  createCanvas(800, 550);
  
  engine = Engine.create();
  world = engine.world;

  
  fairy=createSprite(130,320,5,5);
  fairy.addImage("fairy",fairyImg);
  fairy.scale=0.2;
  star=createSprite(100,500,0,0);
  star.addImage("star",starImg);
  star.scale=0.3;

  var star_options={
    isStatic:true,
    restitution:1.0
  }

  starbody=Bodies.circle(650,30,5,star_options)
  World.add(world,starbody)
}


function draw() {
  background(starnightImg);

  Engine.update(engine)
  

  star.x=starbody.position.x
  star.y=starbody.position.y

 if(keyDown(LEFT_ARROW)){
   fairy.x=fairy.x-15;
 } 
 if(keyDown(RIGHT_ARROW)){
  fairy.x=fairy.x+15;
} 
if(keyDown(DOWN_ARROW)){
  Matter.Body.setStatic(starbody,false)
}



  drawSprites();
}
