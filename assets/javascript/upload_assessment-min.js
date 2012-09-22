/**
 * 上传报告页
 * @author neekey <ni184775761@gmail.com>
 * @date 2012.09
 */seajs.use(["jquery"],function(){var e=".J_UploadForm",t=".J_Upload",n=".J_Delete",r=".J_ActionType",i=$(r),s=$(e)[0],o="upload",u="delete";$(t).bind("click",function(){i.val(o);s.submit()});$(n).bind("click",function(){i.val(u);s.submit()})});