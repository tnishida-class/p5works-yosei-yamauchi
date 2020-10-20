// 小手調べ
function setup(){
  noFill();
  for(let i = 0; i < 10; i++){
    ellipse(50, 50, 10+10*i, 10+10*i);
    if(i<5){
    stroke(0, 0, 225);
    }
    else{
      stroke(225, 0, 0);
    }
  }
}
