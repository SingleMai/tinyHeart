var Fruit = function(){
  this.alive = []; //boolean
  this.x = [];
  this.y = [];
  this.l = [];
  this.sped = [];
  this.aneNum = [];
  this.orange = new Image();
  this.blue = new Image();
  this.fruitType= [] ;
}

Fruit.prototype.num = 30;
Fruit.prototype.init = function(){
  for(var i=0; i < this.num ; i++){
    this.alive[i] = false;
    this.x[i] = 0;
    this.y[i] = 0;
    this.l[i] = 0;
    this.aneNum[i] = 0;
    this.sped[i] = Math.random()*0.017+0.003;
    this.born(i);
  }
  this.orange.src = "./src/fruit.png"
  this.blue.src = "./src/blue.png"
}

Fruit.prototype.draw = function(){
  for(var i=0; i < this.num ; i++){
    if(this.fruitType[i] === "blue"){
      var pic = this.blue;
    }else{
      var pic = this.orange;
    }
      if (this.alive[i]){
        if(this.l[i]<18){
        var num = this.aneNum[i];
        this.x[i] = ane.headx[num];
        this.y[i] = ane.heady[num];
        this.l[i] += this.sped[i] * deltaTime;
        }else{
        this.y[i] -= this.sped[i] * 7 *deltaTime;
        }

        ctx2.drawImage(pic,this.x[i]-this.orange.width/2,this.y[i]-this.orange.height/2,this.l[i],this.l[i]);
        if(this.y[i] < -4 ){
        this.alive[i] = false;
        }
    }
  }
}

Fruit.prototype.born = function(i){
  this.aneNum[i] = Math.floor(Math.random()*ane.num);
  this.alive[i] = true;
  this.l[i] = 0;
  var ran = Math.random();
  if (ran < 0.2){
    this.fruitType[i] = "blue";
  }else{
    this.fruitType[i] = "orange";
  }
}

Fruit.prototype.dead = function(i){
  this.alive[i] = false;
}

function fruitMonitor(){
  var num = 0;
  for(var i =0 ; i < fruit.num ; i++){
    if(fruit.alive[i]) num++;
  }
  if(num < 15){
    sendFruit();
    return;
  }
}

function sendFruit(){
  for(var i=0 ; i < fruit.num ; i++){
    if(!fruit.alive[i]){
      fruit.born(i);
      return;
    }
  }
}
