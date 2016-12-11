<?php
$dblocation = "localhost";// mysql server address
$dbname     = "database"; // database name on the host or local machine
$dbuser     = "root";     // user of database
$dbpasswd   = "";         // user's password

// try to connect to the database
$dbcnx = @mysql_connect($dblocation,$dbuser,$dbpasswd);
if (!$dbcnx){
exit("<P> Now server of database is unreachable</p>");
}
// choose database
if (! @mysql_select_db($dbname, $dbcnx)){
exit("<P> now database is unavailable");
}
@mysql_query("SET NAMES 'cp1251'");
?>