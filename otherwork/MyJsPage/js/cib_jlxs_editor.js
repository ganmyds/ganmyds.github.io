
function SearchSet()
 {
 	window.location.href="jlxs_set.html"
 }
function ShowChangeDiv(id,id1)
 {
   $("#"+id).css("display","block");
   $("#"+id1).css("display","none");
 }
function HiddenChangeDiv(id,id1)
 {
  var Status=$("#"+id).css("display");
  if(Status!="none")
  {
  	$("#"+id).css("display","none");
	$("#"+id1).css("display","block");
  }
  
 }