/**
 * 评分部分的题目检查
 * @author neekey<ni184775761@gmail.com>
 * @date 2012.09
 */define(function(e,t,n){e("jquery");var r='<span class="error-tip">请答题</span>';n.exports=function(e){var t=$(e),n=[];t.find("li").each(function(e,t){var i=$(t).find(".desc"),s=$(t).find(".options"),o=s.find("input"),u=function(){var e=!1;o.each(function(t,n){n.checked&&(e=!0)});var t=i.find(".error-tip");if(e===!1){if(t.length>0)t.show();else{t=$(r).appendTo(i);t.show()}i.addClass("error")}else{t.length>0&&t.hide();i.removeClass("error")}return e};o.each(function(e,t){$(t).bind("click",u)});n.push(u)});return function(){var e=!0,t=n.length,r=0;for(var i=0;i<t;i++)n[i]()?r++:e=!1;return{result:e,total:t,pass:r}}}});