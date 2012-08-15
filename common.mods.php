<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <?php include "mods/assets.common.php"; ?>
        <link rel="stylesheet" type="text/css" href="assets/lib/css/formalize.css">

        <style>
            #common-mods {
                margin-left: 50px;
            }
            .mod-block {
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body id="common-mods">
        <div class="mod-block">
            <h3 class="title">Block-Decoration</h3>
            <div class="mod-wrap">
                <div class="block-decoration">
                    <div class="block-decoration-wrap">
                        这是块级内容装饰样式
                    </div>
                </div>
            </div>
        </div>
        <div class="mod-block">
            <h3 class="title">Menu Button</h3>
            <div class="mod-wrap">
                <div class="menu-button">评分结果</div>
            </div>
        </div>
        <div class="mod-block">
            <h3 class="title">Action Button</h3>
            <div class="mod-wrap">
                <div class="action-button">保存</div>
            </div>
        </div>
        <div class="mod-block">
            <h3 class="title">Main Block</h3>
            <div class="mod-wrap">
                <div class="main-block">
                    <div class="main-block-wrap">
                        <div class="title">知识系统</div>
                        <div class="decorator-top"></div>
                        <div class="decorator-bottom"></div>
                        <div class="page-button">
                            <div class="prev">上一页</div>
                            <div class="next">下一页</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mod-block">
            <h3 class="title">Table</h3>
            <div class="mod-wrap">
                <form>
                    <div class="control-group">
                        <label class="control-label" for="ipt">姓名</label>
                        <div class="controls">
                            <input type="text" placeholder="请输入文字" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="ipt">姓名</label>
                        <div class="controls">
                            <input type="text" placeholder="请输入文字" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="ipt">姓名</label>
                        <div class="controls">
                            <input class="short" type="text" placeholder="请输入文字" />
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="ipt">姓名</label>
                        <div class="controls">
                            <select>
                                <option>你好</option>
                                <option>我好</option>
                                <option>他好</option>
                            </select>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="ipt">姓名</label>
                        <div class="controls">
                            <input class="short" type="text" placeholder="请输入文字" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>