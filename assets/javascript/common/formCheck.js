/**
 * 表单验证
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */
define(function(require, exports, module){
    var FormValid = require( 'common/formValid' );

    module.exports = function( formHook, tipHook ){

        var formTip = $( tipHook );
        var msgSep = '；';

        // 此处使用 `formValid` 组件，每一次的表单change，提交等都会出发检查，
        // 通过第二个参数作为回调返回检查的结果: 是否通过，被检查的元素，检查类型
        return new FormValid( formHook, function( ifValid, elem, type ){

            // 每个需要检查的元素，其检查类型对应的文案提示用自定义属性写如页面
            // 比如不能为空 type = require, 其文案在自定义属性只 data-msg-require 中
            var msg = $( elem).attr( 'data-msg-' + type );
            var text = formTip.text();

            if( !ifValid ){
                if( text.indexOf( msg ) < 0 ){
                    formTip.text( text + msg + msgSep );
                }
                formTip.show();
            }
            else {

                text = text.replace( new RegExp( msg + msgSep, 'g' ), '' );
                formTip.text( text );
                if( !text ){
                    formTip.hide();
                }
            }
        });
    }
});