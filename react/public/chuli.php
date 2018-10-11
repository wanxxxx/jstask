<?php
$code = $_POST["code"];
include("../DBDA.class.php");
$db = new DBDA();
$sql = "select name from nation where code='{$code}'";
echo $db->StrQuery("$sql");//ajax的数据返回的话就直接输出