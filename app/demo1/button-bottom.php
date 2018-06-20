<?php
/**
 * Created by PhpStorm.
 * User: Kelly
 * Date: 11/9/17
 * Time: 11:10 AM
 */
require ('../../static/init.php');

//$name='demo1';
//$smarty->assign( 'name' , $name );

$template_path = "demo1/button-bottom.html";
if(!$smarty->isCached($template_path)) {
    try {
        $setCache = false;
    }catch (Exception $e){
        $L = NULog::getInstance();
        //第一个参数 int 0代表事件记录（THING LOG:)，1代表错误记录（ERROR LOG:）
        //第二个参数 string 描述文字
        //第三个参数 string 时间
        $L->log(NULog::ERROR_LOG,$e->getMessage());
        $L->close();
        $setCache = false;
    }
}
$smarty->clearCache($template_path);
$smarty->display($template_path);
?>