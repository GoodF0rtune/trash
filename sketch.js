var ball, ballObj;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ballBody;
var ball;

function preload()
{
	paperImg = loadImage("paper ball.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball = createSprite(0,0);
	ball.shapeColor = 'white';
	ball.addImage(paperImg, "ball");
	ball.scale = 0.06;
	ballBody = Bodies.circle(width/2+50 , 200 , 50 , {restitution:0.5, isStatic:false});
	Left = Bodies.rectangle(700, 650, 30,150,{isStatic:true});
	Right = Bodies.rectangle(500, 650, 30,150,{isStatic:true});
	World.add(world, ballBody);
	World.add(world,Left);
	World.add(world, Right);
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	ball.x = ballBody.position.x;
	ball.y = ballBody.position.y;
	drawSprites();
	fill(255);
	rect(700, 650, 30, 150);
	rect(500, 650, 30,150);
	
}

function keyPressed(){ 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ballBody,ballBody.position,{x:0.2,y:-1}); 
	} 
}

