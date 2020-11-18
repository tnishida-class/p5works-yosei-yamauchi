//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.size += 1;
  }

  // 画面外に出たボールを配列から削除する（関数を引数として渡す書き方を使っています）
  // balls = balls.filter(isInTheWindow);
}

function mouseClicked(){
  // const dx = mouseX - pmouseX;
  // const dy = mouseY - pmouseY;
  // if(mag(dx, dy) > 5){
  for(i = 0; i < 10; i++){
    const b = { x: random(0, windowWidth), y: random(0, windowHeight), size: 20 };
    balls.push(b);
  // }
}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// function isInTheWindow(b){
//   return b.x > 0 && b.x < width && b.y > 0 && b.y < height;
// }
