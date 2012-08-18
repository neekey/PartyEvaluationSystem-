/**
 * switchable 组件
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */
define(function() {

    /**
     * 默认配置
     * @type {Object}
     */
    var defaultConfig = {
        triggerConHook: '.J_SwitchTriggerCon',
        triggerHook: '.J_SwitchTrigger',
//        panelCls: '.J_SwitchPanel',
        listHook: '.J_SwitchList',
        step: 1
    };

    var switchable = function switchable( dom, cfg ){

        cfg = cfg || {};
        cfg = _.defaults( cfg, defaultConfig );
        this._dom = $( dom );
        this._panelList = this._dom.find( cfg.listHook );
        this._triggers = this._dom.find( cfg.triggerConHook).children();
        this._panels = this._panelList.children();

        this.init();
    };

    switchable.prototype = {

        init: function(){

            var firstPanel = this._panels.first();
            var panelWith = firstPanel.outerWidth();
            this._switchOffset = panelWith;

            this._panelList.width( panelWith * this._panels.length );
            this._panelList.css({
                position: 'absolute',
                left: 0,
                right: 0
            });

            this._panelList.parent().css({
                position: 'relative'
            });
        }
    }

    return switchable;
});
