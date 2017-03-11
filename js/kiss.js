var Kiss = function(){
  this.x = [];
  this.y = [];
  this.r = [];
  this.alive = [];
}

Kiss.prototype.num = 5;
Kiss.prototype.init = function(){
  for(var i = 0 ; i < this.num ; i ++){
    this.alive[i] = false;
    this.r[i] = 0;
    this.x[i] = 0;
    this.y[i] = 0;
  }
}

Kiss.prototype.draw = function(){
  for(var i = 0 ; i < this.num ; i++){
    if (this.alive[i]){
      //draw
      ctx1.save();
      ctx1.lineWidth = "4";
      ctx1.shadowBlur = "4";
      ctx1.shadowColor = "#FF6600";
      if (this.r[i] < 150 ){
        this.r[i] += deltaTime * 0.1;
        var alpha = 1 - this.r[i]/150;
        ctx1.beginPath();
        ctx1.strokeStyle = "rgba(253,163,13," + alpha + ")";
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

Kiss.prototype.born = function (x,y) {
  for(var i = 0 ; i < this.num ; i++){
    if(!this.alive[i]){
      // born
      this.alive[i] = true ;
      this.r[i] = 30;
      this.x[i] = x;
      this.y[i] = y;
      return;
    }
  }
};
