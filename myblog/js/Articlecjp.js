var lottery={
    index:-1,   //当前转动到哪个位置，起点位置
    timer:0,    //setTimeout的ID，用clearTimeout清除
    speed:300,   //初始转动速度
    times:0,    //转动次数
    prize:40+Math.random()*12|0

}
var result;

//运动阶段
function prize(){
   lottery.speed=lottery.speed-40;
   if(lottery.speed<40){
    lottery.speed=40
   }
   if(lottery.times<25){
   }else if(lottery.times<30){
       lottery.speed=lottery.speed+45;
   }else if(lottery.times<35){
       lottery.speed=lottery.speed+55;
   }else if(lottery.times<40){
       lottery.speed=lottery.speed+65;
   }else if(lottery.times<lottery.prize){
       lottery.speed=lottery.speed+75;
   }
}
//准备阶段
function roll(){
   $("#index"+lottery.index).css("background-color","");
   lottery.index++;
   if(lottery.index>11){
     lottery.index=0;
   }
   $("#index"+lottery.index).css("background-color","#ea0000");
   prize();
   if(lottery.times==lottery.prize){
       lottery.speed=300;
       lottery.times=0;
       lottery.prize=40+Math.random()*12|0;
       clearTimeout(lottery.timer)
       $(".draw").css("pointer-events","auto");
       lottery.timer=setTimeout("readresult()",500);
       return;
   }else{
       lottery.times++;
       draw();
   }
}

//获取结果
function readresult(){
    if(lottery.index==0||lottery.index==3||lottery.index==6||lottery.index==9){
      result = "很遗憾，你没有抽到奖品！";
    }else if(lottery.index==1){
      result = "你真是太幸运了,居然抽到了ipad！";
    }else if(lottery.index==2||lottery.index==4){
      result = "恭喜你抽到了精美运动鞋";
    }else if(lottery.index==5||lottery.index==8){
      result = "你抽到了安慰奖，再接再厉哦！";
    }else if(lottery.index==7||lottery.index==11){
      result = "你很幸运哦，抽到了iphone！";
    }else{
      result = "恭喜你抽到了精美耳机一副！";
    }
    $(".result").text(result);
}
//点击事件
function draw(){
    $(".draw").css("pointer-events","none");
    lottery.timer=setTimeout("roll()",lottery.speed);
}




