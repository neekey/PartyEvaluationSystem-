/**
 * 一般党员评分页面
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */
seajs.use( [ 'common/scoreFormCheck' ], function( ScoreFormCheck ){

    // === 钩子们 ===

    // 表单
    var formHook = '.J_ScoreForm';
    // 每页题目容器
    var processScoreBlockHook = '.J_ScoreFormWrap';
    // 问题列表
    var questionListHook = '.J_QuestionList';
    // 下一页按钮
    var nextHook = '.J_Next';
    // 上一页按钮
    var prevHook = '.J_Prev';
    // 表单错误提示
    var mainErrorTipHook = '.J_Tip';

    // === 节点们 ===
    var scoreForm = $( formHook );
    var prevTrigger = $( prevHook );
    var nextTrigger = $( nextHook );
    var mainErrorTip = $( mainErrorTipHook );
    var processScoreBlocks = $( processScoreBlockHook );

    // 当前页数
    var currentActiveIndex = 0;
    // 用于储存每个块对应的表单检查方法
    var blockCheckList = [];

    // 便利各页，闭包构造表单检查方法，push到`blockCheckList`中以供后用
    processScoreBlocks.each( function( index, block ){

        block = $( block );

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

    // 下一页被点击
    nextTrigger.bind( 'click', function( ev ){

        // 先检查，通过才能进入下一页
        var blockCheck = blockCheckList[ currentActiveIndex ];
        if( blockCheck() ){
            toNext();
        }
    });

    // 上一页被点击
    prevTrigger.bind( 'click', function(ev){
        toPrev();
    });

    function toNext(){
        var nextIndex = currentActiveIndex + 1;

        // 所有都完成，提交
        if( nextIndex > processScoreBlocks.length - 1 ){
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

    /**
     * 切换到制定页
     * @param index
     */
    function switchTo( index ){

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
        if( index == processScoreBlocks.length - 1 ){
            nextTrigger.text( '提交' );
        }
        else {
            nextTrigger.text( '下一页' );
        }

        currentActiveIndex = index;
    }

});