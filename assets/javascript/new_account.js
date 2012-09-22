/**
 * 创建新账号
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */
seajs.use( [ 'common/formCheck'], function( FormCheck ){

    var formHook = '.J_NewAccountForm';
    var tipHook = '.J_Tip';

    FormCheck( formHook, tipHook );
});