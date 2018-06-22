
var name_status = 0; //用户名核对状态，0表示不合法，1表示合法
var phone_status = 0; //手机号码核对状态
var yzm_status = 0;  //验证码核对状态
var pwd_status = 0; //密码核对状态
var repwd_status = 0; //确认密码核对状态
var RemainTime = 15; //验证码剩余时间
var rzmIsSend = 0;//判断认证码是否已发送
var t;//定义计时器

// 用户名验证
function check_name(){
    var username = $("#username").val();
    if(username == ""){
        $("#name_success").css("display","none");
        $("#username").css("borderColor","#a94442");
        $("#title_name").css("display","block");
        name_status = 0;
    }else{
        $("#name_success").css("display","inline-block");
        $("#username").css("borderColor","#0ea420");
        $("#title_name").css("display","none");
        name_status = 1;
    }
}

// 短信验证码确认
function check_yzm(){
    var yzm = $("#yzm").val();
    if(yzm == "" && rzmIsSend == 1){
        $("#yzm_success").css("display","none");
        $("#title_yzm").css("display","block");
    }else{
        $("#yzm_success").css("display","inline-block");
        $("#title_yzm").css("display","none");
    }
}

// 手机号码验证
function check_phone(){
    var phone = $("#phone").val();
    var reg = /1[3578][0-9]{9}/;
    if(phone == ""){
        $("#phone_success").css("display","none");
        $("#phone").css("borderColor","#a94442");
        $("#title_phone").css("display","block");
        phone_status = 0;
    }else if(!reg.test(phone)){
        $("#phone_success").css("display","none");
        $("#phone").css("borderColor","#a94442");
        $("#phone_title").html("请输入正确的手机号码");
        $("#title_phone").css("display","block");
    }else{
        $("#phone_success").css("display","inline-block");
        $("#phone").css("borderColor","#0ea420");
        $("#title_phone").css("display","none");
        phone_status = 1;
    }
}

// 密码验证
function check_pwd(){
    var pwd = $("#pwd").val();
    var repwd = $("#repwd").val();
    // 判断两次密码是否相等
    if(repwd != "" && pwd != repwd){
        $("#repwd_success").css("display","none");
        $("#repwd").css("borderColor","#a94442");
        $("#title_redetail").html("两次密码不同");
        $("#title_repwd").css("display","block");
        repwd_status = 0;
    }else if(repwd != "" && pwd == repwd){
        $("#title_repwd").css("display","none");
        $("#repwd").css("borderColor","#0ea420");
        repwd_status = 1;
    }
    //判断密码格式
    if(pwd == ""){
        $("#pwd_success").css("display","none");
        $("#pwd").css("borderColor","#a94442");
        $("#title_detail").html("密码不能为空");
        $("#title_pwd").css("display","block");
        pwd_status = 0;
    }else if(pwd.length < 8){
        $("#pwd_success").css("display","none");
        $("#pwd").css("borderColor","#a94442");
        $("#title_detail").html("密码长度不到8位");
        $("#title_pwd").css("display","block");
        pwd_status = 0;
    }else{
        $("#pwd_success").css("display","inline-block");
        $("#pwd").css("borderColor","#0ea420");
        $("#title_pwd").css("display","none");
        pwd_status = 1;
    }
}

// 确认密码验证
function check_repwd(){
    var repwd = $("#repwd").val();
    var pwd = $("#pwd").val();
    if(repwd == ""){
        $("#repwd_success").css("display","none");
        $("#repwd").css("borderColor","#a94442");
        $("#title_redetail").html("确认密码不能为空");
        $("#title_repwd").css("display","block");
        repwd_status = 0;
    }else if(repwd != pwd){
        $("#repwd_success").css("display","none");
        $("#repwd").css("borderColor","#a94442");
        $("#title_redetail").html("两次密码不同");
        $("#title_repwd").css("display","block");
        repwd_status = 0;
    }else{
        $("#repwd_success").css("display","inline-block");
        $("#repwd").css("borderColor","#0ea420");
        $("#title_repwd").css("display","none");
        repwd_status = 1;
    }

}

// 注册
function register(){
    var yzm_val = $("#yzm").val();
    if(name_status == 0){
        alert("用户名有误");
        return false;
    }else if(phone_status == 0){
        alert("手机号码有误");
        return false;
    }else if(yzm_val == ""){
        alert("验证码为空");
        return false;
    }else if(pwd_status == 0){
        alert("密码有误");
        return false;
    }else if(repwd_status == 0){
        alert("确认密码有误");
        return false;
    }else{
        alert("注册成功！");
        return true;
    }
}

//点击获取短信认证码
function GetCode(){
    $(".yzm_text").css("display","block");
    $(".hqyzm").css({"background-color":"rgb(197,196,196)","pointer-events":"none"});
    $("#error_yzm").attr("src","../img/promt.jpg");
    $("#yzm_show").css("color","#6e6e6e");
    $("#yzm").attr("placeholder","请输入");
    $(".hqyzm").text("认证码已传");
    rzmIsSend = 1;
    StartTime();
}

//计时器方法
function StartTime(){
    if(RemainTime<0)
    {
       clearTimeout(t) //停止计时器
       $("#yzm_show").css("color","#a94442");
       $("#error_yzm").attr("src","../img/error.jpg");
       $("#yzm_show").text("短信认证码已超时失效，请重新获取。");
       $(".hqyzm").css({"background-color":"#33CCCC","pointer-events":"auto"});
       $("#yzm").attr("placeholder","获取认证码");
       $(".hqyzm").text("获取认证码");
       $("#title_yzm").css("display","none");
       rzmIsSend = 0;
       RemainTime=15;
       return;
    }
    RemainWord="认证码已发送("+RemainTime+"秒)";
    RemainTime=RemainTime-1;
    $("#yzm_show").text(RemainWord);
    t=setTimeout("StartTime()",1000); //计时器的开始
}







