$(document).ready(function(){
 $("#CardImg").click(function(){
   $("#MyBody,#PocketMon").css({"background-color":"#A9A9A9"});
 $("#PocketMon").css({"border-color":"#A9A9A9"});
 $(".MyDiv").show();
 $("#TheFork").show();
 })
 $("#MyDiv1").click(function(){
   var text = "<span  class='text'>请使用京东联名卡办理此业务。</span>"
   $("#PocketMon").html(text);
 $("#ChangeValue1").text("622908 ****** *1271*");
 $("#ChangeValue2").text("测试一号")
 PublicMet()
 })
 $("#MyDiv2").click(function(){
   var text = "<span  style='position:absolute;left:15px;font-family:Microsoft JhengHei;font-size:14px;'>零用钱余额</span>";
 text = text + "<span  style='position:absolute;right:15px;font-family:Microsoft JhengHei;font-size:14px;'>100.00</span>";
 $("#ChangeValue1").text("622908 ****** *3787*");
 $("#ChangeValue2").text("京东")
 $("#PocketMon").html(text);
 PublicMet()
 })
 $("#MyDiv3").click(function(){
   var text = "<span  style='position:absolute;left:15px;font-family:Microsoft JhengHei;font-size:14px;'>零用钱余额</span>";
 text = text + "<span  style='position:absolute;right:15px;font-family:Microsoft JhengHei;font-size:14px;'>100.00</span>";
 $("#ChangeValue1").text("622908 ****** *6666*");
 $("#ChangeValue2").text("前端卡号")
 $("#PocketMon").html(text);
 PublicMet()
 })
 $("#Ransom").click(function(){
   var text = $("#PocketMon").html();
 var keyword=/请使用京东联名卡办理此业务/;
 if(keyword.test(text))
  {
   alert("请先办理京东业务！")
  }
 else
  {
  window.location.href = "JinDong_shuhui.html"
  }
 })
 $("#TheFork").click(function(){
   PublicMet()
 })

function PublicMet()
 {
  $("#MyBody").css({"background-color":"#F0F8FF","opacity":"1"});
$("#PocketMon").css({"background-color":"#fff","border-color":"#e5e5e5"});
$(".MyDiv").hide();
$("#TheFork").hide();
 }

})


