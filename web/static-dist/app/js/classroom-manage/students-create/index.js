webpackJsonp(["app/js/classroom-manage/students-create/index"],{0:function(e,t){e.exports=jQuery},"2dc95c0d9a75756238b3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("b334fd7e4c5a19234db2"),n=r.n(a),s=$("#student-create-form").parents(".modal"),d=$("#student-create-form"),o=$("#course-student-list"),u=$("#student-create-form-submit"),c=d.validate({onkeyup:!1,rules:{queryfield:{required:!0,remote:{url:$("#student-nickname").data("url"),type:"get",data:{value:function(){return $("#student-nickname").val()}}}},remark:{maxlength:80},price:{currency:!0}},messages:{queryfield:{remote:Translator.trans("请输入学员邮箱/手机号/用户名")}}});u.click(function(){c.form()&&(u.button("submiting").addClass("disabled"),$.post(d.attr("action"),d.serialize(),function(e){o.find("tr.empty").remove(),$(e).prependTo(o.find("tbody")),s.modal("hide"),n()("success",Translator.trans("添加成功!")),window.location.reload()}).error(function(){n()("danger",Translator.trans("添加失败!")),u.button("reset").removeClass("disabled")}))})}},["2dc95c0d9a75756238b3"]);