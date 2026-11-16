let userName = [];
let userResponse = [];
let runFor = false;
let getName = false;
let endNameDisplay = 0;
function setup() {
  createCanvas(400, 400);
}

function getUserName(){
text("what is your name?", 100, 200, 200, 200);
    for (let i = 0; i < userName.length; i++){
      let textStep = 10;
      let textStart = 100;
      let x = textStart + textStep * i;
      text(userName[i], x, 250, 200, 200 );
    }
}

function sayHello(){
  text("hello",100, 200, 200, 200);
      for (let i = 0; i < userName.length; i++){
      let textStep = 10;
      let textStart = 130;
      let x = textStart + textStep * i;
      text(userName[i], x, 200, 200, 200 );
      if (i === userName.length - 1){
        text("how are you?", x + 20, 200, 200, 200);
      }
      for (let i = 0; i < userResponse.length; i++){
        let textStep = 10;
        let textStart = 130;
        let x = textStart + textStep * i;
        text(userResponse[i], x, 300, 200, 200);
      }
    }
}

function draw() {
  background(220);
  if (getName === false){
    getUserName();
  }
    if (getName === true){
      sayHello();
    }
}

function keyPressed(){
  if (key === "1" && getName === false){
    userName.pop();
  }
  if (key === "2"){
  getName = true;
  }
  if (key === "3"){
    location.reload();
  }
  if (key === "4"){
    userName.push(" ");
  }
  if (getName === false){
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
if (getName === true){
  if (key === "e"){
    userResponse.push("e");
  }
  if (key === "v"){
    userResponse.push("v");
  }
  if (key === "a"){
    userResponse.push("a");
  }
  if (key === "n"){
    userResponse.push("n");
  }
  if (key === "b"){
    userResponse.push("b");
  }
  if (key === "c"){
    userResponse.push("c");
  }
  if (key === "d"){
    userResponse.push("d");
  }
  if (key === "g"){
    userResponse.push("g");
  }
  if (key === "f"){
    userResponse.push("f");
  }
  if (key === "h"){
    userResponse.push("h");
  }
  if (key === "i"){
    userResponse.push("i");
  }
  if (key === "j"){
    userResponse.push("j");
  }
  if (key === "k"){
    userResponse.push("k");
  }
  if (key === "l"){
    userResponse.push("l");
  }
  if (key === "m"){
    userResponse.push("m");
  }
  if (key === "o"){
    userResponse.push("o");
  }
  if (key === "p"){
    userResponse.push("p");
  }
  if (key === "q"){
    userResponse.push("q");
  }
  if (key === "r"){
    userResponse.push("r");
  }
  if (key === "s"){
    userResponse.push("s");
  }
  if (key === "t"){
    userResponse.push("t");
  }
  if (key === "u"){
    userResponse.push("u");
  }
  if (key === "w"){
    userResponse.push("w");
  }
  if (key === "x"){
    userResponse.push("x");
  }
  if (key === "y"){
    userResponse.push("y");
  }
  if (key === "z"){
    userResponse.push("z");
  }
}
}