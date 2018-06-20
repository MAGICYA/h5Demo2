<?php
//调整时区
date_default_timezone_set("Asia/Shanghai");

define('ROOT_PATH', str_replace('static/init.php', '', str_replace('\\', '/', __FILE__)));

require (ROOT_PATH . 'libs/smarty/Smarty.class.php');


//配置smarty
$smarty = new Smarty;
$smarty->template_dir = ROOT_PATH . 'templates/';
$smarty->compile_dir = ROOT_PATH . 'templates_c/';
//$smarty->cache_dir = ROOT_PATH . 'cache/';
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 7200;
//$smarty->force_compile = true;
$smarty->left_delimiter = '<{'; // 左定界符
$smarty->right_delimiter = '}>'; // 右定界符
//
//$smarty->assign('host', ROOT_URL);
?>