
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }


  var holder_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 330, 400, 20, ground_options)
  World.add(world, ground);

  holder = Bodies.rectangle(200, 100, 200, 20, holder_options);
  World.add(world, holder);

  var ball_options = {

    restitution: 1.0,
    density: 1.0

  }

  ball = Bodies.circle(220, 200, 40, ball_options);
  World.add(world, ball);


  var options = {
    bodyA: ball,
    bodyB: holder,
    stiffness: 0.4,
    length: 100,
    // elasticity: 0,
  }
  var string = Constraint.create(options);
  World.add(world, string);

  fill(255);
}


function draw() {
  canvas.position(windowWidth / 2 - 200, windowHeight / 2 - 200)
  background(255);
  Engine.update(engine);


  fill(0);
  text("Press space bar to oscillate the pendulam to left and right with mouse", 10, 20);
  text("Press Enter to stop the Pendulum from oscillating", 60, 50);

  fill("brown");
  rectMode(CENTER);
  // rect(holder.position.x, holder.position.y, 10, 10); 

  fill(0);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);


  noFill();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40);

  strokeWeight(8);
  stroke(0);
  line(ball.position.x, ball.position.y, holder.position.x, holder.position.y)




  if (keyCode === 32) {
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }

  else if (keyCode === ENTER) {
    ball.position.x = 200;

  }

}








