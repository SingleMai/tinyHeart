var Child = function(){
  this.x;
  this.y;
  this.angle;

  //eye
  this.childEye =[];
  this.childEyeCount = 0;
  this.childEyeTimer = 0;
  this.childEyeInterval = 2000;
  // this.childBody = new Image();
  this.childBody = [];
  this.childBodyTime = 0;
  this.childBodyCount = 0;

  this.childTail = new Image();
}

Child.prototype.init =function(){
  this.x = canWid/2;
  this.y = canHei/2;
  this.angle = 0;
  this.childEye.src = "src/babyEye0.png";
  // this.childBody.src = "src/baby.png";
  for(var i = 0; i < 20 ; i++){
    this.childBody[i] = new Image();
    this.childBody[i].src = "src/babyFade" + i + ".png";
  }

  for(var i = 0 ; i <2 ; i++){
    this.childEye[i] = new Image();
    this.childEye[i].src = "src/babyEye" + i +".png";
  }

  this.childTail.src = "src/babyTail0.png";
}
Child.prototype.draw = function(){
  //lerpDistance
  this.x = lerpDistance(mom.x,this.x,0.99);
  this.y = lerpDistance(mom.y,this.y,0.99);

  //lerpAngle
  var deltaY = mom.y - this.y;
  var deltaX = mom.x - this.x;
  var beta = Math.atan2(deltaY,deltaX) + Math.PI;
  this.angle = lerpAngle(beta,this.angle,0.6);

  //childBodyCount
  this.childBodyTime += deltaTime;
  if (this.childBodyTime > 300){
    if(this.childBodyCount === 19){
      data.gameOver = true;
    }else{
    this.childBodyCount = (this.childBodyCount+1);
    }
    this.childBodyTime %= 300;
  }
  //Eye
  this.childEyeTimer += deltaTime;
  if(this.childEyeTimer > this.childEyeInterval){
    this.childEyeCount = (this.childEyeCount + 1) % 2;
    this.childEyeTimer %= this.childEyeInterval;
    if (this.childEyeCount === 0){
      this.childEyeInterval = Math.random() * 1500 + 2000;
    }else{
      this.childEyeInterval = 200;
    }
  }

  var childBodyNum = this.childBodyCount;
  var childEyeNum = this.childEyeCount;

  ctx1.save();
  ctx1.translate(this.x,this.y);
  ctx1.rotate(this.angle);
  ctx1.drawImage(this.childBody[childBodyNum],-this.childBody[childBodyNum].width/2,-this.childBody[childBodyNum].height/2);
  ctx1.drawImage(this.childEye[childEyeNum],-this.childEye[childEyeNum].width/2,-this.childEye[childEyeNum].height/2);
  ctx1.drawImage(this.childTail,25-this.childTail.width/2,-this.childTail.height/2);
  ctx1.restore();
}
