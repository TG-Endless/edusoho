webpackJsonp(["app/js/courseset-manage/header/index"],{0:function(e,s){e.exports=jQuery},"227988cf7d09fe542431":function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.publishCourseSet=void 0;var u=t("b334fd7e4c5a19234db2"),n=function(e){return e&&e.__esModule?e:{default:e}}(u);(s.publishCourseSet=function(){$("body").on("click",".course-publish-btn",function(e){confirm(Translator.trans("是否确定发布该课程？"))&&$.post($(e.target).data("url"),function(e){e.success?((0,n.default)("success","课程发布成功"),location.reload()):(0,n.default)("danger","课程发布失败："+e.message,5e3)})})})()}},["227988cf7d09fe542431"]);