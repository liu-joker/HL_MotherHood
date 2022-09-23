$('.form-box input').focus(function(){
	$(this).addClass('focus');
})
$('.form-box input').blur(function(){
	$(this).removeClass('focus');
})
//登录表单验证
$('#l_form .submit-btn').click(function(){
	var email = $('#l_form #email-address').val();
	var pwd = $('#l_form #password').val();
	var code = $('#l_form #code').val();
	if(checkNull(email)!=true){
		$('#l_form #email-address').addClass('err');
		$('#l_form #email-address').parent().parent().find(".validate-error").text(checkNull(email)).fadeIn();
		
	}else if(checkEmail(email)!=true){
		$('#l_form #email-address').addClass('err');
		$('#l_form #email-address').parent().parent().find(".validate-error").text(checkEmail(email)).fadeIn();
		
	}else{
		$('#l_form #email-address').removeClass('err');
		$('#l_form #email-address').parent().parent().find('.validate-error').empty().fadeOut();
	}
	if(checkNull(pwd)!=true){
		$('#l_form #password').addClass('err');
		$('#l_form #password').parent().parent().find(".validate-error").text(checkNull(pwd)).fadeIn();
		
	}else if(checkPwdLen(pwd)!=true){
		$('#l_form #password').addClass('err');
		$('#l_form #password').parent().parent().find(".validate-error").text(checkPwdLen(pwd)).fadeIn();
		
	}else{
		$('#l_form #password').removeClass('err');
		$('#l_form #password').parent().parent().find('.validate-error').empty().fadeOut();
	}
	if(checkNull(code)!=true){
		$('#l_form #code').addClass('err');
		$('#l_form #code').parent().parent().find(".validate-error").text(checkNull(code)).fadeIn();
		
	}else if(checkCode(code)!=true){
		$('#l_form #code').addClass('err');
		$('#l_form #code').parent().parent().find(".validate-error").text(checkCode(code)).fadeIn();
	}else{
		$('#l_form #code').removeClass('err');
		$('#l_form #code').parent().parent().find('.validate-error').empty().fadeOut();
	}
})
//注册表单验证
$('#register_form .submit-btn').click(function(){
	var tag = true;
	var username = $('#register_form #userName').val();
	var email = $('#register_form #email').val();
	var pwd = $('#register_form #password').val();
	var repwd = $('#register_form #rePassword').val();
	var code = $('#register_form #code').val();
	if(checkNull(username)!=true){
		$('#register_form #userName').addClass('err');
		$('#register_form #userName').parent().parent().find(".validate-error").text(message_en.userName_required).fadeIn();
		return;
	}else if(!checkval(username)){
		$('#register_form #userName').addClass('err');
		$('#register_form #userName').parent().parent().find(".validate-error").text(message_en.userName_required).fadeIn();
		return;
	}
	else{
		$('#register_form #userName').removeClass('err');
		$('#register_form #userName').parent().parent().find('.validate-error').empty().fadeOut();
		tag = true;
	}
	if(checkNull(email)!=true){
		$('#register_form #email').addClass('err');
		$('#register_form #email').parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
		return;
	}else if(checkEmail(email)!=true){
		$('#r_form #email').addClass('err');
		$('#r_form #email').parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
		return;
	}else{
		$('#register_form #email').removeClass('err');
		$('#register_form #email').parent().parent().find('.validate-error').empty().fadeOut();
		tag = true;
	}
	if(checkNull(pwd)!=true){
		$('#register_form #password').addClass('err');
		$('#register_form #password').parent().parent().find(".validate-error").text(message_en.password_required).fadeIn();
		return;
	}else if(checkPwdLen(pwd)=="6"){
		$('#register_form #password').addClass('err');
		$('#register_form #password').parent().parent().find(".validate-error").text(message_en.enter_at_least_6).fadeIn();
		return;
	}else if(checkPwdLen(pwd)=="15"){
		$('#register_form #password').addClass('err');
		$('#register_form #password').parent().parent().find(".validate-error").text(message_en.enter_maximum_of_15).fadeIn();
		return;
	}else{
		$('#register_form #password').removeClass('err');
		$('#register_form #password').parent().parent().find('.validate-error').empty().fadeOut();
		tag = true;
	}

	if(checkNull(repwd)!=true){
		$('#register_form #rePassword').addClass('err');
		$('#register_form #rePassword').parent().parent().find(".validate-error").text(message_en.re_passsword_required).fadeIn();
		return;
	}else if(pwd!=repwd){
		$('#register_form #rePassword').addClass('err');
		$('#register_form #rePassword').parent().parent().find(".validate-error").text(message_en.password_not_same).fadeIn();
		return;
	}else{
		$('#register_form #rePassword').removeClass('err');
		$('#register_form #rePassword').parent().parent().find('.validate-error').empty().fadeOut();
		tag = true;
	}
	if(checkNull(code)!=true){
		$('#register_form #code').addClass('err');
		$('#register_form #code').parent().parent().find(".validate-error").text(message_en.verification_code_required).fadeIn();
		tag = false;
	}else{
		$('#register_form #code').removeClass('err');
		$('#register_form #code').parent().parent().find('.validate-error').empty().fadeOut();
		tag = true;
	}
	 if($("#checkAgree").hasClass("cur")){
		 $('.checkbox-icon').removeClass('err');
		 $('.checkbox-icon').parent().parent().find('.validate-error').empty().fadeOut();
		 tag = true;
	 }else {
		 $('.checkbox-icon').addClass('err');
		 $('.checkbox-icon').parent().parent().find(".validate-error").text(message_en.agree_required).fadeIn();
		 return;
	}
	if (tag) {
		if(vailMember($("#userName").val(),$("#email").val())){
			if (validate_rotecaptcha()) {
    			$("#token").val(new Date().getTime());
    			$("#register_form").submit();								
    		}else{
    	    	$('#codeError').text(message_en.verification_code_required).fadeIn();
    			return;
    		}
		}
	}
	
});
function resetPwdFormValidate(email,code){
	var tag = false;
	if(email!=null){
		var emailObj = $('#re_form #'+email);
		var emailObjVal = emailObj.val();
		if(checkNull(emailObjVal)!=true){
			emailObj.addClass('err');
			emailObj.parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
			tag = false;
		}else if(checkEmail(emailObjVal)!=true){
			emailObj.addClass('err');
			emailObj.parent().parent().find(".validate-error").text(message_en.email_required).fadeIn();
			tag = false;
		}else if((isValidateEmail && code!=null) || (code==null) ){
			 emailObj.removeClass('err');
			 emailObj.parent().parent().find('.validate-error').empty().fadeOut();
		     tag = true;	
		}				
	}
	if(code!=null){
		var codeObj = $('#re_form #'+code);
		var codeObjVal = codeObj.val();
		if(checkNull(codeObjVal)!=true){
			codeObj.addClass('err');
			codeObj.parent().parent().find(".validate-error").text(message_en.verification_code_required).fadeIn();
			tag = false;
		}else if(checkCode(codeObjVal)!=true){
			codeObj.addClass('err');
			codeObj.parent().parent().find(".validate-error").text(message_en.verification_code_required).fadeIn();
			tag = false;
		}else if(!validate_rotecaptcha()){
			tag = false;
		}else{
			codeObj.removeClass('err');
			codeObj.parent().parent().find('.validate-error').empty().fadeOut();
			tag = true;
		}
	}
	if(tag && email!=null && code==null){
		validateEmail(emailObj);		
	}
	return tag;
}
var isValidateEmail = true;
function validateEmail(emailObj){	
	var emailObjVal = $(emailObj).val();
	$.ajax({
		 type: "get",
		 url: "/vailMember.html",
		 data: "userName=&email="+emailObjVal,
		 dataType: "json",
		 success: function(data) {
			if (data=="2"){
				$(emailObj).removeClass('err');
			  	$(emailObj).parent().parent().find('.validate-error').empty().fadeOut();			 
			  	isValidateEmail = true;
			}else{
				$(emailObj).addClass('err');
				$(emailObj).parent().parent().find(".validate-error").text(message_en.email_not_exist).fadeIn();			   
    	        isValidateEmail = false;
			}
		}
	});
}
//忘记密码表单验证
$('#re_form .submit-btn').click(function(){	
	var tag = resetPwdFormValidate('email','code');
	if(tag && isValidateEmail){
		$("#token").val(new Date().getTime());
		$("#re_form").submit();
	}	
})
function validateNewPwd(pwdObj,isRePwd){
	var flag = true;
	var newPwd = $(pwdObj).val();
	if(checkNull(newPwd)!=true){
		$(pwdObj).addClass('err');
		$(pwdObj).parent().parent().find(".validate-error").text(message_en.password_required).fadeIn();
		flag = false;
	}
	if(flag || (!flag && isRePwd)){
		if(isRePwd){
			var firstNewPwd = $('#password').val();
			var isNullFirstPwd = checkNull(firstNewPwd);
			if(isNullFirstPwd==true && firstNewPwd!=newPwd){
				$(pwdObj).addClass('err');
				$(pwdObj).parent().parent().find(".validate-error").text(message_en.password_not_same).fadeIn();
				flag = false;
			}else if(isNullFirstPwd==true){
				$(pwdObj).removeClass('err');
				$(pwdObj).parent().parent().find('.validate-error').empty().fadeOut();
			}
		}else{
			var pwdLength=checkPwdLen(newPwd);
			if(pwdLength=="6"){
				$(pwdObj).addClass('err');
				$(pwdObj).parent().parent().find(".validate-error").text(message_en.enter_at_least_6).fadeIn();
				flag = false;
			}else if(pwdLength=="15"){
				$(pwdObj).addClass('err');
				$(pwdObj).parent().parent().find(".validate-error").text(message_en.enter_maximum_of_15).fadeIn();
				flag = false;
			}else{
				$(pwdObj).removeClass('err');
				$(pwdObj).parent().parent().find('.validate-error').empty().fadeOut();
			}
		}
	}
	return flag;
}

//重新设置新密码表单验证
$('#re_form-2 .submit-btn').click(function(){	
	var tag = false;
	tag = validateNewPwd($('#password'),false);
	tag = validateNewPwd($('#rePassword'),true);
	if(tag){
		$("#re_form-2").submit();
	}
});

function resendEmail(){
	 $.ajax({
	 	    type: "post",
	        url: "/resendEmail.html",
	        dataType: "json",
	        success: function(data) {
	        	if(data=="1"){
	        		//alert("发送成功");
	        	}else {
	        		//alert("发送失败");
	        	}
	        }
	    });
	 $('.mask-bg,.mask-bg .send-email-success').show();
}

$(function(){
	
});
