let state = 'title';

//font
let standardFont;

//images
let brainImage;
let titleNerve;
let paper;
let calendar;
let clock;

//game assets
let nervePlayer, platforms;


function preload() {
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
  frameRate(60);

  //load nervePlayer
  nervePlayer = createSprite(100, 400);
  nervePlayer.addAnimation('idle', 'assets/player/nervePlayer_idle000.png', 'assets/player/nervePlayer_idle005.png');
  nervePlayer.setCollider(circle, 0, 0, 50);

  //load platforms
  platforms = new Group();

  for(let i = 0; i < 8; i++){
    let newPlatform = createSprite(50,450);
    newplatform.addImage(loadImage('assets/platform.png'))
    platforms.add(newPlatform);
  }
}

//----------------------------

function draw() {
  background(255, 161, 213);


  //switch states
  switch (state) {
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

//------------------------

function title() {
  image(brainImage, 180, 360);

  fill(252, 235, 136);
  rect(200, 270, 210, 70);


  fill(117, 209, 224);
  textFont(standardFont);
  textSize(50);
  text('Start', 260, 320);

  image(titleNerve, -50, 0);

  push();
  tint(255, 200);
  image(paper, 430, 400, 180, 200);
  image(clock, 400, 20, 200, 200);

  tint(255, 240);
  rotate(-5);
  image(calendar, -40, 420, 170, 120);

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

//------------------------------

function level1() {
  player1Load();


}

function player1Load() {
  animation(nervePlayer, 100, 400);

  //if no arrow input set velocity to 0
  nervePlayer.velocity.x = 0;

  if (keyIsDown(LEFT_ARROW)) nervePlayer.velocity.x = -5;
  if (keyIsDown(RIGHT_ARROW)) nervePlayer.velocity.x = 5;

  //if player falls
  if (nervePlayer.position.y > 650) {
    state = 'gameOver';
  }

  //drops player down
  if (platform.overlapPixel(nervePlayer.position.x, nervePlayer.position.y + 30) == false) {
    nervePlayer.velocity.y += GRAVITY;
  }

  //player on platform
  while (platform.overlapPixel(nervePlayer.position.x, nervePlayer.position.y + 30)) {
    nervePlayer.position.y--;
    nervePlayer.velocity.y = 0;
  }
}



//developer tool
function coordinates() {
  textSize(15);
  fill(255, 0, 0);
  noStroke();
  text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
}
