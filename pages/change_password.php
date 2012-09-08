<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>修改密码</title>
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/score.css" media="all">
    <link rel="stylesheet" type="text/css" href="../assets/lib/css/formalize.css" media="all">
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/change_password.css" media="all">
    <script type="text/javascript" src="../assets/javascript/lib/seajs.js"></script>
    <?php include "../mods/seajs.config.php"; ?>
    <script type="text/javascript" src="../assets/javascript/change_password.js"></script>
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
                    <div class="title">修改密码</div>
                    <div class="decorator-top"></div>
                    <div class="decorator-bottom"></div>
                    <!--登陆表单-->
                    <form class="new-form J_Form">
                        <div class="control-group">
                            <label class="control-label control-long-label" for="old-password">旧密码</label>
                            <div class="controls ">
                                <input type="password" class="long required" id="old-password" data-msg-required="旧密码不能为空" name="password" placeholder="请输入旧密码" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="new-password">新密码</label>
                            <div class="controls ">
                                <input type="password" class="long required match" id="new-password" data-match="#confirm-new-password" data-msg-match="两次新密码输入不一致" data-msg-required="新密码不能为空" name="password" placeholder="请输入新密码" />
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label control-long-label" for="confirm-new-password">新密码确认</label>
                            <div class="controls ">
                                <input type="password" class="long required match" id="confirm-new-password" data-match="#new-password" data-msg-match="两次新密码输入不一致"  data-msg-required="新密码确认不能为空" name="password" placeholder="再次输入新密码" />
                            </div>
                        </div>
                        <div class="tip J_Tip"></div>
                        <div class="action-group ">
                            <input type="submit" class="action-button" value="修改">
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