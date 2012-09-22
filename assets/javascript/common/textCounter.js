/**
 * 字数统计
 * @author neekey<ni184775761@gmail.com>
 * @date 2012.09
 */
define(function( require, exports, module){
    require( 'jquery' );

    /**
     * 舒适化字数统计组件，最终将返回一个函数，用于检查
     * @param textareaHook 需要检查的textarea元素的hook
     * @param curHook 用于呈现当前字数的元素的hook
     * @param maxHook 用于呈现最大字数的元素的hook
     * @param overflowCb 当文字溢出时将执行的回调函数 ( 当前字数, 最大字数 )
     * @param retrieveCbCb 当由溢出状态恢复到正常状态的时候的回调
     * @return {Function}
     */
    module.exports = function( textareaHook, curHook, maxHook, overflowCb, retrieveCbCb){

        var textarea = $( textareaHook );
        var curCount = $( curHook );
        var maxCount = $( maxHook );
        var max = parseInt( maxCount.text() );
        var preNum = 0;

        textarea.bind( 'change keyup', check );

        function check(){
            var num = textarea.val().length;
            curCount.text( num );
            if( preNum <= max && num > max ){
                overflowCb( num, max );
            }
            else if( preNum > max && num <= max ){
                retrieveCbCb()
            }
            preNum = num;

            return {
                result: num <= max,
                actual: num,
                max: max
            };
        }

        return check;
    };
});