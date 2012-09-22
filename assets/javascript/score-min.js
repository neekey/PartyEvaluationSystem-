/**
 * 一般党员评分页面
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */seajs.use(["common/scoreFormCheck"],function(e){function d(){var e=h+1;e>c.length-1?u.submit():m(e)}function v(){var e=h-1||0;if(e==h)return;m(e)}function m(e){c.hide();$(c[e]).fadeIn();e==0?a.fadeOut():a.fadeIn();e==c.length-1?f.text("提交"):f.text("下一页");h=e}var t=".J_ScoreForm",n=".J_ScoreFormWrap",r=".J_QuestionList",i=".J_Next",s=".J_Prev",o=".J_Tip",u=$(t),a=$(s),f=$(i),l=$(o),c=$(n),h=0,p=[];c.each(function(t,n){n=$(n);var i=e(n.find(r)),s=function(){var e=i();if(e.result){l.hide();return!0}l.show();return!1};p.push(s)});f.bind("click",function(e){var t=p[h];t()&&d()});a.bind("click",function(e){v()})});