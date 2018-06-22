

function login(){
    var username = $("#username").val();
    var pwd = $("#pwd").val();
    if(username== ""){
        alert("用户名为空！");
        return false;
    }else if(pwd == ""){
        alert("密码为空！");
        return false;
    }else{
        alert("可以登录");
        return true;
    }
}