/**
 * switchable 组件
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */define(function(){var e={triggerConHook:".J_SwitchTriggerCon",triggerHook:".J_SwitchTrigger",listHook:".J_SwitchList",step:1},t=function(n,r){r=r||{};r=_.defaults(r,e);this._dom=$(n);this._panelList=this._dom.find(r.listHook);this._triggers=this._dom.find(r.triggerConHook).children();this._panels=this._panelList.children();this.init()};t.prototype={init:function(){var e=this._panels.first(),t=e.outerWidth();this._switchOffset=t;this._panelList.width(t*this._panels.length);this._panelList.css({position:"absolute",left:0,right:0});this._panelList.parent().css({position:"relative"})}};return t});