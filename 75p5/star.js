

// Position Variables

var x = 0;
var y = 0;

// Speed - Velocity
var vx = 0;
var vy = 0;

// Acceleration
var ax = 0;
var ay = 0;

var vMultiplier = 0.007;
var bMultiplier = 0.6;




//setup

function setup() {
  createCanvas(600,600);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}




//draw

function draw() {
  background(200);
  starMove();
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -150.0);
  star(0, 0, 30, 70, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a+halfAngle) * radius1;
      sy = y + sin(a+halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);

  if (mouseIsPressed) {
  r = random(255);
  g = random(255);
  b = random(255);  	}

}




//movement

function starMove() {

	ax = accelerationX;
	ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier;
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the canvas
	if (x < 0) {
		x = 0;
		vx = -vx * bMultiplier;
	}
 	if (y < 0) {
 		y = 0;
 		vy = -vy * bMultiplier;
 	}
 	if (x > width - 20) {
 		x = width - 20;
 		vx = -vx * bMultiplier;
 	}
 	if (y > height - 20) {
 		y = height - 20;
 		vy = -vy * bMultiplier;
 	}

}



}
