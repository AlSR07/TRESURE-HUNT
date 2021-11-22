var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Estados del Juego
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Fondo en movimiento
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//crear el niño que corre
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
// crear los grupos de cashG, diamondsG,jwelleryG,swordGroup


}

function draw() {

  if(gameState===PLAY){


  }
  


    if (cashG.isTouching(boy)) {

    }
    else if (diamondsG.isTouching(boy)) {


      
    }else if(jwelleryG.isTouching(boy)) {


      
    }else{

    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesoro: "+ treasureCollection,150,30);



function createCash() {

}

function createDiamonds() {

}

function createJwellery() {

}

function createSword(){

}