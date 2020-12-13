var car,wall;

var speed,weight, deformation;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50,200,80,40);
  car.shapeColor=("white");
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);
  car.depth=wall.depth;
  car.depth=car.depth+1;
  speed=random(40,60);
  weight=random(1500,3500);
}

function draw() {
  background("black"); 

  car.velocityX=speed;
  deformation= (0.5*weight*speed*speed)/22500;
  
  if(wall.x-car.x<=(car.width/2+wall.width/2)){
    car.velocityX=0;
  
    if(deformation>180){
      //red color
      car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100){
      //yellow color
      car.shapeColor=color(230,230,0);
          
    }

    if(deformation<100){
     //;ight green
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}