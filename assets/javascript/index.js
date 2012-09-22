/**
 * 首页
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */
seajs.use([ 'common/formCheck', 'lib/slides.jquery' ], function( FormCheck ) {
    'use strict';

    $(document).ready(function () {

        var formHook = '.J_LoginForm';
        var tipHook = '.J_Tip';

        // 初始化滚动组件
        $('.affairs').slides({
            preload: true,
            // 图片加载时显示的loading图案
            preloadImage: '../assets/image/loading.gif',
            next: 'J_SwitchRight',
            prev: 'J_SwitchLeft',
            container: 'J_SwitchList',
            generateNextPrev: false,
            pagination: false,
            generatePagination: false,
            autoHeight: true,
            play: 5000
        });

        // 表单验证
        FormCheck( formHook, tipHook );
    });
});