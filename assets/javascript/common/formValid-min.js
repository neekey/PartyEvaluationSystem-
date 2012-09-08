/**
 * 表单验证
 * @author neekey <ni184775761@gmail.com>
 */define(function(e,t,n){var r=e("jquery"),i=function(e,t,n){this.form=r(e);this.formEl=this.form[0];this.callback=t;n&&(this.rules=r.extend(this.rules,n));this.init()};i.prototype={init:function(){var e=this,t,n,i=this.formEl.elements;for(t=0;i[t];t++){n=i[t];r(n).attr("type")=="submit"&&r(n).bind("click",function(t){if(!e.check()){t.halt();return!1}});r(n).bind("change",function(){e.check_field(this[0])});r(n).bind("blur",function(){e.check_field(this[0])});r(n).bind("keyup",function(){e.check_field(this[0])})}},rules:{required:{msg:"This field is required.",test:function(e){return e.value.length>0}},email:{msg:"Not a valid email address.",test:function(e){var t=/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;return!e.value||t.test(e.value)}},match:{msg:"两次输入不匹配!",test:function(e){var t=r(e).attr("match");return!e.value||e.value===r("#"+t).val()}},phone:{msg:"Not a valid phone number.",test:function(e){var t=/(\d{3}).*(\d{3}).*(\d{4})/.exec(e.value);return!e.value||t}},"max\\d+":{msg:"输入超过长度限制",test:function(e,t){var n=parseInt(t.substring(3),0),r=e.value;return r.length<=n}},"min\\d+":{msg:"输入内容长度不足",test:function(e,t){var n=parseInt(t.substring(3),0),r=e.value;return r.length>=n}}},check:function(){var e=!0,t=this.rules,n=this,r=this.form,i=this.formEl,s=this.formEl.elements;for(var o=0;o<s.length;o++)this.check_field(s[o])||(e=!1);return e},check_field:function(e,t){var n=t||this.callback,r=!0,i=!0,s=!1,o=null,u=null;for(var a in this.rules){o=new RegExp("(?:^|\\s)("+a+")(?:\\s|$)");u=o.exec(e.className);if(u&&u[1]){s=!0;i=!0;if(!this.rules[a].test(e,u[1])){r=!1;i=!1}this.callback(i,e,u[1],this.rules[a].msg);u=null}}return r},submit:function(e){e=e===undefined;if(e&&!this.check())return!1;this.formEl.submit();return!0}};n.exports=i});