const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

var ground,ball, rope
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  

  ball = new Ball(200,300,40)
  ground = new Ground(400,380,800,50)
  rope = new Rope(ball.ball, {x:200 ,y:50})
  b1 = new Building(250, 350,100,50)
  b2=new Building(250,350,50,100)
  b3 = new Building(250,300,50,50)
}

function draw() {
  Engine.update(myEngine)
  background(255,255,255); 
  
  ball.display()
  ground.display()
  rope.display()
  b1.display()
  b2.display()
  b3.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.ball, {x:mouseX, y : mouseY})
}