
let canvasWidth = 400;
let canvasHeight = 400;

let snakeSize = 40;
let lastTime = 0;

let snakeX = [];
let snakeY = [];

let movementX = 0;
let movementY = 0;

let gameOver = false;

let score = 0;

let appleX;
let appleY;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  snakeX.push(200);
  snakeY.push(200);

  spawnApple();
}

function draw() {
  background("green");

  drawGrid();

  drawApples();
  drawSnake();

  // Don't continue the game if game over
  if (gameOver) {
    gameOverFunction();
    return;
  }

  // Keyboard controls
  if (keyIsDown(RIGHT_ARROW) && movementX !== -1) {
    movementX = 1;
    movementY = 0;
  }

  if (keyIsDown(LEFT_ARROW) && movementX !== 1) {
    movementX = -1;
    movementY = 0;
  }

  if (keyIsDown(UP_ARROW) && movementY !== 1) {
    movementX = 0;
    movementY = -1;
  }

  if (keyIsDown(DOWN_ARROW) && movementY !== -1) {
    movementX = 0;
    movementY = 1;
  }

  // Move snake every 300 milliseconds
  if (millis() - lastTime >= 300) {
    lastTime = millis();
    moveSnake();
  }

  collisionDetection();

  // Draw score
  fill("white");
  textSize(20);
  text("Score: " + score, 10, 25);
}

function drawGrid() {
  stroke("black");

  for (let i = 0; i < 9; i++) {
    let y = 40 + 40 * i;
    line(0, y, 400, y);
  }

  for (let i = 0; i < 9; i++) {
    let x = 40 + 40 * i;
    line(x, 0, x, 400);
  }
}

function drawSnake() {
  fill("black");
  noStroke();

  for (let i = 0; i < snakeX.length; i++) {
    rect(snakeX[i], snakeY[i], snakeSize, snakeSize);
  }
}

function moveSnake() {
  let nextValueX = snakeX[0] + movementX * snakeSize;
  let nextValueY = snakeY[0] + movementY * snakeSize;

  // Add new head
  snakeX.unshift(nextValueX);
  snakeY.unshift(nextValueY);

  // Check if apple was eaten
  if (nextValueX === appleX && nextValueY === appleY) {
    score++;
    spawnApple();
  } else {
    // Remove tail if no apple was eaten
    snakeX.pop();
    snakeY.pop();
  }
}

function collisionDetection() {
  let headX = snakeX[0];
  let headY = snakeY[0];

  // Wall collision
  if (
    headX >= canvasWidth ||
    headX < 0 ||
    headY >= canvasHeight ||
    headY < 0
  ) {
    gameOver = true;
  }

  // Self collision
  for (let i = 1; i < snakeX.length; i++) {
    if (headX === snakeX[i] && headY === snakeY[i]) {
      gameOver = true;
    }
  }
}

function spawnApple() {
  appleX = floor(random(0, 10)) * snakeSize;
  appleY = floor(random(0, 10)) * snakeSize;
}

function drawApples() {
  fill("red");
  noStroke();

  rect(appleX, appleY, snakeSize, snakeSize);
}

function gameOverFunction() {
  fill("white");
  textAlign(CENTER);

  textSize(35);
  text("GAME OVER", 200, 190);

  textSize(20);
  text("Final Score: " + score, 200, 225);

  textSize(15);
  text("Press SPACE to restart", 200, 255);

  textAlign(LEFT);
}

function keyPressed() {
  if (key === ' ' && gameOver) {
    snakeX = [200];
    snakeY = [200];

    movementX = 0;
    movementY = 0;

    score = 0;
    gameOver = false;

    spawnApple();
    lastTime = millis();
  }

  return false;
}