const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var stand1, stand2
var block0, block1, block2, block3, block4, block5
var block6, block7, block8, block9, block10
var block11, block12, block13, block14
var block15, block16, block17, block18
var block19, block20, block21
var hexagon1
var Sling1

function setup() {
  createCanvas(1600,720)
  engine = Engine.create();
	world = engine.world;

  block0 = new Block(320,460,40,60)
  block1 = new Block(360,460,40,60)
  block2 = new Block(400,460,40,60)
  block3 = new Block(440,460,40,60)
  block4 = new Block(480,460,40,60)
  block5 = new Block(520,460,40,60)
  block6 = new Block(340,400,40,60)
  block7 = new Block(380,400,40,60)
  block8 = new Block(420,400,40,60)
  block9 = new Block(460,400,40,60)
  block10 = new Block(500,400,40,60)
  block11 = new Block(360,340,40,60)
  block12 = new Block(400,340,40,60)
  block13 = new Block(440,340,40,60)
  block14 = new Block(480,340,40,60)
  block15 = new Block(940,320,40,60)
  block16 = new Block(980,320,40,60)
  block17 = new Block(1020,320,40,60)
  block18 = new Block(1060,320,40,60)
  block19 = new Block(960,260,40,60)
  block20 = new Block(1000,260,40,60)
  block21 = new Block(1040,260,40,60)
  ground1 = new Ground(665,710,1600,30)
  hexagon1 = new Hexagon(70,500,40,40)
  stand1 = new Stand(420,500,250,20)
  stand2 = new Stand(1000,350,180,20)
	Sling1 = new Slingshot(hexagon1.body,{x:70,y:500})
  Engine.run(engine);
}


function draw() {
  background(56,44,44); 
  
  block0.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  ground1.display()
  hexagon1.display()
  stand1.display()
  stand2.display()
  Sling1.display()

  textSize(20);
  fill("lightyellow");
  text(mouseX + "," + mouseY, mouseX, mouseY)


}
function mouseDragged() {
Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
Sling1.fly()
}
