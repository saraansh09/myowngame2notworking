var papyrus;
var ground;
var house,houseimg;
var input,button;
var inside,insideimg;
var stick1, stick2, stick3;
var room1,room1img;
var fuel,fuelimg;
var growling;
var gameState = "form"
var detic,deticimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player,ghost,playerimg,ghostimg;

function preload(){
  ghostimg = loadImage("ghost.png");
  houseimg = loadAnimation("house1.png","house2.png","house3.png","house4.png","house5.png","house6.png","house7.png");
  insideimg = loadAnimation("entry1.png","entry2.png","entry3.png","entry4.png","entry5.png","entry6.png","entry7.png","entry8.png","ghost1.png","ghost2.png","ghost3.png","ghost4.png","ghost5.png","entry9.png","entry10.png","entry11.png","entry12.png","entry13.png","entry14.png","entry15.png")
  deticimg = loadAnimation("det1(1).png","det1(2).png","det1(3).png","det1(4).png","det1(5).png","det1(6).png","det1(7).png","det1(8).png")
  fuelimg = loadImage("fuel can.png");
  growling = loadSound("growl.mp3");
  roomimg = loadAnimation("room1(1).png","room1(2).png","room1(3).png","room1(4).png","room1(5).png","room1(6).png","room1(7).png","room1(8).png")
}

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, 400, width, 10);
  house = createSprite(600,220);
  house.addAnimation("hous",houseimg);
  house.scale = 1;
  inside = createSprite(600,220);
  inside.addAnimation("ins",insideimg);
  inside.scale = 2;
  inside.visible = false;
  room1 = createSprite(600,200);
  room1.addAnimation("rom",roomimg);
  room1.visible = false;
  fuel = createSprite(700,300);
  fuel.addImage(fuelimg);
  fuel.visible = false;
  detic = createSprite(500,300);
  detic.addAnimation("det",deticimg);
  detic.visible = false;
  var title = createElement('h2')
  title.html("Horror Escape Game");
  title.position(500, 0);
  input = createInput("");
  button = createButton('Play');
  input.position(950, 160);
  button.position(1000, 200);
 // player = createSprite(600,200);
 // player.addAnimation("Horror",playerimg);
 // player.scale = 0.5;
// next = createButton('Next Room');
  ghost = createSprite(200,200);
  ghost.addImage(ghostimg);
  ghost.scale = 0.5;
  Engine.run(engine);
}


function draw() {
  background(0);
 if (gameState==="form"){
  button.mousePressed(() => {
  input.hide();
  button.hide();
  inside.visible = true;
  ghost.visible = true;
  gameState = "play"
  })
}


  if (keyCode===RIGHT_ARROW&&gameState==="play"){
  ghost.visible = false;
  room1.visible = true;
  inside.visible = false;
  house.visible = false;
  room1.scale = 3;
  detic.visible = true;
  detic.scale = 0.5
  fuel.visible = true;
  fuel.scale = 0.008;
  }

  if (fuel.mousePressed){
    fuel.visible =false;
    growling.play();
  }

  ground.display();
  drawSprites();
}
