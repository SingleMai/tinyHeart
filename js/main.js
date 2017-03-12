document.body.onload = game;

var can1,can2,ctx1,ctx2;
var deltaTime;
var lastTime;
var canWid,canHei;
var isStart = false;

var bgPic = new Image();
var ane ;
var fruit;
var mom;
var mx,my;
var child;
var data;
var wave;
var kiss;
var dust;


function game(){
  init();
  lastTime = Date.now();
  deltaTime = 0;
  gameloop();
}

function init(){
  can1 = document.getElementById("can1");
  can2 = document.getElementById("can2");
  ctx1 = can1.getContext('2d');//fishes,dust,ui,circle
  ctx2 = can2.getContext('2d');//background,ane,fruits

  can1.addEventListener('mousemove',onMouseMove,false);

  canWid = can2.width;
  canHei = can2.height;
  bgPic.src = "./src/background.jpg";

  ane = new Ane();
  ane.init();
  fruit = new Fruit();
  fruit.init();
  mom = new Mom();
  mom.init();
  mx = canWid/2;
  my = canHei/2;
  child = new Child();
  child.init();
  data = new Data();
  wave = new Wave();
  kiss = new Kiss();
  dust = new Dust();
  wave.init();
  kiss.init();
  dust.init();
}

function gameloop(){
  window.requestAnimFrame(gameloop);
  var now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;

  if(deltaTime > 40) deltaTime = 40;

  drawBackground();
  ane.draw();
  fruitMonitor();
  fruit.draw();
  ctx1.clearRect(0,0,canWid,canHei);
  mom.draw();
  child.draw();
  data.draw();
  wave.draw();
  kiss.draw();
  dust.draw();
  momFruitCollision();
  momChildCollision();
}
function onMouseMove(e){
  if(e.offSetX || e.layerX){
    mx = e.offSetX == undefined ? e.layerX: e.offSetX;
    my = e.offSetY == undefined ? e.layerY: e.offSetY;
  }
}
