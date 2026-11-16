let canvasWidth = 400;
let canvasHeight = 400;
let snakeSize = 1;
let snakeX = [200];
let snakeY = [200];
function setup(){
    createCanvas(canvasWidth, canvasHeight);
}

function draw(){
    background("green");
    drawGrid();
    drawSnake();
}

function drawGrid(){
    for (let i = 0; i < 9; i ++){
        y = 40 + 40 * i;
        line(0, y, 400, y);
    }
    for (let i = 0; i < 9; i ++){
        x = 40 + 40 * i;
        line(x, 0, x, 400);
    }
}

function drawSnake(){
    fill("black");
    for(let i = 0; i < snakeSize; i ++){
        rect(snakeX[i], snakeY[i], 40, 40);
    }
}