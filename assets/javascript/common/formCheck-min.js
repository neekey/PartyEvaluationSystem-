/**
 * 表单验证
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */define(function(e,t,n){var r=e("common/formValid");n.exports=function(e,t){var n=$(t),i="；";return new r(e,function(e,t,r){var s=$(t).attr("data-msg-"+r),o=n.text();if(!e){o.indexOf(s)<0&&n.text(o+s+i);n.show()}else{o=o.replace(new RegExp(s+i,"g"),"");n.text(o);o||n.hide()}})}});