var Ane = function(){
  this.rootx = [];
  this.headx = [];
  this.heady = [];
  this.alpha = [];
  this.amp = [];
  this.alpha = 0;
}
Ane.prototype.num = 50;
Ane.prototype.init = function(){
  for(var i= 0; i< this.num ; i++){
    this.rootx[i] = i * 17.5 + Math.random()* 20;
    this.headx[i] = this.rootx[i];
    this.heady[i] = canHei - 250 + Math.random() * 50 ;
    this.amp[i] = Math.random() * 50 + 50 ;
  }
}

Ane.prototype.draw = function(){
  this.alpha += deltaTime * 0.001;
  var l = Math.sin(this.alpha);
  ctx2.save();
  ctx2.globalAlpha = 0.6;
  ctx2.lineWidth = 20;
  ctx2.lineCap = "round";
  ctx2.strokeStyle = "#3b154e";
  for(var i=0; i < this.num ; i++){
    this.headx[i] = this.rootx[i] + l * this.amp[i];
    ctx2.beginPath();
    ctx2.moveTo(this.rootx[i],canHei);
    ctx2.quadraticCurveTo(this.rootx[i],canHei-150 ,this.headx[i], this.heady[i]);
    ctx2.stroke();
  }
  ctx2.restore();
}
