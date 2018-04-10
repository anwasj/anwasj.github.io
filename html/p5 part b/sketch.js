let clouds;
let x = 0;
let speed = -2;
let hands;

function preload() {
	clouds = loadImage('assets/clouds.png');
	hands = loadImage('assets/hand.png')
}

function setup() {
	createCanvas(500, 500);
	console.log(clouds.width/2);
}

function draw() {
	background(200);
	image(clouds, x, 10, clouds.width / 2, clouds.height / 2)
	move();
	image(hands, 220, 390);
}


//function move()
function move() {
	x = x + speed;
	if (x >= width || x < -50) {
		speed = -speed
	}
}
