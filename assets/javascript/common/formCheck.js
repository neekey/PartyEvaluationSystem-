define(function(require, exports, module){
    var FormValid = require( 'common/formValid' );

    module.exports = function( formHook, tipHook ){

        var formTip = $( tipHook );
        var msgSep = '；';

        return new FormValid( formHook, function( ifValid, elem, type ){

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
    }
});