var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground,boy
var score = 0;
var bgImg
var boy_moving
var  can, wood, bin
var bin2 , airplane, wrapper
var binsGroup,wastesGroup
var sun,sunImg
function preload(){
  
  bgImg = loadImage("track.png")
  boy_moving = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png")
  can= loadImage("waste.png")
  wood= loadImage("waste2.png")
  bin = loadImage("dustbin.png")
  bin2 = loadImage("bin2.png")
  airplane = loadImage("waste4.png")
  wrapper = loadImage("waste3.png")  
  bgImg = loadImage("city.jpg")
  sunImg = loadImage("sun.png")
}

function setup() {
  createCanvas(1300, 650);
  ground = createSprite(650,590,1300,120);
  ground.shapeColor = 'black'
  boy = createSprite(80,390,30,50)
  boy.addAnimation( "walkingboy", boy_moving)
  boy.scale = 0.5;
  sun = createSprite(90,70,60,60)
  sun.addImage(sunImg)
  sun.scale = 0.2
  //strips = createSprite(300,580,100,20)
  //strips.shapeColor = 'white'
  wastesGroup = createGroup();
  binsGroup = createGroup();
  
  
  
}

function draw() {
 background(bgImg);
 //strokeWeight(10)
 //stroke('black')
 spawnStrips();
 spawnWaste();
 
 drawSprites();
 }

 function spawnWaste(){
   if(frameCount % 30 === 0){
    var wastage = createSprite(1300,random(520,600),10,40);
    wastage.velocityX = -9
    var rand = Math.round(random(1,4))
    switch(rand){
      case 1: wastage.addImage(wrapper)
      break;
      case 2 : wastage.addImage(airplane)
      break;
      case 3 : wastage.addImage(wood)
      break;
      case 4 : wastage.addImage(can)
      break;
      defalut : break
    }
    wastage.scale = 0.04
    wastage.lifetime = 700;
    wastesGroup.add(wastage)
   }
 }
 function spawnStrips(){
   if(frameCount % 30 === 0){
   var strips = createSprite(1300,590,100,20)
   strips.shapeColor = 'white'
   strips.velocityX = -9
   strips.depth = boy.depth;
   boy.depth = boy.depth + 1;
   }
 }


















