// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
    if(keyIsDown(" ".charCodeAt(0))){
      count = (count + 2) % cycle;
      if(count < 50){
        size = 100 - count
      }
      else{
        size = count
      }
      }
      count = (count + 1) % cycle;
    if(count < 50){
      size = 100 - count
    }
    else{
      size = count
    }
  noStroke();
  fill(255, 0, 0);
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
