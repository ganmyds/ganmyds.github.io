$(document).ready(function(){
  $("#SwitchDhtz").click(function(){
  	var src= $("#SwitchDhtz").attr("src");
  	if(src.match("switch_off") == null)
      {
      	$("#SwitchDhtz").attr("src","../../img/switch_off.png");
      	$(".LiDisplay").css("display","none")

      }
    else
      {
      	$("#SwitchDhtz").attr("src","../../img/switch_on.png");
      	$(".LiDisplay").css("display","block")
      }
  })
})
function ClearHold(id)
 {
  document.getElementById(id).placeholder="";
 }

function ShowHold(id)
 {
   var PhoneValue=document.getElementById(id).value;
   if(PhoneValue == "")
   {
   	document.getElementById(id).placeholder="请输入";
   }
 }

 function ShowUpHold(id)
  {
  	 var PhoneValue=document.getElementById("PhoneInput").value;
   if(PhoneValue == "")
   {
   	document.getElementById(id).placeholder="上下限必须大于0";
   }
  }

function Switch(id,switchid)
 {
   var src = document.getElementById(id).src;
   if(src.match("switch_off") == null)
   	 {
   	 	document.getElementById(id).src="../../img/switch_off.png";
   	 	$("."+switchid).css("display","none")
   	 }
   else
   	 {
   	 	document.getElementById(id).src="../../img/switch_on.png";
   	 	$("."+switchid).css("display","block")
   	 }
 }

 function ToBackOut()
  {
    window.location.href="cib_jlxs_backout.html";
  }  
