// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);
  barchart(scores);
}

// テキスト「配列と繰り返し」
function sum(arr){
  let n = 0;
  for(let i = 0; i < arr.length; i++){ n += arr[i]; }
  return n;
}

//　テキスト「配列と繰り返し」練習問題
function average(arr){
  let n = 0
  for(let i = 0; i < arr.length; i++){
    n += scores[i];
  }
  return n / arr.length;
  // BLANK[1]
}

function largest(arr){
  let n = 0;
  for(let i = 0; i < arr.length; i++){
    if(n < arr[i]){
      arr[i] = n;
    }
    // BLANK[2]
  }
  return n;
}

function smallest(arr){
  let n = 100;
  for(let i = 0; i < arr.length; i++){
    if(n > arr[i]){
      arr[i] = n;
    }
    // BLANK[3]
  }
  return n;
}

// テキスト「配列を使った描画」棒グラフ
function barchart(scores){
  scaleY(10);
  a = largest(scores);
  b = smallest(scores);
  c = average(scores);

  // BLANK[4] (hint: largest, smallest, average を使って先にそれぞれの値を計算しておきます)

  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;
    const h = height * scores[i] / 100;
    if(scores[i] = a){
      fill(255, 0, 0);
    }
    else if(scores[i] = b){
      fill(o, o, 255);
    }
    else{
      fill(0);
    }
      // BLANK[5] (hint: 棒グラフの色を変える)
    rect(i * dx + 2, height - h, dx - 4, h);
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);
  }
  fill(255, 204, 0);
  line(0, height - c, width, height- c);
  fill(0);
  text(c.toPrecision(3), 0, height - c);

  // BLANK[6] (hint: 平均点の線を引きます)
}

function scaleY(n){
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }
}

function scaleX(n){
  for(let i = 0; i < n; i++){ line(width * i / n, 0, width * i / n, height); }
}
