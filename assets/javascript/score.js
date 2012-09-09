seajs.use( [ 'common/textCounter', 'common/scoreFormCheck' ], function( TextCounter, ScoreFormCheck ){

    var formHook = '.J_ScoreForm';
    var textAreaHook = '.J_GiftText';
    var curCountHook = '.J_CurCount';
    var maxCountHook = '.J_MaxCount';
    var countWrapHook = '.J_TextCounter';

    var processBarHook = '.J_ProcessBar';
    var processScoreBlockHook = '.J_ScoreFormWrap';
    var questionListHook = '.J_QuestionList';
    var nextHook = '.J_Next';
    var prevHook = '.J_Prev';
    var mainErrorTipHook = '.J_Tip';

    var scoreForm = $( formHook );
    var prevTrigger = $( prevHook );
    var nextTrigger = $( nextHook );
    var mainErrorTip = $( mainErrorTipHook );
    var processBarWrap = $( processBarHook );
    var processBar = processBarWrap.find( '.item' );
    var processScoreBlocks = $( processScoreBlockHook );

    var currentActiveIndex = 0;
    var blockCheckList = [];
    var textCountCheckList = [];

    processScoreBlocks.each( function( index, block ){

        block = $( block );

        // 计数器
        var countWrap = block.find( countWrapHook );
        var textCountCheck = TextCounter( block.find( textAreaHook ), block.find( curCountHook ), block.find( maxCountHook ), toggleOverflow, toggleOverflow );
        textCountCheckList.push(function(){
            var result = textCountCheck();
            if( result.result === false ){
                return false;
            }
            else if( result.actual <= 0 ){
                mainErrorTip.show();
                return false;
            }
            else {
                return true;
            }
        });

        function toggleOverflow(){
            countWrap.toggleClass( 'count-overflow' );
        }

        // 题目
        var scoreListCheck = ScoreFormCheck( block.find( questionListHook ));

        var scoreCheck = function(){
            var result = scoreListCheck();
            if( result.result ){
                mainErrorTip.hide();
                return true;
            }
            else {
                mainErrorTip.show();
                return false;
            }
        };

        blockCheckList.push( scoreCheck );
    });

    nextTrigger.bind( 'click', function( ev ){

        // 检查字数
        var textCountCheck = textCountCheckList[ currentActiveIndex ];
        var blockCheck = blockCheckList[ currentActiveIndex ];

        if( blockCheck() && textCountCheck() ){
            toNext();
        }
    });

    prevTrigger.bind( 'click', function(ev){
        toPrev();
    });

    function toNext(){
        var nextIndex = currentActiveIndex + 1;

        // 所有都完成，提交
        if( nextIndex > processBar.length - 1 ){
            scoreForm.submit();
        }
        else {
            switchTo( nextIndex );
        }
    }

    function toPrev(){

        var nextIndex = currentActiveIndex - 1 || 0;

        if( nextIndex == currentActiveIndex ){
            return;
        }

        switchTo( nextIndex );
    }

    function switchTo( index ){

        // 更新进度
        processBar.each( function(i, bar ){
            if( i < index ){
                $( bar).addClass( 'finished' );
            }
            else {
                $( bar ).removeClass( 'finished' );
            }
        });

        // 更新题目块
        processScoreBlocks.hide();
        $( processScoreBlocks[ index ]).fadeIn();

        // 设置trigger
        if( index == 0 ){
            prevTrigger.fadeOut();
        }
        else {
            prevTrigger.fadeIn();
        }

        // 最后一页
        if( index == processBar.length - 1 ){
            nextTrigger.text( '提交' );
        }
        else {
            nextTrigger.text( '下一页' );
        }

        currentActiveIndex = index;
    }

});