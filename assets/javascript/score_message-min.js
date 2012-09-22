/**
 * 学院党委评分并填写寄语页面
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */seajs.use(["common/textCounter","common/scoreFormCheck"],function(e,t){function d(){f.toggleClass("count-overflow")}var n=".J_GiftText",r=".J_CurCount",i=".J_MaxCount",s=".J_TextCounter",o=".J_QuestionList",u=".J_ErrorTip",a=".J_SaveBtn",f=$(s),l=$(u),c=$(a),h=t(o),p=e(n,r,i,d,d),v=function(){var e=h();if(e.result){l.fadeOut();return!0}l.fadeIn();return!1};c.bind("click",function(e){var t=v(),n=p(),r=!0;if(!t){r=!1;l.fadeIn()}else if(n.result)if(n.actual<=0){r=!1;l.fadeIn()}else l.fadeOut();else{r=!1;l.fadeOut()}return r})});