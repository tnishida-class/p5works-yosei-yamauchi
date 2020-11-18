// 最終課題を制作しよう
let size1, size2;
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 205);
  size1 = 20;
  size2 = 10;
  x = random(0, windowWidth - 70);
  y = random(70, windowHeight);
}



function draw(){
  background(0, 0, 205);
  pochapocha();
  size1 += 1;
  if(size1 < 100){
  stroke(255);
  strokeWeight(6);
  fill(0, 0, 205);
  ellipse(x, y, size1);
  }
  else if(size1 < 125){
    stroke(0, 191, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size1);
  }
  else if(size1 < 150){
    stroke(0, 206, 209);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size1);
  }
  else if(size1 < 175){
    stroke(0, 0, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size1);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(x, y, size1);
  }

  size2 += 0.5;
  if(size2 < 50){
  stroke(255);
  strokeWeight(6);
  fill(0, 0, 205);
  ellipse(x, y, size2);
  }
  else if(size2 < 62.5){
    stroke(0, 191, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size2);
  }
  else if(size2 < 75){
    stroke(0, 206, 209);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size2);
  }
  else if(size2 < 87.5){
    stroke(0, 0, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(x, y, size2);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(x, y, size2);
  }

if(size1 > 200 && size2 > 100){
  noLoop();
}
}

function mouseClicked(){
  size1 = 20;
  size2 = 10;
  x = mouseX;
  y = mouseY;
  loop();
  draw();
}

function keyPressed(){ //間違えて「スペース押したら最初の位置」という関数作ってしまってので、一応置いときます
  if(key == " "){
    return setup();
    loop();
    redraw();
  }
}

function pochapocha(){
  textSize(15);
  noStroke();
  fill(0, 206, 209);
  text("ポチャ…", x + 10, y - 30);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
