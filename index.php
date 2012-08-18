<!doctype html>
<html>
    <head>
        <meta charset="utf8">
        <?php include "mods/assets.common.php"; ?>
        <link rel="stylesheet" type="text/css" href="assets/lib/css/formalize.css">
        <link rel="stylesheet" type="text/css" href="assets/stylesheet/index.css">
        <script type="text/javascript" src="assets/javascript/lib-min.js"></script>
        <script type="text/javascript" src="assets/javascript/index-min.js"></script>
    </head>
    <body id="index">
        <?php include "mods/header.php"; ?>
        <div id="content">
            <div class="content-wrap">
                <!--登陆表单-->
                <div class="block-decoration form-block">
                    <div class="block-decoration-wrap">
                        <form>
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
                                    <input type="text" id="field-username" name="username" placeholder="请输入文字" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="field-password">密码</label>
                                <div class="controls">
                                    <input type="text" id="field-password" name="password" placeholder="请输入文字" />
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="verify-code">检验码</label>
                                <div class="controls">
                                    <input class="short" id="verify-code" name="code" type="text" placeholder="请输入文字" />
                                    <img src="http://dummyimage.com/82x26/985236/fff.png" class="verify-code-img short"/>
                                </div>
                            </div>
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
                                <p><img src="http://placehold.it/110x75" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                            <div class="item">
                                <p><img src="http://placehold.it/110x75" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="item">
                                <p><img src="http://placehold.it/110x75" class="pic"></p>
                                <div class="text">
                                    <p class="title">学校召开党委中心组扩大会议</p>
                                    <p class="desc">6月8日下午，学校党委学校党委学校党委学校党委学校党委学校党委学校党委学校党委<a href=#>【详情】</a></p>
                                </div>
                            </div>
                            <div class="item">
                                <p><img src="http://placehold.it/110x75" class="pic"></p>
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
                    <?php include "mods/copyright.php"; ?>
                </div>
            </div>
        </div>
    </body>
</html>