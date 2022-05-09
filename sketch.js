let state;

//font
let standardFont;

//images
let brainImage;
let titleNerve;
let paper;
let calendar;
let clock;

function preload(){
  //load title images
  brainImage = loadImage('assets/images/brainHead.png');
  titleNerve = loadImage('assets/images/nerveTitle.png');
  paper = loadImage('assets/images/paper.png');
  calendar = loadImage('assets/images/calendar.png')
  clock = loadImage('assets/images/clock.png');

  standardFont = loadFont('assets/fonts/normalFont.ttf');

}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(255, 161, 213);

  state = 'title';



  //switch states
  switch (state){
    case 'title':
      title();
      break;
    case 'level1':
      level1();
      break;
    case 'level2':
      level2();
      break;
    case 'level3':
      level3();
      break;
    case 'levelEnd':
      levelEnd();
      break;
    case 'gameOver':
      gameOver();
      break;
  }

//developer tool
  coordinates();


}

function title(){
  image(brainImage,180,360);

  fill(252, 235, 136);
  rect(200,270,210,70);


  fill(117, 209, 224);
  textFont(standardFont);
  textSize(50);
  text('Start',260,320);

  image(titleNerve, -50,0);

  push();
  tint(255,200);
  image(paper, 430,400,180,200);
  image(clock,400,20,200,200);

  tint(255,240);
  rotate(-5);
  image(calendar,-40,420, 170,120);

  pop();

//mouse detect

  if (mouseX < width * 0.66 && mouseX > width * 0.33) {
  if (mouseY < height * 0.55 && mouseY > height * 0.45) {
    if (mouseIsPressed === true) {
      state = 'level1';
      }
    }
  }
}

function level1(){
  background(20);
}

//developer tool
function coordinates() {
  textSize(15);
fill(255, 0, 0);
noStroke();
text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
}
