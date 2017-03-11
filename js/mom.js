var Mom = function(){
  this.x ;
  this.y ;
  this.angle;

  this.bigEye =[];
  this.bigEyeCount = 0;
  this.bigEyeTimer = 0;
  this.bigEyeInterval = 2000;

  // this.bigBody =new Image();
  this.bigBodyOra = [];
  this.bigBodyBlu = [];
  this.bigBodyCount = 0;
  this.bigBodyTimer = 0;

  this.bigTail = [];
  this.bigTailCount = 0;
  this.bigTailTimer = 0;

}

Mom.prototype.init = function(){
  this.x = canWid/2;
  this.y = canHei/2;
  this.angle = 0;

  for(var i = 0 ; i <2 ; i++){
    this.bigEye[i] = new Image();
    this.bigEye[i].src = "src/bigEye" + i +".png";
  }


  // this.bigBody.src = "src/bigSwim0.png";
  for(var i = 0; i < 8; i++){
    this.bigBodyOra[i] = new Image();
    this.bigBodyBlu[i] = new Image();
    this.bigBodyOra[i].src = "src/bigEat" + i + ".png";
    this.bigBodyBlu[i].src = "src/bigEatBlue" + i + ".png";
  }


  for(var i = 0 ; i < 8 ; i++){
    this.bigTail[i] = new Image();
    this.bigTail[i].src = "src/bigTail" + i + ".png";
  }
}
Mom.prototype.draw = function(){
  //lerpDistance
  this.x = lerpDistance(mx,this.x,0.99);
  this.y = lerpDistance(my,this.y,0.99);

  //lerpAngle
  var deltaY = my - this.y;
  var deltaX = mx - this.x;
  var beta = Math.atan2(deltaY,deltaX) + Math.PI;
  this.angle = lerpAngle(beta,this.angle,0.6);

  // Tail
  this.bigTailTimer += deltaTime;
  if (this.bigTailTimer > 50){
    this.bigTailCount = (this.bigTailCount + 1) % 8;
    this.bigTailTimer %= 50;
  }
  //Eye
  this.bigEyeTimer += deltaTime;
  if(this.bigEyeTimer > this.bigEyeInterval){
    this.bigEyeCount = (this.bigEyeCount + 1) % 2;
    this.bigEyeTimer %= this.bigEyeInterval;
    if (this.bigEyeCount === 0){
      this.bigEyeInterval = Math.random() * 1500 + 2000;
    }else{
      this.bigEyeInterval = 200;
    }
  }
  //Body
  if(data.fruitNum < 7){
  this.bigBodyCount = data.fruitNum;
  }else{
    this.bigBodyCount = 7;
  }

  var bigTailNum = this.bigTailCount;
  var bigEyeNum = this.bigEyeCount;
  var bigBodyNum = this.bigBodyCount;

  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);

  if(data.double === 1){
    ctx1.drawImage(this.bigBodyOra[bigBodyNum],-this.bigBodyOra[bigBodyNum].width/2,-this.bigBodyOra[bigBodyNum].height/2);
  }else{
    ctx1.drawImage(this.bigBodyBlu[bigBodyNum],-this.bigBodyBlu[bigBodyNum].width/2,-this.bigBodyBlu[bigBodyNum].height/2);
  }
  ctx1.drawImage(this.bigEye[bigEyeNum],-this.bigEye[bigEyeNum].width/2,-this.bigEye[bigEyeNum].height/2);
  ctx1.drawImage(this.bigTail[bigTailNum],30-this.bigTail[bigTailNum].width/2,-this.bigTail[bigTailNum].height/2);
  ctx1.restore();
}
