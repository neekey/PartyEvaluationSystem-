seajs.use( [ 'common/textCounter', 'common/scoreFormCheck' ], function( TextCounter, ScoreFormCheck ){

    var textAreaHook = '.J_GiftText';
    var curCountHook = '.J_CurCount';
    var maxCountHook = '.J_MaxCount';
    var countWrapHook = '.J_TextCounter';
    var countWrap = $( countWrapHook );
    var textCounterCheck = TextCounter( textAreaHook, curCountHook, maxCountHook, toggleOverflow, toggleOverflow );

    function toggleOverflow(){
        countWrap.toggleClass( 'count-overflow' );
    }

    var questionListHook = '.J_QuestionList';
    var errorTipHook = '.J_ErrorTip';
    var saveBtnHook = '.J_SaveBtn';
    var errorTip = $( errorTipHook );
    var saveBtn = $( saveBtnHook );
    // 题目
    var scoreListCheck = ScoreFormCheck( questionListHook );

    var scoreCheck = function(){
        var result = scoreListCheck();
        if( result.result ){
            errorTip.fadeOut();
            return true;
        }
        else {
            errorTip.fadeIn();
            return false;
        }
    };

    saveBtn.bind( 'click', function( ev ){

        var scoreCheckResult = scoreCheck();
        var textCheckResult = textCounterCheck();
        var ifPass = true;

        if( !scoreCheckResult ){
            ifPass = false;
            errorTip.fadeIn();
        }
        else {
            if( textCheckResult.result ){
                if( textCheckResult.actual <= 0 ){
                    ifPass = false;
                    errorTip.fadeIn();
                }
                else {
                    errorTip.fadeOut();
                }
            }
            else {
                ifPass = false;
                errorTip.fadeOut();
            }
        }

        return ifPass;
    });
});