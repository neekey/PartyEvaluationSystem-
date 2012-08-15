<!doctype html>
<html>
    <head>
        <meta charset="utf8">
        <?php include "mods/assets.common.php"; ?>
        <link rel="stylesheet" type="text/css" href="assets/lib/css/formalize.css">
        <link rel="stylesheet" type="text/css" href="assets/stylesheet/index.css">
    </head>
    <body id="index">
        <?php include "mods/header.php"; ?>
        <div id="content">
            <div class="content-wrap">
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
        <?php include "mods/footer.php"; ?>
    </body>
</html>