webpackJsonp(["app/js/settings/reset-pay-password/index"],{"5d6a33c80eace135e1c4":function(a,e){var r=$("#settings-pay-password-form").validate({rules:{"form[oldPayPassword]":{required:!0,minlength:5,maxlength:20},"form[newPayPassword]":{required:!0,minlength:5,maxlength:20},"form[confirmPayPassword]":{required:!0,equalTo:"#form_newPayPassword"}}});$("#password-save-btn").on("click",function(a){var e=$(a.currentTarget);r.form()&&(e.button("loading"),$("#settings-pay-password-form").submit())})}},["5d6a33c80eace135e1c4"]);