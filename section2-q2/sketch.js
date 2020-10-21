// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill(196);
      if(j%2==0){
        rect(50 * i + 25, 25 * j, 25, 25);
        if(j<3){
        fill(255, 0, 0);
        ellipse(37.5 + 50 * i, 12.5 + 25 * j, 20, 20);
      }
        else if(j>4){
          fill(0);
          ellipse(37.5 + 50 * i, 12.5 + 25 * j, 20, 20);
        }
      }
      else{
        rect(50 * i, 25 * j, 25, 25);
        if(j<3){
        fill(255, 0, 0);
        ellipse(12.5 + 50 * i, 12.5 + 25 * j, 20, 20);
      }
        else if(j>4){
          fill(0);
          ellipse(12.5 + 50 * i, 12.5 + 25 * j, 20, 20);
        }
     }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
