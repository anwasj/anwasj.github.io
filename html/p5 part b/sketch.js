let clouds;
let x = 0;
let speed = -5;

function preload() {
	clouds = loadImage('assets/cloud.png');
	hand = loadImage ('assets/hand.png');
}

function setup() {
		createCanvas(500, 500);

}

function draw() {
	background(200);
	image(clouds, x, 10, clouds.width / 2, clouds.height / 2)
	move();
}


//function move()
function move() {
	x = x + speed;
	if (x >= width || x < -30) {
		speed = -speed
	}
}
