var Data = function(){
  this.score = 0;
  this.fruitNum = 0;
  this.double = 1;
  this.gameOver = false;
  this.w = canWid/2;
  this.h = canHei/2;
  this.gameOverAlpha = 0;
}


Data.prototype.draw = function(){
    ctx1.save();
    ctx1.font = "35px Baloo Bhaina";
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.textAlign = "center";
    ctx1.fillStyle="white";
    ctx1.fillText("Score:" + this.score,this.w,this.h-235);
    if(data.gameOver){
      this.gameOverAlpha += deltaTime *0.0005;
      ctx1.fillStyle = "rgba(255,255,255," + this.gameOverAlpha + ")";
      ctx1.fillText("GAME OVER!",this.w,this.h);
    }
    ctx1.restore();
}

Data.prototype.calScore = function(){
  this.score = this.score + this.fruitNum * this.double ;
  this.fruitNum = 0;
  this.double = 1;
}
