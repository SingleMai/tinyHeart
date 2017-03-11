var Dust = function() {
  this.x = [];
  this.y = [];
  this.amp = [];
  this.alpha = [];
  this.pic = [];
}

Dust.prototype.num = 30;
Dust.prototype.init = function(){
  for(var i = 0 ; i < this.num ; i++){
    this.x[i] = canWid * Math.random();
    this.y[i] = canHei * Math.random() - 100;
    this.pic[i] = new Image();
    this.pic[i].src = "./src/dust" + Math.floor(Math.random()*7) + ".png";
    this.amp[i] =  Math.random() * 50 + 50;
    this.alpha[i] = 0;
  }
}
Dust.prototype.draw = function(){
  for(var i = 0; i < this.num ; i++){
    this.alpha[i] += deltaTime * 0.001;
    var l = Math.sin(this.alpha[i]);
    ctx1.drawImage(this.pic[i], this.x[i] + l * this.amp[i], this.y[i]);
  }
}
