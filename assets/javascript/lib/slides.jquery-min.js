/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/define(["jquery"],function(e,t,n){$.fn.slides=function(e){e=$.extend({},$.fn.slides.option,e);return this.each(function(){function E(s,o,u){if(!d&&p){d=!0;e.animationStart(h+1);switch(s){case"next":l=h;f=h+1;f=r===f?0:f;m=i*2;s=-i*2;h=f;break;case"prev":l=h;f=h-1;f=f===-1?r-1:f;m=0;s=0;h=f;break;case"pagination":f=parseInt(u,10);l=$("."+e.paginationClass+" li."+e.currentClass+" a",t).attr("href").match("[^#/]+$");if(f>l){m=i*2;s=-i*2}else{m=0;s=0}h=f}if(o==="fade")e.crossfade?n.children(":eq("+f+")",t).css({zIndex:10}).fadeIn(e.fadeSpeed,e.fadeEasing,function(){if(e.autoHeight)n.animate({height:n.children(":eq("+f+")",t).outerHeight()},e.autoHeightSpeed,function(){n.children(":eq("+l+")",t).css({display:"none",zIndex:0});n.children(":eq("+f+")",t).css({zIndex:0});e.animationComplete(f+1);d=!1});else{n.children(":eq("+l+")",t).css({display:"none",zIndex:0});n.children(":eq("+f+")",t).css({zIndex:0});e.animationComplete(f+1);d=!1}}):n.children(":eq("+l+")",t).fadeOut(e.fadeSpeed,e.fadeEasing,function(){e.autoHeight?n.animate({height:n.children(":eq("+f+")",t).outerHeight()},e.autoHeightSpeed,function(){n.children(":eq("+f+")",t).fadeIn(e.fadeSpeed,e.fadeEasing)}):n.children(":eq("+f+")",t).fadeIn(e.fadeSpeed,e.fadeEasing,function(){$.browser.msie&&$(this).get(0).style.removeAttribute("filter")});e.animationComplete(f+1);d=!1});else{n.children(":eq("+f+")").css({left:m,display:"block"});e.autoHeight?n.animate({left:s,height:n.children(":eq("+f+")").outerHeight()},e.slideSpeed,e.slideEasing,function(){n.css({left:-i});n.children(":eq("+f+")").css({left:i,zIndex:5});n.children(":eq("+l+")").css({left:i,display:"none",zIndex:0});e.animationComplete(f+1);d=!1}):n.animate({left:s},e.slideSpeed,e.slideEasing,function(){n.css({left:-i});n.children(":eq("+f+")").css({left:i,zIndex:5});n.children(":eq("+l+")").css({left:i,display:"none",zIndex:0});e.animationComplete(f+1);d=!1})}if(e.pagination){$("."+e.paginationClass+" li."+e.currentClass,t).removeClass(e.currentClass);$("."+e.paginationClass+" li:eq("+f+")",t).addClass(e.currentClass)}}}function S(){clearInterval(t.data("interval"))}function x(){if(e.pause){clearTimeout(t.data("pause"));clearInterval(t.data("interval"));b=setTimeout(function(){clearTimeout(t.data("pause"));w=setInterval(function(){E("next",u)},e.play);t.data("interval",w)},e.pause);t.data("pause",b)}else S()}$("."+e.container,$(this)).children().wrapAll('<div class="slides_control"/>');var t=$(this),n=$(".slides_control",t),r=n.children().size(),i=n.children().outerWidth(),s=n.children().outerHeight(),o=e.start-1,u=e.effect.indexOf(",")<0?e.effect:e.effect.replace(" ","").split(",")[0],a=e.effect.indexOf(",")<0?u:e.effect.replace(" ","").split(",")[1],f=0,l=0,c=0,h=0,p,d,v,m,g,y,b,w;if(r<2){$("."+e.container,$(this)).fadeIn(e.fadeSpeed,e.fadeEasing,function(){p=!0;e.slidesLoaded()});$("."+e.next+", ."+e.prev).fadeOut(0);return!1}if(r<2)return;o<0&&(o=0);o>r&&(o=r-1);e.start&&(h=o);e.randomize&&n.randomize();$("."+e.container,t).css({overflow:"hidden",position:"relative"});n.children().css({position:"absolute",top:0,left:n.children().outerWidth(),zIndex:0,display:"none"});n.css({position:"relative",width:i*3,height:s,left:-i});$("."+e.container,t).css({display:"block"});if(e.autoHeight){n.children().css({height:"auto"});n.animate({height:n.children(":eq("+o+")").outerHeight()},e.autoHeightSpeed)}if(e.preload&&n.find("img:eq("+o+")").length){$("."+e.container,t).css({background:"url("+e.preloadImage+") no-repeat 50% 50%"});var T=n.find("img:eq("+o+")").attr("src")+"?"+(new Date).getTime();$("img",t).parent().attr("class")!="slides_control"?y=n.children(":eq(0)")[0].tagName.toLowerCase():y=n.find("img:eq("+o+")");n.find("img:eq("+o+")").attr("src",T).load(function(){n.find(y+":eq("+o+")").fadeIn(e.fadeSpeed,e.fadeEasing,function(){$(this).css({zIndex:5});$("."+e.container,t).css({background:""});p=!0;e.slidesLoaded()})})}else n.children(":eq("+o+")").fadeIn(e.fadeSpeed,e.fadeEasing,function(){p=!0;e.slidesLoaded()});if(e.bigTarget){n.children().css({cursor:"pointer"});n.children().click(function(){E("next",u);return!1})}if(e.hoverPause&&e.play){n.bind("mouseover",function(){S()});n.bind("mouseleave",function(){x()})}if(e.generateNextPrev){$("."+e.container,t).after('<a href="#" class="'+e.prev+'">Prev</a>');$("."+e.prev,t).after('<a href="#" class="'+e.next+'">Next</a>')}$("."+e.next,t).click(function(t){t.preventDefault();e.play&&x();E("next",u)});$("."+e.prev,t).click(function(t){t.preventDefault();e.play&&x();E("prev",u)});if(e.generatePagination){e.prependPagination?t.prepend("<ul class="+e.paginationClass+"></ul>"):t.append("<ul class="+e.paginationClass+"></ul>");n.children().each(function(){$("."+e.paginationClass,t).append('<li><a href="#'+c+'">'+(c+1)+"</a></li>");c++})}else $("."+e.paginationClass+" li a",t).each(function(){$(this).attr("href","#"+c);c++});$("."+e.paginationClass+" li:eq("+o+")",t).addClass(e.currentClass);$("."+e.paginationClass+" li a",t).click(function(){e.play&&x();v=$(this).attr("href").match("[^#/]+$");h!=v&&E("pagination",a,v);return!1});$("a.link",t).click(function(){e.play&&x();v=$(this).attr("href").match("[^#/]+$")-1;h!=v&&E("pagination",a,v);return!1});if(e.play){w=setInterval(function(){E("next",u)},e.play);t.data("interval",w)}})};$.fn.slides.option={preload:!1,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}};$.fn.randomize=function(e){function t(){return Math.round(Math.random())-.5}return $(this).each(function(){var n=$(this),r=n.children(),s=r.length;if(s>1){r.hide();var o=[];for(i=0;i<s;i++)o[o.length]=i;o=o.sort(t);$.each(o,function(t,i){var s=r.eq(i),o=s.clone(!0);o.show().appendTo(n);e!==undefined&&e(s,o);s.remove()})}})}});