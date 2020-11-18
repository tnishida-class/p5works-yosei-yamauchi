// 最終課題を制作しよう
let scores;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 205);
  scores = [];
}



function draw(){
  background(0, 0, 205);
for(let i = 0; i < scores.length; i++){
  let s = scores[i];
  pochapocha();
  s.size1 += 1;
  if(s.size1 < 75){
  stroke(255);
  strokeWeight(6);
  fill(0, 0, 205);
  ellipse(s.x, s.y, s.size1);
  }
  else if(s.size1 < 100){
    stroke(0, 191, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size1);
  }
  else if(s.size1 < 125){
    stroke(0, 206, 209);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size1);
  }
  else if(s.size1 < 150){
    stroke(0, 0, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size1);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size1);
  }

  s.size2 += 0.5;
  if(s.size2 < 37.5){
  stroke(255);
  strokeWeight(6);
  fill(0, 0, 205);
  ellipse(s.x, s.y, s.size2);
  }
  else if(s.size2 < 50){
    stroke(0, 191, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size2);
  }
  else if(s.size2 < 62.5){
    stroke(0, 206, 209);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size2);
  }
  else if(s.size2 < 75){
    stroke(0, 0, 255);
    strokeWeight(6);
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size2);
  }
  else{
    noStroke();
    fill(0, 0, 205);
    ellipse(s.x, s.y, s.size2);
  }


 }
}

function mouseClicked(){
const s = {
  x: mouseX,
  y: mouseY,
  size1: 20,
  size2: 10
}

}

function keyPressed(){
  if(key == " "){
for( let i = 0; i < 10; i++){
  const s = {
    x: random(0, windowWidth - 70),
    y: random(70, windowHeight),
    size1: 20,
    size2: 10
    }
  scores.push(s);
  }
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
