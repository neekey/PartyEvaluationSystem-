<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="../assets/lib/css/formalize.css">
        <link rel="stylesheet" type="text/css" href="../assets/stylesheet/index.css">
        <script type="text/javascript" src="../assets/javascript/lib/seajs.js"></script>
        <?php include "../mods/seajs.config.php"; ?>
<!--        <script type="text/javascript" src="../assets/javascript/lib/jquery.js"></script>-->
        <script type="text/javascript" src="../assets/javascript/index.js"></script>
    </head>
    <body id="index">
        <?php include "../mods/header.php"; ?>
        <div id="content">
            <div class="content-wrap">
                <!--登陆表单-->
                <div class="block-decoration form-block">
                    <div class="block-decoration-wrap">
                        <form class="J_LoginForm">
                            <div class="control-group">
                                <label class="control-label" for="field-type">选择类型</label>
                                <div class="controls">
                                    <select name="type" id="field-type">
                                        <option>你好</option>
                                        <option>我好</option>
                                        <option>他好</option>
                                    </select>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="field-username">用户名</label>
                                <div class="controls">
                                    <input type="text" id="field-username" name="username" class="required" data-msg-required="用户名不能为空" placeholder="请输入文字" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="field-password">密码</label>
                                <div class="controls">
                                    <input type="password" id="field-password" name="password" class="required" data-msg-required="密码不能为空"placeholder="请输入文字" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="verify-code">检验码</label>
                                <div class="controls verify-code">
                                    <input class="short required" id="verify-code" name="code" type="text" data-msg-required="检验码不能为空" placeholder="请输入文字" />
                                    <img src="http://avital.mobi/82x26/000/fff&text=122" class="verify-code-img short"/>
                                </div>
                            </div>
                            <div class="tip J_Tip"></div>
                            <div class="action-group ">
                                <input type="submit" class="form-button" value="提交">
                                <input type="reset" class="form-button" value="重置">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="bg">
                <!--实时新闻-->
                <div class="affairs">
                    <!--翻页Trigger-->
                    <a href="#" class="trigger left J_SwitchTrigger J_SwitchLeft">前一个</a>
                    <a href="#" class="trigger right J_SwitchTrigger J_SwitchRight">后一个</a>
                    <!--内容，每个slide为一屏-->
                    <div class="affairs-list J_SwitchList">
                        <div class="slide">
                            <div class="item">
                                <p><img src="http://avital.mobi/110x75/000/fff&text=122" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                            <div class="item">
                                <p><img src="http://avital.mobi/110x75/000/fff&text=122" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="item">
                                <p><img src="http://avital.mobi/110x75/000/fff&text=122" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                            <div class="item">
                                <p><img src="http://avital.mobi/110x75/000/fff&text=122" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--站点通用信息，Copyright等-->
                <div class="site-info">
                    <?php include "../mods/copyright.php"; ?>
                </div>
            </div>
        </div>
    </body>
</html>