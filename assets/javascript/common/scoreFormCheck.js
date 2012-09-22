/**
 * 评分部分的题目检查
 * @author neekey<ni184775761@gmail.com>
 * @date 2012.09
 */

define(function( require, exports, module ){

    require( 'jquery' );

    var errorTipHTML = '<span class="error-tip">请答题</span>';

    module.exports = function( listHook ){

        var list = $( listHook );
        var checks = [];

        list.find( 'li').each(function( index, li ){

            var desc = $( li).find( '.desc' );
            var options = $( li).find( '.options' );
            var radios = options.find( 'input' );
            var check = function(){
                var result = false;
                radios.each( function( index, radio ){
                    if( radio.checked ){

                        result = true;
                    }
                });

                var errorTip = desc.find( '.error-tip' );

                if( result === false ){
                    if( errorTip.length > 0 ){
                        errorTip.show();
                    }
                    else {
                        errorTip = $( errorTipHTML).appendTo( desc );
                        errorTip.show();
                    }

                    desc.addClass( 'error' );
                }
                else {
                    if( errorTip.length > 0 ){
                        errorTip.hide();
                    }
                    desc.removeClass( 'error' );
                }
                return result;
            };

            radios.each(function( index, radio ){
                $( radio).bind( 'click', check );
            });

            checks.push( check );
        });

        // 返回一个方法，该方法将检查题目是否填写完毕
        return function(){
            var ifAllPass = true;
            var checkNum = checks.length;
            var passed = 0;

            for( var i = 0; i < checkNum; i++ ){
                if( !checks[ i ]() ){
                    ifAllPass = false;
                }
                else {
                    passed++;
                }
            }

            return {
                // 是否都填写完毕
                result: ifAllPass,
                // 总的题目数量
                total: checkNum,
                // 已经完成的题目数量
                pass: passed
            }
        }
    };
});