// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill(196);
      rect(10 * i, 10 * j, 5, 5);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
