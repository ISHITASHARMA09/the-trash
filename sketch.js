
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1 , box2 , box3;
var trash;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(500,700,1000,20);
	box1 = new Box(800,680,300,20);
	box2 = new Box(963,590,20,200);
	box3 = new Box(650,590,20,200);
	trash = new Trash(100,680,30,30);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display()
  box1.display()
  box2.display()
  box3.display()
  trash.display()
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:50,y:-55})
	}
}


