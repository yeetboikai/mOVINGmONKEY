//create a variable to have the images and values for the motion
let b; /variable of the object
var value = 0; //value of moving
var monkey1, door, monkey2; //images

function preload(){ //load all the images before anything else
  monkey1 = loadImage('assets/monkey1.png');
  door = loadImage('assets/door.png');
  monkey2 = loadImage('assets/monkey2.png');
}

function setup() {
  createCanvas(800, 400);
  b = new Ball(400, 200); 
  imageMode (CENTER);
// sets all the canvas size and color and sets the image center to be the coordinate choice
}


function draw(){
	background(220);
    b.drawMonkey(); //draw the monkey
    b.moveMonkey(); //move the monkey code
    scale(1/4);
    image(door,200,300); //for later use but objective is to get monkey to class which is the door
}
//Monkey class to set all the properties it has
class Ball {

	constructor(x,y){
		    this.x = x;
    		this.y = y;
	}
	drawMonkey(){  // loads the monkey image
    		image(monkey1,this.x,this.y,100,100);
	}


 moveMonkey(){ //sets the motion of the monkey
   if (keyIsDown(LEFT_ARROW)) {//sets the key when holding down it will move to the left 
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
