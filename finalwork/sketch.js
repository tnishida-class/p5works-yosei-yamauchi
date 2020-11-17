// 最終課題を制作しよう
let count1, count2, count3, count4;
let size1, size2, size3, size4;
let x, y;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count1 = 20;
  count2 = 10;
  count3 = 10;
  count4 = 0;
}



function draw(){
  background(0, 0, 205);
  count1 += 1;
  size1 = count1;
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

  count2 += 1
  size2 = count2
  noStroke();
  fill(0, 0, 205);
  ellipse(x, y, size2);


  count3 += 0.5;
  size3 = count3;
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

  count4 += 0.5
  size4 = count4
  noStroke();
  fill(0, 0, 205);
  ellipse(x, y, size4);
}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
  draw();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
