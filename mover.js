var Mover = function(mass,x,y) {

  this.position = createVector(x, y);
  this.velocity = createVector(random(10), random(10));
  this.acceleration = createVector(0.01, 0.01);
  this.topspeed = 5;


  // for (var i = 0; i < num; i++) {
  //   this.mover.push(new Mover(this.origin));
  // };

//========update============
  this.update = function() {

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);

    // vector flock to mouse 
    var mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position);
    // magnitude of acceleration
    this.acceleration.setMag(.1);

  };

//=======display==========

  this.display = function() {
    fill(150);
    // stroke(0,0,0,100);
    //  ellipse(this.position.x-8, this.position.y, 10, 5);
    //   ellipse(this.position.x+8, this.position.y, 10, 5);
     fill(0);
    noStroke();
    ellipse(this.position.x, this.position.y, random(20), random(20));
  };

  //=======check edges=======
  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
     if (this.position.y < 0) {
        this.velocity.y *= -1;
      }
  };
  

};