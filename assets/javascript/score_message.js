seajs.use( [ 'common/textCounter' ], function( TextCounter ){

    var textAreaHook = '.J_GiftText';
    var curCountHook = '.J_CurCount';
    var maxCountHook = '.J_MaxCount';
    var countWrapHook = '.J_TextCounter';
    var countWrap = $( countWrapHook );
    TextCounter( textAreaHook, curCountHook, maxCountHook, toggleOverflow, toggleOverflow );

    function toggleOverflow(){
        countWrap.toggleClass( 'count-overflow' );
    }
});