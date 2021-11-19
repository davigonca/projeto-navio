var marImg,navioImg,navio,mar;
function preload(){
marImg = loadImage("sea.png");
navioImg = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  mar = createSprite(200,200);
  mar.addImage(marImg);
  mar.velocityX = -4;
  navio = createSprite (200,250);
  navio.addAnimation("navegando",navioImg);
  navio.scale = 0.3;
}

function draw() {
  background("blue");
    
    if (mar.x<0){
      mar.x = mar.width/8;
    }
    drawSprites();
}
