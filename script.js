var btnLeft = document.getElementById("left");
var btnRight = document.getElementById("right");
var container = document.getElementById("container");
var cover1 = document.getElementById("cover");
var imgs = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png"];
var borders = [
  "#090D3F",
  "#FDFFEF",
  "#3364C3",
  "#CAB7DD",
  "#2F4594",
  "#475CA9",
];
var index = 0;
opacity();
let alpha;
let timer;
cover();
function left() {
  if (index != 0) {
    index--;
  }
  bground();
  opacity();
  border();
  cover();
  console.log(index);
}
function right() {
  if (index < 5) {
    index++;
  }
  bground();
  opacity();
  border();
  cover();
  console.log(index);
}
function border() {
  container.style.borderColor = borders[index];
}
function bground() {
  container.style.backgroundImage = "url('./" + imgs[index] + "')";
}
function opacity() {
  if (index == 0) {
    btnLeft.style.opacity = 0.2;
    btnLeft.disabled = true;
  } else if (index > 0) {
    btnLeft.style.opacity = 1;
    btnLeft.disabled = false;
  }
  if (index == 5) {
    btnRight.style.opacity = 0.2;
    btnRight.disabled = true;
  } else if (index < 5) {
    btnRight.style.opacity = 1;
    btnRight.disabled = false;
  }
}

function cover() {
  alpha = 1.0;
  timer = 0;
  a = setInterval("coveridk()",10);
}
function coveridk(){
    alpha -= 0.01;
    cover1.style.opacity = alpha;
    console.log("alpha"+alpha);
    timer++;
    if(timer>=100 || alpha<=0){
      clearInterval(a);
    }
}
