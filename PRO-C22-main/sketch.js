const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground, backgroundImg,tower,towerImg, cannon, angle;
var cannonBall;
var balls = [];
var boats = [];



function preload() {
 backgroundImg= loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  var options={
    isStatic: true
  }
  ground = Bodies.rectangle(0,height-1,width*2,1, options)
  World.add(world,ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);

  cannon = new Cannon(180,110,130,100,angle);
  
  
}

function draw() {
  image(backgroundImg,0,0,1200,600);
 
  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,width*2,1);

  push();
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop();

  cannon.display();
//  cannonBall.display();
  
  showBoats();

  for(var i = 0;i < balls.length;i++){
    showCannonBalls(balls[i]);
  }



}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body,cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball){
  if(ball){
    ball.display();
  }
}

function keyReleased(){
  if(keyCode == DOWN_ARROW){
    balls[balls.length - 1].shoot();
  }
}

function showBoats(){


if(boats.length > 0){
  if(boats[boats.length -1] === undefined ||
     boats[boats.length -1].body.position.x < width-300 ){

      var positions = [-40,-60,-70,-20];
      var position = random(positions);
      var boat = new Boat(width-79,height-60,170,170,-80,position);
      boats.push(boat);

  }

  for(var i = 0;i < boats.length; i++){
    if(boats[i]){
      Matter.Body.setVelocity(boats[i].body,{x:-0.9, y:0});///
      boats[i].display();
    }
  }

}else{
var boat = new Boat(width-79,height-60,170,170,-80);
boats.push(boat);
}

}