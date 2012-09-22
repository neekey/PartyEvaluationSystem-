/**
 * 学院党委评分并填写寄语页面
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */
seajs.use( [ 'common/textCounter', 'common/scoreFormCheck' ], function( TextCounter, ScoreFormCheck ){

    // === 勾子们 ===
    var textAreaHook = '.J_GiftText';
    var curCountHook = '.J_CurCount';
    var maxCountHook = '.J_MaxCount';
    var countWrapHook = '.J_TextCounter';
    var questionListHook = '.J_QuestionList';
    var errorTipHook = '.J_ErrorTip';
    var saveBtnHook = '.J_SaveBtn';

    var countWrap = $( countWrapHook );
    var errorTip = $( errorTipHook );
    var saveBtn = $( saveBtnHook );

    // 题目检查
    var scoreListCheck = ScoreFormCheck( questionListHook );
    // 字数检查
    var textCounterCheck = TextCounter( textAreaHook, curCountHook, maxCountHook, toggleOverflow, toggleOverflow );

    // 切换字数溢出的样式
    function toggleOverflow(){
        countWrap.toggleClass( 'count-overflow' );
    }

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