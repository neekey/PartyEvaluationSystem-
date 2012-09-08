define(function( require, exports, module){
    require( 'jquery' );

    module.exports = function( textareaHook, curHook, maxHook, overflowCb, retrieveCbCb){

        var textarea = $( textareaHook );
        var curCount = $( curHook );
        var maxCount = $( maxHook );
        var max = parseInt( maxCount.text() );
        var preNum = 0;

        textarea.bind( 'change keyup', function(){

            var num = textarea.val().length;
            curCount.text( num );
            if( preNum <= max && num > max ){
                overflowCb( num, max );
            }
            else if( preNum > max && num <= max ){
                retrieveCbCb()
            }
            preNum = num;
        });
    };
});