
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,490,1200,15,{isStatic : true});

    tree1 = new Tree(940,245,500,500);
	
	mango1 = new Mango(850,160,50);
	mango2 = new Mango(850,100,50);
	mango3 = new Mango(770,160,50);
	mango4 = new Mango(940,120,50);
	mango5 = new Mango(1025,150,50);
	mango6 = new Mango(1110,170,50);
	mango7 = new Mango(885,70,50);
	mango8 = new Mango(895,190,50);
	mango9 = new Mango(800,195,50);
	mango10 = new Mango(960,160,50);
	mango11 = new Mango(980,40,50);
	mango12 = new Mango(1140,200,50);
	mango13 = new Mango(1000,85,50);
	mango14 = new Mango(1060,115,50);

	boy = new Boy(225,420,270,270);
	
	stone = new Stone(140,353,50,50);
	
	chain = new Chain(stone.body,{x:140,y:320});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(43, 215, 255);
  
  ground.display();
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  
  boy.display();

  stone.display();
  chain.display();

  detectollision(mango1,stone);
  detectollision(mango2,stone);
  detectollision(mango3,stone);
  detectollision(mango4,stone);
  detectollision(mango6,stone);
  detectollision(mango7,stone);
  detectollision(mango8,stone);
  detectollision(mango9,stone);
  detectollision(mango10,stone);
  detectollision(mango11,stone);
  detectollision(mango12,stone);
  detectollision(mango13,stone);
  detectollision(mango14,stone);
  
  drawSprites();
  text(mouseX+" , "+mouseY, mouseX, mouseY);
  textSize(18);
  text("Press space to get a second chance!!",50,80);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}
function detectollision(lmango,lstone){
	stoneBodyPos = lstone.body.position;
	mangoBodyPos = lmango.body.position;
	
	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y);
	if(distance <= mangoBodyPos + stoneBodyPos){
		Matter.Body.setStatic(mango.body,false);
	}
}
function keyPressed(){
	if(keyCode == 32){
		chain.attach(stone.body);
	}
}




