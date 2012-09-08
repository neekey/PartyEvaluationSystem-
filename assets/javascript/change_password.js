/**
 * 首页
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */
seajs.use([ 'common/formValid', 'jquery' ], function( FormValid ) {
    'use strict';

    $(document).ready(function () {

        var tipHook = '.J_Tip';
        var formHook = '.J_Form';
        var msgSep = '；';

        var formTip = $( tipHook );
        var formValid = new FormValid( formHook, function( ifValid, elem, type ){
            console.log( arguments );
            var msg = $( elem).attr( 'data-msg-' + type );
            var text = formTip.text();

            if( !ifValid ){
                if( text.indexOf( msg ) < 0 ){
                    formTip.text( text + msg + msgSep );
                }
                formTip.show();
            }
            else {

                text = text.replace( new RegExp( msg + msgSep, 'g' ), '' );
                formTip.text( text );
                if( !text ){
                    formTip.hide();
                }
            }
        });
    });
});