//create a variable to hold one ball
let b;
var value = 0;
var monkey1, door, monkey2;

function preload(){
  monkey1 = loadImage('assets/monkey1.png');
  door = loadImage('assets/door.png');
  monkey2 = loadImage('assets/monkey2.png');
}

function setup() {
  createCanvas(800, 400);
  b = new Ball(400, 200); //make a new ball from the Ball class and call it b.
  imageMode (CENTER);

}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    scale(1/4);
    image(door,200,300);
}


function keyPressed() {

  }


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		image(monkey1,this.x,this.y,100,100);
	}


 moveBall(){ //update the location of the ball, so it moves across the screen
   if (keyIsDown(LEFT_ARROW)) {
     this.x = this.x-2.5;
     print("left");
   } else if (keyIsDown(RIGHT_ARROW)) {
     print("right");
     this.x = this.x+2.5;
   }
   if (keyIsDown(UP_ARROW)) {
     this.y = this.y-2.5;
     print("up");
   } else if (keyIsDown(DOWN_ARROW)) {
     print("down");
     this.y = this.y+2.5;
   }
 }
}
