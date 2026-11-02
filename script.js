let canvasHeight = 400;
let canvasWidth = 750;
let high = 100;
let wide = 50;
let movementX = 750;
let movementY = 1;
let speed = 1;
let time = 10;
let lastTime = 0;
let score = 0;
let squareTwoY = 1;
let gameOver = false;
let highScore = 0;
let state = 0;
let shoot = 0;
let returnState = 0;
let startGame = false;
let countDown = 5;
let n = 10;
let triangleStart = 0;
let triangleStep = 40;
let shooting = false;
let bulletHeight = 0;
let enemyOneAlive = true;
let enemyTwoAlive = true;
let bulletCount = 0;
let lastScoreBulletCount = 0;
let blocksPerBullet = 2;
let bulletSpeed = 4;
let coins = 0;
let gameOverLastTime = 0;
let doubleBulletPowerUp = false;
// the setup
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  highScore = getItem("highScore") || 0;
  coins = getItem("coins") || 0;
}
// Game over timer
function timer() {
  if (millis() - gameOverLastTime >= 1000) {
    gameOverLastTime = millis();
    countDown = countDown - 1;
  }
  if (countDown === 0) {
    location.reload();
  }
}
// pausing when "p" is pressed
function pause() {
  storeItem("state", state);
  storeItem("returnState", returnState);
  storeItem("speed", speed);
  storeItem("startGame", startGame);
  storeItem("squareTwoY", squareTwoY);
  storeItem("movementX", movementX);
  storeItem("movementY", movementY);
  storeItem("time", time);
  storeItem("lastTime", lastTime);
  storeItem("score", score);
  storeItem("gameOver", gameOver);
  text("You paused the game", 325, 150, 200, 100);
  text("Press U to unpause", 325, 175, 200, 100);
  noLoop();
}
// unpausing when "u" is pressed
function unpause() {
  state = getItem("state");
  returnState = getItem("returnState");
  speed = getItem("speed");
  startGame = getItem("startGame");
  squareTwoY = getItem("squareTwoY");
  movementX = getItem("movementX");
  movementY = getItem("movementY");
  time = getItem("time");
  lastTime = getItem("lastTime");
  score = getItem("score");
  gameOver = getItem("gameOver");
  loop();
}
// The steps for game over
function gameover() {
  if (gameOver === true) {
    return;
  }
  gameOver = true;
  angryFace();
  state = 4;
  timer();
  text("Game Over! Your score is:", 350, 200, 200, 250);
  text(score, 500, 200, 200, 250);
  text("The game will restart in:", 350, 225, 200, 250);
  text(countDown, 500, 225, 200, 250);
  coins = coins + score / (2 / state);
  coins = ceil(coins);
  storeItem("coins", coins);
}
// The introduction page
function intro() {
  fill("black");
  text("Coins:", 0, 40, 200, 50);
  text(coins, 40, 40, 200, 50);
  fill("white");
  rect(0, 0, 50, 30);
  fill("black");
  text("Store", 10, 7.5, 200, 50);
  text("WELCOME", 350, 75, 100, 50);
  text("Avoid the blocks to set the high score", 300, 125, 200, 50);
  text("Choose your mode to play:", 300, 150, 200, 50);
  text("Press e for Easy", 300, 175, 200, 50);
  text("Press h for Hard", 400, 175, 200, 50);
  text("Controls:", 300, 200, 200, 50);
  text("-Up and down arrows control movement", 300, 225, 200, 50);
  text("-Left arrow can speed up the game 4x", 300, 260, 200, 50);
  text("-Press R or click on the restart button to restart", 300, 295, 200, 50);
  text("-Press P to pause", 300, 330, 200, 50);
  text("-Press S to shoot a bullet", 300, 350, 200, 50);
  text("-Press I for more gameplay info", 300, 370, 200, 50);
  if (
    mouseX > 0 &&
    mouseX < 50 &&
    mouseY > 0 &&
    mouseY < 30 &&
    mouseButton.left
  ) {
    state = 6;
  }
}
function extraGameInfo() {
  fill("black");
  text("Extra Info", 200, 50, 200, 50);
  text("Easy mode:", 200, 70, 200, 50);
  text(
    "-Get a bullet after every time your score goes up by two points",200,90,200,50);
  text("-Regular speed", 200, 120, 200, 50);
  text("Hard mode:", 200, 150, 200, 50);
  text(
    "-Get a bullet after very time you score goes up by one point",200,170,200,50);
  text("-2X Speed", 200, 200, 200, 50);
  text("Hit B to go back to the main menu", 200, 350, 200, 50);
}
function store() {
  if (mouseX > 290 && mouseX < 370 && mouseY > 80 && mouseY < 105) {
    fill("green");
  } else {
    fill("white");
  }
  rect(290, 80, 80, 25);
  if (mouseX > 290 && mouseX < 370 && mouseY > 80 && mouseY < 105 && mouseButton.left && coins > 30){
    coins = coins - 30;
    storeItem("coins", coins);
    doubleBulletPowerUp = true;
  }
  fill("black");
  text("Coins:", 0, 40, 200, 50);
  text(coins, 40, 40, 200, 50);  
  text("WELCOME TO THE STORE", 300, 50, 200, 50);
  text("Powerups:", 100, 70, 200, 50);
  text("Double bullets 1 round:", 100, 85, 200, 50);
  text("30 coins", 300, 85, 200, 50);
}
function smileyFace() {
  circle(wide + 25, high + 35, 20);
  circle(wide + 75, high + 35, 20);
  arc(wide + 50, high + 65, 40, 40, 0, PI);
}
function angryFace() {
  circle(wide + 25, high + 35, 20);
  circle(wide + 75, high + 35, 20);
  circle(wide + 50, high + 65, 40);
}
// The what to run constantly looping as draw
function draw() {
  background(220);
  coins = getItem("coins");
  if (state === 0) {
    intro();
  }
  if ((state > 0 && state < 3) || state === 4) {
    game();
    smileyFace();
  }
  if (state === 3) {
    pause();
  }
  if (state === 4) {
    angryFace();
  }
  if (state === 5) {
    extraGameInfo();
  }
  if (state === 6) {
    store();
  }
  if (state === 4) {
  background(220);
  game();
  timer();
  angryFace();

  fill("black");
  text("Game Over! Your score is:", 250, 200);
  text(score, 450, 200);

  text("The game will restart in:", 250, 225);
  text(countDown, 450, 225);
}}
// The main gameplay
function game() {
  background(220);
  // Contact Detection
  if (gameOver === false) {
    smileyFace();
  }
  if (shooting === true) {
    square(wide + 100 + shoot, bulletHeight + 50, 20, 10);
    shoot += bulletSpeed * state;
  }
  if (shoot + wide + 100 > canvasWidth) {
    shooting = false;
    shoot = 0;
  }
  if (
    enemyOneAlive &&
    shooting === true &&
    wide + 100 + shoot > movementX &&
    wide + 100 + shoot < movementX + 100 &&
    bulletHeight + 50 > movementY &&
    bulletHeight + 50 < movementY + 100
  ) {
    enemyOneAlive = false;
    shooting = false;
    shoot = 0;
  }

  if (
    enemyTwoAlive &&
    shooting === true &&
    wide + 100 + shoot > movementX &&
    wide + 100 + shoot < movementX + 100 &&
    bulletHeight + 50 > squareTwoY &&
    bulletHeight + 50 < squareTwoY + 100
  ) {
    enemyTwoAlive = false;
    shooting = false;
    shoot = 0;
  }
  if (score - lastScoreBulletCount >= blocksPerBullet / state && doubleBulletPowerUp === false) {
    bulletCount = bulletCount + 1;
    lastScoreBulletCount = score;
  }
  if(score - lastScoreBulletCount >= blocksPerBullet / 1 / state && doubleBulletPowerUp === true){
    bulletCount = bulletCount + 1
    lastScoreBulletCount = score; 
  }
  if (
    enemyOneAlive === true &&
    wide < movementX + 100 &&
    wide + 100 > movementX &&
    high < movementY + 100 &&
    high + 100 > movementY
  ) {
    gameover();
  }

  if (
    enemyTwoAlive === true &&
    wide < movementX + 100 &&
    wide + 100 > movementX &&
    high < squareTwoY + 100 &&
    high + 100 > squareTwoY &&
    score > 9
  ) {
    gameover();
  }
  // used to count time for speed
  if (millis() - lastTime >= 1000) {
    lastTime = millis();
    time = time + 1;
  }
  //make the game go faster
  if (keyIsDown(LEFT_ARROW) && gameOver === false) {
    speed = 4;
  } else {
    speed = 1;
  }
  // the high score
  if (score > highScore && gameOver === false) {
    highScore = score;
    storeItem("highScore", highScore);
  }
  // making the random cube placements
  if (movementY === 400) {
    movementY = random(400);
  }

  if (squareTwoY == 400) {
    squareTwoY = random(400);
  }
  // The movement speed equation
  if (gameOver === false) {
    movementX -= 2 * speed * (time / 5) * state;
  }
  // If the cube moves off the screen
  if (movementX < 0) {
    movementX = canvasWidth;
    movementY = 400;
    squareTwoY = 400;
    score = score + 1;
    enemyOneAlive = true;
    enemyTwoAlive = true;
  }

  if (high > canvasHeight) {
    high = 0;
  }

  if (high < 0) {
    high = canvasHeight;
  }

  if (keyIsDown(DOWN_ARROW) && gameOver === false) {
    high = high + 10;
  }

  if (keyIsDown(UP_ARROW) && gameOver === false) {
    high = high - 10;
  }

  if (score > 9 && enemyTwoAlive === true) {
    fill("red");
    square(movementX, squareTwoY, 100);
  }

  if (
    mouseX > 600 &&
    mouseX < 700 &&
    mouseY < 60 &&
    mouseY > 10 &&
    mouseButton.left
  ) {
    location.reload();
  }

  fill("white");
  square(wide, high, 100);
  if (enemyOneAlive === true) {
    fill("red");
    square(movementX, movementY, 100);
  }
  stroke(0);
  fill("black");
  text("Restart", 600, 10, 100, 50);
  text("Score:", 50, 10, 100, 50);
  text(score, 120, 10, 100, 50);
  text("High Score:", 50, 25, 100, 50);
  text(highScore, 120, 25, 100, 50);
  text("Bullets:", 50, 40, 100, 50);
  text(bulletCount, 120, 40, 10, 50);
  for (let i = 0; i < n; i++) {
    let y1 = triangleStart + triangleStep * i;
    let y2 = triangleStart + triangleStep * i + 20;
    let y3 = triangleStart + triangleStep * i + 40;
    triangle(0, y1, 40, y2, 0, y3);
  }
}
// If keys are pressed what to do
function keyPressed() {
  if (key === "r") {
    location.reload();
  }
  if (key === "e") {
    state = 1;
    returnState = 1;
  }
  if (key === "h") {
    state = 2;
    returnState = 2;
  }
  if (key === "p") {
    state = 3;
  }
  if (key === "u") {
    unpause();
    state = returnState;
  }
  if (
    key === "s" &&
    shooting === false &&
    gameOver === false &&
    bulletCount > 0
  ) {
    shooting = true;
    bulletHeight = high;
    bulletCount = bulletCount - 1;
  }
  if (key === "i") {
    state = 5;
  }
  if (key === "b" && state === 4) {
    state = 0;
  }
  if (key === "b" && state === 5){
    state = 0;
  }
}