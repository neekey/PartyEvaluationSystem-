/**
 * 表单验证
 * @author neekey <ni184775761@gmail.com>
 */
define(function(require, exports, module) {
    require( 'jquery' );
    /**
     * fromValid 组建构造函数
     * @param {String} hook
     * @param {Function}
     * 	callback( result, elem, rule, msg )  对每个需要验证的表单验证后的回调（每个规则）
     * 		result: 验证结果
     * 		elem: 被验证的元素
     * 		rule: 被验证的规则
     * 		msg: 在rule中设置的错误信息
     * @param {Object} rules 自定义规则
     */
    var formValid = function( hook, callback, rules ){
        // ====以下为非函数成员变量====

        this.form = $( hook );
        this.formEl = this.form[0];
        this.callback = callback;
        if( rules ){
            this.rules = $.extend( this.rules, rules );
        }
        this.init();
    };
    formValid.prototype = {
        /**
         * 对表单进行初始化，将对form内的所有元素重新添加事件
         */
        init: function(){
            // 为组件添加相应事件接口

            var that = this, i, el;

            var formChilds = this.formEl.elements;
            for( i = 0; formChilds[ i ]; i++ ){
                el = formChilds[ i ];
                // 添加提交事件
                if( $( el ).attr( 'type' ) == 'submit' ){
                    $( el ).bind( 'click', function( ev ){
                        if( !that.check() ){
                            ev.preventDefault();
                            return false;
                        }
                    });
                }

                // 添加change 事件
                $( el ).bind( 'change', function(){
                    that.check_field( this );
                });
                $( el ).bind( 'blur', function(){
                    that.check_field( this );
                });
                $( el ).bind( 'keyup', function(){
                    that.check_field( this );
                });

            }
        },
        /**
         * 表单对象的表单验证以表单字段的class中是否含有对应关键字来
         * 决定如何进行验证
         * 验证规则放在prototype中, 让所有form实例对象共享这个配置
         * rule: {
         *   msg: 当验证不通过时输出的错误文字,
         *   test: 用于进行验证的函数，返回true或者false
         * }
         * test: function(obj){}, obj为当前验证字段dom对象
         */
        rules: {
            required: {
                msg: "This field is required.",
                test: function(obj){
                    return obj.value.length > 0;
                }
            },
            email: {
                msg: "Not a valid email address.",
                test: function(obj){
                    // 若value为空则为真，若不为空则验证邮箱是否正确
                    var EX = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;
                    return !obj.value || EX.test(obj.value);
                }
            },
            /**
             * 用于两个表单的值是否匹配
             * 需要在验证表单中添加属性 match='target_id'
             */
            match: {
                msg: "两次输入不匹配!",
                test: function(obj){
                    var target = $(obj).attr('data-match');
                    if( !obj.value ){
                        return undefined;
                    }
                    else {
                        return (obj.value === $(target).val());
                    }
                }
            },
            phone: {
                msg: "Not a valid phone number.",
                test: function(obj){
                    var m = /(\d{3}).*(\d{3}).*(\d{4})/.exec( obj.value);
                    // 若value为空则为真，若不为空则验证邮箱是否正确
                    return !obj.value || m;
                }
            },
            'max\\d+': {
                msg: "输入超过长度限制",
                test: function( obj, rule ){
                    var l = parseInt( rule.substring( 3 ), 0 ),
                        val = obj.value;
                    return val.length <= l;
                }
            },
            'min\\d+': {
                msg: "输入内容长度不足",
                test: function( obj, rule ){
                    var l = parseInt( rule.substring( 3 ), 0 ),
                        val = obj.value;
                    return val.length >= l;
                }
            }
        },
        /**
         * 对表单进行验证
         * @return <boolean>
         */
        check: function(){
            // 表单验证结果，作为闭包
            var check_result = true;

            var rules = this.rules;
            // 用于闭包的form组建对象
            var that = this,
                form = this.form,
                formEl = this.formEl,
                formChildren = this.formEl.elements;

            // 对表单内的每个字段进行遍历
            for(var i = 0; i < formChildren.length; i++){

                if( !this.check_field( formChildren[i] ) ){
                    check_result = false;
                }
            }
            return check_result;
        },
        /**
         * 对单个字段进行检查
         * @param <HTMLElement> elem
         * @return <boolean>
         */
        check_field: function( elem, cb ){
            var callback = cb || this.callback;

            // 对每个规则进行遍历
            var check_result = true,
                ruleResult = true,
                ifChecked = false,
                re = null,
                reResult = null;
            for(var j in this.rules){

                // 验证该表单字段是否含有响应的类名， 若存在，则进行验证
                re = new RegExp("(?:^|\\s)(" + j + ")(?:\\s|$)");
                reResult = re.exec( elem.className );
                if( reResult && reResult[ 1 ] ){
                    ifChecked = true;
                    ruleResult = this.rules[ j ].test( elem, reResult[ 1 ] );
                    if( ruleResult === false ){
                        check_result = false;
                    }

                    if( ruleResult === undefined ){
                        continue;
                    }

                    this.callback( ruleResult, elem, reResult[ 1 ], this.rules[ j ][ 'msg' ] );
                    reResult = null;
                }
            }

            return check_result;
        },
        /**
         * 提交表单
         * @param {Boolean} ifCheck 是否做表单检查，默认为true
         */
        submit: function( ifCheck ){
            ifCheck = !!(ifCheck === undefined);
            if( ifCheck ){
                if( !this.check() ){
                    return false;
                }
            }
            this.formEl.submit();
            return true;
        }
    };

    module.exports = formValid;
});