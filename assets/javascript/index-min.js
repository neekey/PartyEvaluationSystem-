/**
 * 首页
 *
 * @author Neekey <ni184775761@gmail.com>
 * @date 2012.08
 */seajs.use(["./lib/jquery","./common/formValid"],function(e,t){"use strict";e(document).ready(function(){e(".affairs").slides({preload:!0,preloadImage:"../assets/image/loading.gif",next:"J_SwitchRight",prev:"J_SwitchLeft",container:"J_SwitchList",generateNextPrev:!1,pagination:!1,generatePagination:!1,autoHeight:!0,play:5e3})})});