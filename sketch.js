
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
function setup() {
    createCanvas(800, 800);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(350, 740);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 100); 
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 500) {
        boxes.push(new Box(mouseX,mouseY,random(0,80),random(0,100)))
        // Every time a mouse press occures create a new box.
        console.log("hi")
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();

    for(var i = 0; i < boxes.length; i++){
        boxes[i],show()
    }
 
    // Use a for loop to show all the boxes

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
      friction : 0.3,
      restititution : 0.2
    }

    this.Body = Bodies.rectangle(x,y,w,h,options)
    this.width = w,
    this.height = h
    World.add(world,this.body)
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

     

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill("orange");
        rect(0,0,this.width,this.height)
        pop()
    }
}



