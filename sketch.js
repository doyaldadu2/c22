const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine
var myworld
var ground
var ball

function setup() {
  createCanvas(800,400);
  myengine=Engine.create()
  myworld=myengine.world

var options={
  isStatic:true

}
ground=Bodies.rectangle(400,380,800,20,options)
World.add(myworld,ground)

var ballprop={
  restitution:0.5,
  isStatic:false
}
ball=Bodies.circle(200,100,25,ballprop)
World.add(myworld,ball)


  console.log(ground.position.x)
}

function draw() {
  background(255,255,255);
  Engine.update(myengine)  
  rectMode(CENTER)
    rect(ground.position.x,ground.position.y,800,20)
    ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}