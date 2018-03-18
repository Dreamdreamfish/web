<?php
$m = new Model();
$user = $_post['username'];
$password = $__post["password"];
$count = $m->total('users',"user='". $user ."' and password='". shal($password) ."'");
if ($count) {
    setcookie('user',$user);
    echo "var login=true";
} else {
    echo "var login=false";
}
?>
