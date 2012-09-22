/**
 * 上传报告页
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */
seajs.use( [ 'jquery' ], function(){

    var formHook = '.J_UploadForm';
    var uploadHook = '.J_Upload';
    var deleteHook = '.J_Delete';
    var actionTypeHook = '.J_ActionType';
    var actionTypeField = $( actionTypeHook );
    var formEl = $( formHook )[ 0 ];
    var UPLOAD = 'upload';
    var DELETE = 'delete';

    // 根据不同的点击，设置隐藏域的值，来让后端判断操作类型
    $( uploadHook).bind( 'click', function(){
        actionTypeField.val( UPLOAD );
        formEl.submit();
    });

    $( deleteHook).bind( 'click', function(){
        actionTypeField.val( DELETE );
        formEl.submit();
    });
});