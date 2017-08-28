var RemainTime=16;
var RemainWord;
var t;
function ClearHold(id)
 {
   $("#"+id).attr("placeholder","");
 }

function ShowHold(id)
 {
   var value = $("#CodeInput").attr("value");
   if(value == "")
   {
   	 $("#"+id).attr("placeholder","请输入");
   }
 }
 //点击验证码
 function GetCode()
  {
  	$("#CodeDiv").css({"border":"2px solid #e5e5e5","color":"#e5e5e5","pointer-events":"none"})
  	$("#CodeSenCond").css("color","#333333")
  	StartTime();
  }
//计时器方法
 function StartTime()
  {
  	if(RemainTime<=0)
  	{
  	  clearTimeout(t)
      $("#CodeSenCond").css("color","red")
  	  $("#CodeSenCond").text("短信认证码已超时失效，请重新获取。");
      $("#CodeDiv").css({"border":"2px solid #3b76d8","color":"#3b76d8","pointer-events":"auto"})
  	  RemainTime=16;
  	  return;
  	}
  	t=setTimeout("StartTime()",900);
    RemainTime=RemainTime-1;
    RemainWord="短信已发送("+RemainTime+"秒)";
    $("#CodeSenCond").text(RemainWord);

  }
