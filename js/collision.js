function momFruitCollision(){
  if(!data.gameOver && isStart ){
    for (var i = 0 ; i < fruit.num ; i++ ){
      if (fruit.alive[i]){
        var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
        if(l < 900){
          fruit.dead(i);
          data.fruitNum += 1;
          if(fruit.fruitType[i] === "blue"){
            data.double = 2;
          }
          wave.born(fruit.x[i],fruit.y[i]);
        }
      }
    }
  }
}


function momChildCollision(){
  if(!data.gameOver){
      var l = calLength2(child.x,child.y,mom.x,mom.y);
      if(l < 900){
        if(data.fruitNum > 0){
          child.childBodyCount = 0;
          kiss.born(child.x,child.y);
        }
          data.calScore();
          mom.bigBodyCount = 0;
      }
  }
}
