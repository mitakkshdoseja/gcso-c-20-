var car,wall;
var speed,wieght;
var deformation;

function setup() {

  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)

  speed = random(55,90);
  wieght = random(400,1500);

  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

 

  car.velocityX = speed;

  if (wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
  

  deformation = 0.5*wieght*speed*speed/22500;

  if (deformation<100)
  {
    car.shapeColor = color(0,255,0);
  }
 else if (deformation> 100 && deformation<180)
  {
    car.shapeColor = color(230,230,0);
  }

 else 
  {
    car.shapeColor = color(255,0,0);
  }
  }
  drawSprites();
}