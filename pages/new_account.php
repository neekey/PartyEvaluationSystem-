<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>评分页面</title>
    <?php include "../mods/assets.common.php"; ?>
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/score.css" media="all">
    <link rel="stylesheet" type="text/css" href="../assets/lib/css/formalize.css" media="all">
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/new_account.css" media="all">
</head>
<body>
<?php include "../mods/header.php"; ?>
<div id="content">
    <div class="content-wrap">
        <p class="login-welcome">欢迎登入，<span class="user-name">neekey</span>党员</p>
        <div class="side">
            <ul class="menu">
                <li class="item"><a href="#" class="menu-button">支部评分</a></li>
                <li class="item"><a href="#" class="menu-button">修改密码</a></li>
                <li class="item"><a href="#" class="menu-button">注销登陆</a></li>
            </ul>
        </div>
        <div class="main decorade-border left-border">
            <div class="main-block">
                <div class="main-block-wrap">
                    <div class="title">生成账号</div>
                    <div class="decorator-top"></div>
                    <div class="decorator-bottom"></div>
                    <!--登陆表单-->
                    <form class="new-form">
                        <div class="control-group">
                            <label class="control-label control-long-label" for="field-type">党员所属部门</label>
                            <div class="controls">
                                <select name="type" class="long" id="field-type">
                                    <option>你好</option>
                                    <option>我好</option>
                                    <option>他好</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="field-username">党员所属党支部</label>
                            <div class="controls">
                                <select name="type" class="long" id="field-type">
                                    <option>你好</option>
                                    <option>我好</option>
                                    <option>他好</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="field-password">党员所属类型</label>
                            <div class="controls">
                                <select name="type" class="long" id="field-type">
                                    <option>你好</option>
                                    <option>我好</option>
                                    <option>他好</option>
                                </select>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="verify-code">党员学好或工号</label>
                            <div class="controls ">
                                <input type="text" class="long" id="field-password" name="password" placeholder="请输入文字" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="verify-code">党员姓名</label>
                            <div class="controls ">
                                <input type="text" class="long" id="field-password" name="password" placeholder="请输入文字" />
                            </div>
                        </div>
                        <div class="action-group ">
                            <input type="submit" class="action-button" value="保存">
                            <input type="reset" class="action-button" value="重置">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="footer">
    <div class="bg">
        <!--站点通用信息，Copyright等-->
        <div class="site-info">
            <?php include "../mods/copyright.php"; ?>
        </div>
    </div>
</div>
</body>
</html>