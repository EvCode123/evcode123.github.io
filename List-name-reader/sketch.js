let userName = [];
let runFor = false;
let getName = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (getName === false){
  text("what is your name?", 100, 200, 200, 200);
    for (let i = 0; i < userName.length; i++){
      let textStep = 10;
      let textStart = 100;
      let x = textStart + textStep * i;
      text(userName[i], x, 250, 200, 200 );
    }
  }
    if (getName === true){
      text("hello",100, 200, 200, 200);
      for (let i = 0; i < userName.length; i++){
      let textStep = 10;
      let textStart = 130;
      let x = textStart + textStep * i;
      text(userName[i], x, 200, 200, 200 );
    }
    }
}

function keyPressed(){
  if (key === "1"){
    userName.pop();
  }
  if (key === "2"){
  getName = true;
  }
  if (key === "3"){
    location.reload();
  }
  if (key === "e"){
    userName.push("e");
  }
  if (key === "v"){
    userName.push("v");
  }
  if (key === "a"){
    userName.push("a");
  }
  if (key === "n"){
    userName.push("n");
  }
  if (key === "b"){
    userName.push("b");
  }
  if (key === "c"){
    userName.push("c");
  }
  if (key === "d"){
    userName.push("d");
  }
  if (key === "g"){
    userName.push("g");
  }
  if (key === "f"){
    userName.push("f");
  }
  if (key === "h"){
    userName.push("h");
  }
  if (key === "i"){
    userName.push("i");
  }
  if (key === "j"){
    userName.push("j");
  }
  if (key === "k"){
    userName.push("k");
  }
  if (key === "l"){
    userName.push("l");
  }
  if (key === "m"){
    userName.push("m");
  }
  if (key === "o"){
    userName.push("o");
  }
  if (key === "p"){
    userName.push("p");
  }
  if (key === "q"){
    userName.push("q");
  }
  if (key === "r"){
    userName.push("r");
  }
  if (key === "s"){
    userName.push("s");
  }
  if (key === "t"){
    userName.push("t");
  }
  if (key === "u"){
    userName.push("u");
  }
  if (key === "w"){
    userName.push("w");
  }
  if (key === "x"){
    userName.push("x");
  }
  if (key === "y"){
    userName.push("y");
  }
  if (key === "z"){
    userName.push("z");
  }
}