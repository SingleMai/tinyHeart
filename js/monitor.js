var ele1 = $("#start");
var ele2 = $("#intro");
var ele3 = $(".introList");

ele1.click(function(){
  isStart = true;
  ele1.slideToggle("slow");
  ele2.slideToggle("slow");
  data.gameOver = false;
})

ele2.click(function(){
  ele3.slideToggle("slow");
  console.log(1);
})
