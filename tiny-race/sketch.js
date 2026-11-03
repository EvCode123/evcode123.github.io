let racerXs = [30, 30, 30, 30];
let startY = 50;
let yStep = 60;
let finishX = 560;

function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
  racerXs[1] = 50;
}

function pause(){
  noLoop();
}
function unpause(){
  loop();
}
function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    if (mouseButton.left && racerXs[i] < finishX && i >= 1 && i <= 2){
      racerXs[i] += 2;
    }
   if (keyIsDown(LEFT_ARROW) && racerXs[i] < finishX && i >= 3){
      racerXs[i] -=1;
    }
    circle(racerXs[i], y, 24);
  }
  text("Click to restart",racerXs[0]-75, 20);
  if (mouseX < racerXs[0] &&
    mouseX > racerXs[0]-75 &&
    mouseY < 20 &&
    mouseY > 0 &&
  mouseButton.left) {
    location.reload();
}
}
function keyPressed(){
  if (key === "p")
{
  pause();
}
if (key === "u")
{
  unpause();
}
if (key === "r") {
  location.reload();  
}
}
