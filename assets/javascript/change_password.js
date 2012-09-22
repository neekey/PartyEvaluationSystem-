/**
 * 密码修改页面
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */
seajs.use([ 'common/formCheck', 'jquery' ], function( FormCheck ) {
    'use strict';

    $(document).ready(function () {

        var tipHook = '.J_Tip';
        var formHook = '.J_Form';
        FormCheck( formHook, tipHook );
    });
});