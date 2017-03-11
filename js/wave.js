var Wave = function(){
  this.x = [];
  this.y = [];
  this.r = [];
  this.alive = [];
}
Wave.prototype.num = 10;
Wave.prototype.init = function(){
  for(var i = 0 ; i < this.num ; i ++){
    this.alive[i] = false;
    this.r[i] = 0;
    this.x[i] = 0;
    this.y[i] = 0;
  }
}

Wave.prototype.draw = function(){
  for(var i = 0 ; i < this.num ; i++){
    if (this.alive[i]){
      //draw
      ctx1.save();
      ctx1.lineWidth = "3";
      ctx1.shadowColor = "white";
      ctx1.shadowBlur = "3";
      if (this.r[i] < 60 ){
        this.r[i] += deltaTime * 0.1;
        var alpha = 1 - this.r[i]/60;
        ctx1.beginPath();
        ctx1.strokeStyle = "rgba(123,149,227," + alpha + ")";
        ctx1.arc(this.x[i],this.y[i],this.r[i],0, Math.PI * 2);
        ctx1.stroke();
      }else{
        this.alive[i] = false;
        break;
      }
      ctx1.restore();
    }
  }
}

Wave.prototype.born = function (x,y) {
  for(var i = 0 ; i < this.num ; i++){
    if(!this.alive[i]){
      // born
      this.alive[i] = true ;
      this.r[i] = 5;
      this.x[i] = x;
      this.y[i] = y;
      return;
    }
  }
};
