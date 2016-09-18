var mover = [];

n = 5;

function setup() {
  createCanvas(windowWidth, 150);
  for (var i = 0; i < 50; i++) {
    mover[i] = new Mover();
  }

};

function draw() {
  background(255);

  for (var i = 0; i < 50; i++) {

    mover[i].display();
    mover[i].update();
    mover[i].checkEdges();
  }

};

   // function mousePressed() {
   //  mover.push(new Mover(1, createVector(mouseX, mouseY)));

   // }