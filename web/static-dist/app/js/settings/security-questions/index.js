webpackJsonp(["app/js/settings/security-questions/index"],{0:function(e,t){e.exports=jQuery},"72ebb29c15450c32283a":function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("b334fd7e4c5a19234db2"),a=n.n(s),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();new(function(){function e(t){i(this,e),this.element=t.element,this.saveBtn=t.saveBtn,this.$q1=$("[name=question-1]"),this.$q2=$("[name=question-2]"),this.$q3=$("[name=question-3]"),this.init()}return o(e,[{key:"init",value:function(){var e=this.validator();this.initEvent(e)}},{key:"initEvent",value:function(e){var t=this,n=($(this.element),this);$(this.saveBtn).on("click",function(n){var i=$(n.currentTarget);e.form()&&(i.button("loading"),$(t.element).submit())}),$("option[value=parents]").css("display","none"),$("option[value=teacher]").css("display","none"),$("option[value=lover]").css("display","none"),this.$q1.on("change",function(e){var t=$(this);n.reflesh_option_display(t)}),this.$q2.on("change",function(e){var t=$(this);n.reflesh_option_display(t)}),this.$q3.on("change",function(e){var t=$(this);n.reflesh_option_display(t)})}},{key:"validator",value:function(){return $(this.element).validate({rules:{"answer-1":{required:!0,maxlength:20},"answer-2":{required:!0,maxlength:20},"answer-3":{required:!0,maxlength:20},userLoginPassword:"required"}})}},{key:"reflesh_option_display",value:function(e){this.$q1.val()===this.$q2.val()||this.$q3.val()===this.$q2.val()||this.$q1.val()===this.$q3.val()?(a()("danger","问题类型不能重复"),this.$q1.val("parents"),this.$q2.val("teacher"),this.$q3.val("lover")):$("option[value="+e.val()+"]").css("display","none");var t=["parents","teacher","lover","schoolName","firstTeacher","hobby","notSelected"];for(var n in t)t[n]!==this.$q1.val()&&t[n]!==this.$q2.val()&&t[n]!==this.$q3.val()&&$("option[value="+t[n]+"]").css("display","block")}}]),e}())({element:"#settings-security-questions-form",saveBtn:"#password-save-btn"})}},["72ebb29c15450c32283a"]);