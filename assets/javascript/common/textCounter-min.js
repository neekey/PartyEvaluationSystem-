/**
 * 字数统计
 * @author neekey<ni184775761@gmail.com>
 * @date 2012.09
 */define(function(e,t,n){e("jquery");n.exports=function(e,t,n,r,i){function l(){var e=s.val().length;o.text(e);f<=a&&e>a?r(e,a):f>a&&e<=a&&i();f=e;return{result:e<=a,actual:e,max:a}}var s=$(e),o=$(t),u=$(n),a=parseInt(u.text()),f=0;s.bind("change keyup",l);return l}});