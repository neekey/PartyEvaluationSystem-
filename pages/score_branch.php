<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>学校组织部查看某个学院某个党支部的评分情况，并导出报表</title>
    <?php include "../mods/assets.common.php"; ?>
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/score_branch.css" media="all">
</head>
<body>
<?php include "../mods/header.php"; ?>
<div id="content">
    <div class="content-wrap">
        <div class="side">
            <ul class="menu">
                <li class="item"><a href="#" class="menu-button menu-button-hover">评分结果</a></li>
                <li class="item"><a href="#" class="menu-button">修改密码</a></li>
                <li class="item"><a href="#" class="menu-button">注销登陆</a></li>
            </ul>
        </div>
        <div class="main decorade-border left-border">
            <div class="bread-crumbs">
                <div class="tag">当前</div>
                <div class="pos">计算机科学与技术学院</div>
                <a href="#" class="action-button">返回学院列表</a>
                <a href="#" class="action-button">导出学院报表</a>
            </div>
            <table class="red-table branch-list">
                <colgroup>
                    <col>
                    <col>
                </colgroup>
                <tbody>
                <tr>
                    <td class="colord"><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                </tr>
                <tr>
                    <td><a href="#">第 1 党支部</a></i></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                </tr>
                <tr>
                    <td><a href="#">第 1 党支部</a></i></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                    <td><a href="#">第 1 党支部</a></td>
                </tr>
                </tbody>
            </table>
            <div class="main-block">
                <div class="main-block-wrap">
                    <div class="title">第一党支部</div>
                    <div class="decorator-top"></div>
                    <div class="decorator-bottom"></div>
                    <div class="form-header">
                        <p class="brief">共20人，10人已评价</p>
                        <a href="#" class="action-button result-download">下载自评报告</a>
                    </div>
                    <div class="form-like result-list">
                        <div class="form-head">
                            <span>党员评分</span>
                            <span>党委评分</span>
                            <span>总分</span>
                        </div>
                        <div class="form-label-like-long">愿景体系( 15分 )</div>
                        <div class="form-input-list">
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                        </div>
                        <div class="form-label-like-long">愿景体系( 15分 )</div>
                        <div class="form-input-list">
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                        </div>
                        <div class="form-label-like-long">愿景体系( 15分 )</div>
                        <div class="form-input-list">
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                            <div class="form-input-like-short">13.00分</div>
                        </div>
                    </div>

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