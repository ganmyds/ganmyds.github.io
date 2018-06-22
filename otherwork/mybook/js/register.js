
var name_status = 0;
var phone_status = 0;
var pwd_status = 0;
var repwd_status = 0;

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

// 手机号码验证
function check_phone(){
    var phone = $("#phone").val();
    if(phone == ""){
        $("#phone_success").css("display","none");
        $("#phone").css("borderColor","#a94442");
        $("#title_phone").css("display","block");
        phone_status = 0;
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
    if(pwd == ""){
        $("#pwd_success").css("display","none");
        $("#pwd").css("borderColor","#a94442");
        $("#title_detail").html("密码不能为空");
        $("#title_pwd").css("display","block");
        pwd_status = 0;
    }else if(pwd.length < 8){
        $("#pwd_success").css("display","none");
        $("#pwd").css("borderColor","#a94442");
        $("#title_detail").html("密码长度不够");
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
    if(name_status == 0){
        alert("用户名有误");
        return false;
    }else if(phone_status == 0){
        alert("手机号码有误");
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






