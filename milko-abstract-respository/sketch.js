let canvas;

//STEP 2: LOAD IMAGE FILES INTO PROGRAM. 
let milkoImage; //global variable to access it throughout program.
function preload()//helps load all media files.
{
  milkoImage = loadImage ('assets/milko.jpeg'); //accessing jpeg file.
}

//STEP 1: CREATE CANVAS TO CREATE.
function setup() 
{
  canvas = createCanvas(milkoImage.width, milkoImage.height);
  //milko.Image sets the width of the canvas to the image's
  background('white'); 
  
  //STEP 3: CENTERING IMAGE ON WEBPAGE.
  let newCoordinateX = (windowWidth - milkoImage.width)/2;
  let newCoordinateY = (windowWidth - milkoImage.height)/2;
  canvas.position(newCoordinateX, newCoordinateY);
  //Preview window on right - image width or length / 2.
  
  //STEP 4: ACCESSING EACH PIXEL FROM IMAGE ON THE CANVAS via NESTED FOR LOOP
  for (let column = 0; column < milkoImage.width; column = column + 10) //for columns
    {
      for (let row = 0; row < milkoImage.height; row = row + 10) //for rows/left to right.
        {
          let xPosition = column; //cleaning variables
          let yPosition = row; //cleaning variables
          let j = milkoImage.get(xPosition, yPosition); //we use get to get color of each pixel via column, row from nested loops.
          push();
          translate(xPosition, yPosition);
          noFill();
          //strokeWeight(3);
          stroke(color(j));
          rotate(radians(random(1 - 360)));
          //curve(x1, y1, x2, y2, x3, y3, x4, y4)
          curve(xPosition, yPosition, sin(xPosition) * random(60), cos(xPosition) * sin(xPosition) * random(90), random(10), random(80), cos(yPosition) * sin (yPosition) * random(140), cos(xPosition) * sin(xPosition) * 50);
          pop();
        }//closes nested loop
    }//closes outer loop
}//closes setup function