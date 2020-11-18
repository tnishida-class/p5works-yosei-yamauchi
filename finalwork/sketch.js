// 最終課題を制作しよう
let size1, size2, size3, size4;
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 205);
  size1 = 20;
  size2 = 10;
  size3 = 10;
  size4 = 0;
  x = random(0, windowWidth - 70);
  y = random(70, windowHeight);
}



function draw(){
  background(0, 0, 205);
  pochapocha();
  size1 += 1;
  if(size1 < 100){
  noStroke();
  fill(255);
  ellipse(x, y, size1);
  }
  else if(size1 < 125){
    noStroke();
    fill(0, 191, 255);
    ellipse(x, y, size1);
  }
  else if(size1 < 150){
    noStroke();
    fill(0, 206, 209);
    ellipse(x, y, size1);
  }
  else if(size1 < 175){
    noStroke();
    fill(0, 0, 255);
    ellipse(x, y, size1);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(x, y, size1);
  }

  size2 += 1
  noStroke();
  fill(0, 0, 205);
  ellipse(x, y, size2);


  size3 += 0.5;
  if(size3 < 50){
  noStroke();
  fill(255);
  ellipse(x, y, size3);
  }
  else if(size3 < 62.5){
    noStroke();
    fill(0, 191, 255);
    ellipse(x, y, size3);
  }
  else if(size3 < 75){
    noStroke();
    fill(0, 206, 209);
    ellipse(x, y, size3);
  }
  else if(size3 < 87.5){
    noStroke();
    fill(0, 0, 255);
    ellipse(x, y, size3);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(x, y, size3);
  }

  size4 += 0.5
  noStroke();
  fill(0, 0, 205);
  ellipse(x, y, size4);


if(size1 > 200 && size2 > 200 && size3 > 100 && size4 > 100){
  noLoop();
}
}

function mouseClicked(){
  size1 = 20;
  size2 = 10;
  size3 = 10;
  size4 = 0;
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
  fill(0, 206, 209);
  text("ポチャ…", x + 10, y - 30);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
