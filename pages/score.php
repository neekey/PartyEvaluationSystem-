<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <title>评分页面</title>
    <link rel="stylesheet" type="text/css" href="../assets/stylesheet/score.css" media="all">
    <script type="text/javascript" src="../assets/javascript/lib/seajs.js"></script>
    <?php include "../mods/seajs.config.php"; ?>
    <script type="text/javascript" src="../assets/javascript/score.js"></script>
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
            <ul class="process-bar J_ProcessBar">
                <li class="item">愿景体系</li>
                <li class="item">学习系统</li>
                <li class="item">知识系统</li>
                <li class="item">人员系统</li>
                <li class="item">保障系统</li>
            </ul>
            <div class="main-block">
                <div class="main-block-wrap">
                    <div class="title">知识系统</div>
                    <div class="decorator-top"></div>
                    <div class="decorator-bottom"></div>
                    <div class="page-button">
                        <div class="prev J_Prev" style="display: none">上一页</div>
                        <div class="next J_Next">下一页</div>
                    </div>
                    <div class="finish-count">
<!--                        <p class="count"><span class="current">4</span>/<span class="max">6</span></p>-->
                        <p class="tip J_Tip" style="display: none">尚有题目未完成!</p>
                    </div>
                    <form class="score-form J_ScoreForm">
                        <?php for( $i = 0; $i < 5; $i++ ){ ?>
                        <div class="score-form-wrap J_ScoreFormWrap" <?php if( $i > 0 ){ ?> style="display: none" <?php } ?>>
                        <div class="score-form-block">
                            <!--标题-->
                            <h3 class="block-title">一、知识的内容(<span>10分</span>)</h3>
                            <ul class="question-list J_QuestionList">
                                <li>
                                    <div class="desc">
                                        <span class="question-index">1.</span>
                                        <span class="question-desc">党员重点学习有中国特色的社会主义理论,能结合自身工作深刻理会其内涵</span>
                                        <span class="score">1.0分</span>
                                    </div>
                                    <div class="options">
                                        <label class="option-text"><input type="radio" name="option-<?=($i+1)?>" value="good">优秀(1.0)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+1)?>" value="good">良好(0.66)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+1)?>" value="good">中等(0.33)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+1)?>" value="good">差(0)</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="desc">
                                        <span class="question-index">2.</span>
                                        <span class="question-desc">党员重点学习有中国特色的社会主义理论,能结合自身工作深刻理会其内涵</span>
                                        <span class="score">1.0分</span>
                                    </div>
                                    <div class="options">
                                        <label class="option-text"><input type="radio" name="option-<?=($i+2)?>" value="good">优秀(1.0)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+2)?>" value="good">良好(0.66)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+2)?>" value="good">中等(0.33)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+2)?>" value="good">差(0)</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="score-form-block">
                            <!--标题-->
                            <h3 class="block-title">二、知识的内容(<span>10分</span>)</h3>
                            <ul class="question-list J_QuestionList">
                                <li>
                                    <div class="desc">
                                        <span class="question-index">1.</span>
                                        <span class="question-desc">党员重点学习有中国特色的社会主义理论,能结合自身工作深刻理会其内涵</span>
                                        <span class="score">1.0分</span>
                                    </div>
                                    <div class="options">
                                        <label class="option-text"><input type="radio" name="option-<?=($i+3)?>" value="good">优秀(1.0)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+3)?>" value="good">良好(0.66)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+3)?>" value="good">中等(0.33)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+3)?>" value="good">差(0)</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="desc">
                                        <span class="question-index">2.</span>
                                        <span class="question-desc">党员重点学习有中国特色的社会主义理论,能结合自身工作深刻理会其内涵</span>
                                        <span class="score">1.0分</span>
                                    </div>
                                    <div class="options">
                                        <label class="option-text"><input type="radio" name="option-<?=($i+4)?>" value="good">优秀(1.0)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+4)?>" value="good">良好(0.66)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+4)?>" value="good">中等(0.33)</label>
                                        <label class="option-text"><input type="radio" name="option-<?=($i+4)?>" value="good">差(0)</label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        </div>
                        <?php } ?>
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