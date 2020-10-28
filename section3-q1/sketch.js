// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(4000, 4000);
  background(255);
  let fc = color(0, 0, 255);　//文字の色　自由に変えてね
  let bc = color(255, 0, 0);　//吹き出しの色　自由に変えてね
  balloon("I love Nogizaka46", 20, 30, 45, 30, fc, bc);　//吹き出しの位置と　吹き出しの指す場所　自由に変えてね
}

function balloon(t, x, y, a, b, fc, bc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(bc);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  fill(bc);
  triangle(x , y + h + p * 2, x + 25 , y + h + p * 2, x + a, y + h + p * 2 + b);
  fill(fc);
  text(t, p + x, h + p + y);
}
