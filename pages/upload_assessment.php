<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>学院党委查看评分结果</title>
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/upload_assessment.css" media="all">
    <script type="text/javascript" src="../assets/javascript/lib/seajs.js"></script>
    <?php include "../mods/seajs.config.php"; ?>
    <script type="text/javascript" src="../assets/javascript/upload_assessment.js"></script>
</head>
<body>
<?php include "../mods/header.php"; ?>
<div id="content">
    <div class="content-wrap">
        <p class="login-welcome">欢迎登入，<span class="user-name">neekey</span>党员</p>
        <div class="side">
            <ul class="menu">
                <li class="item"><a href="#" class="menu-button">支部评分</a></li>
                <li class="item"><a href="#" class="menu-button menu-button-hover">上传自评</a></li>
                <li class="item"><a href="#" class="menu-button">修改密码</a></li>
                <li class="item"><a href="#" class="menu-button">注销登陆</a></li>
            </ul>
        </div>
        <div class="main decorade-border left-border">
            <div class="main-block">
                <div class="main-block-wrap">
                    <div class="title">上传自评</div>
                    <div class="decorator-top"></div>
                    <div class="decorator-bottom"></div>
                    <form class="upload-form J_UploadForm">
                        <div class="control-group uploader">
                            <p class="tip">重复上传将替换源文件</p><div class="action-button upload-wrap" >选择文件<input type="file"></div>
                        </div>

                        <div class="control-group actions">
<!--                            该字段用于决定表单是用于上传还是用于删除 value: upload|delete-->
                            <input type="hidden" class="J_ActionType" value="upload">
                            <a class="action-button J_Upload">提交</a>
                            <a class="action-button J_Delete">删除</a>
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