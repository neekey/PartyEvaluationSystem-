seajs.use( [ 'common/formCheck'], function( FormCheck ){

    var formHook = '.J_NewAccountForm';
    var tipHook = '.J_Tip';

    FormCheck( formHook, tipHook );
});