/**
 * 首页
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */seajs.use(["common/formValid","jquery"],function(e){"use strict";$(document).ready(function(){var t=".J_Tip",n=".J_Form",r="；",i=$(t),s=new e(n,function(e,t,n){console.log(arguments);var s=$(t).attr("data-msg-"+n),o=i.text();if(!e){o.indexOf(s)<0&&i.text(o+s+r);i.show()}else{o=o.replace(new RegExp(s+r,"g"),"");i.text(o);o||i.hide()}})})});