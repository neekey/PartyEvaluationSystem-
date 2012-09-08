seajs.use( [ 'jquery' ], function(){

    var formHook = '.J_UploadForm';
    var uploadHook = '.J_Upload';
    var deleteHook = '.J_Delete';
    var actionTypeHook = '.J_ActionType';
    var actionTypeField = $( actionTypeHook );
    var formEl = $( formHook )[ 0 ];
    var UPLOAD = 'upload';
    var DELETE = 'delete';

    $( uploadHook).bind( 'click', function(){
        actionTypeField.val( UPLOAD );
        formEl.submit();
    })

    $( deleteHook).bind( 'click', function(){
        actionTypeField.val( DELETE );
        formEl.submit();
    });
});