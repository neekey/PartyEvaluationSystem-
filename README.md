#PartyEvaluationSystem-
======================

学习型党组织评估系统

## 部署

 * 需要配置[SeaJS](http://seajs.org/docs/)的脚本请求路径，将`mods/seajs.config.php`文件中的`base`设置为正确的值
 * 首页下方的新闻在加载时的loading图片，也需要根据当前部署环境配置路径，修改`assets/javascript/index.js`中的`preloadImage`字段