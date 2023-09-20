var path, boy 
var leftBoundary,rightBoundary;
var pathImg,boyImg;
var bomb, bombImg;
var coin, coinImg;
var limitBar1, limitBar2,limitBar3
var barTime;

function preload(){
  //loadImage de path (camino)
  pathImg=loadImage("path.png")
  //loadAnimation de boy (niño)
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png",)

  //imagen de la bomba
bombImg=loadImage("bomb.png")
//imagen de la moneda
coinImg=loadImage("coin.png")
}

function setup(){
  createCanvas(1280,720);
 //crear sprite de path (camino) 
 path=createSprite(640,300,10,10)
//agregar imagen de path
path.addAnimation("camino",pathImg)
//escala de path
path.scale=1.5

console.log("para morse hay que usar las teclas A y D")


//crear sprite de boy (niño)
boy=createSprite(640,630,1,10);
//agregar animación para boy
boy.addAnimation("chico corriendo",boyImg);
//escala de boy
boy.scale=0.7;

// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(224,360,444,725);
//establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible=false;


//crear right Boundary (límite derecho)
rightBoundary=createSprite(1065,360,444,725);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible=false;

limitBar1=createSprite(500,360,1,725)
limitBar1.visible=false;

limitBar2=createSprite(640,360,1,725)
limitBar2.visible=false;

limitBar3=createSprite(790,360,1,725)
limitBar3.visible=false;

barTime=createSprite(690,360,1,725)
barTime.visible=false;

}

function draw() {
  background("green");
  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.velocityY =8;
  barTime.velocityX = -8

  // boy moviéndose en el eje X con "A" y "D"
  if (keyDown("y")) {
    boy.x =500
  
    }
    if (keyDown("a")&& barTime.collide(limitBar2)) {
  boy.x = 500
  barTime.x= 550
  }
  
  if (keyDown("a")&& barTime.collide(limitBar3)) {
   boy.x = 640
   barTime.x = 690
  }

  if (keyDown("d")&& barTime.collide(limitBar1)) {
    boy.x = 640
    barTime.x = 690
    }
    
    if (keyDown("d")&& barTime.collide(limitBar2)) {
     boy.x = 790
     barTime.x = 840
    }

  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.bounceOff(rightBoundary);
  boy.bounceOff(leftBoundary);

  barTime.bounceOff(limitBar1);
  barTime.bounceOff(limitBar2);
  barTime.bounceOff(limitBar3);

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = 250;
  }
  
  spawnCoin()
  spawnBomb()
  drawSprites();
}
function spawnBomb() {
if (frameCount% 60===0)
 {

  bomb=createSprite(640,0)
  bomb.velocityY = 8
  bomb.scale=0.099

  var b= Math.round(random(1,3))
  switch (b) {
    case 1: bomb.addImage(bombImg);
    bomb.x= 640
    break;
    case 2: bomb.addImage(bombImg);
    bomb.x= 790
    break;
    case 3: bomb.addImage(bombImg);
    bomb.x= 500
    break;
  }
  bomb.lifetime= 95
}
}

function spawnCoin() {
if (frameCount%125===0) {
  coin=createSprite(640,0)
  coin.velocityY=8
  coin.scale=0.5

var c= Math.round(random(1,3))
switch (c) {
  case 1:coin.addImage(coinImg)
  coin.x=640
    break;

  case 2:coin.addImage(coinImg)
  coin.x=500
  break;

  case 3:coin.addImage(coinImg)
  coin.x=790
  break;
}
coin.lifetime=95
}
}