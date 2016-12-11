<?
class DbPusher
{
	// $query = "SELECT * FROM time";
	// $query = mysql_query($query);
	// connect to db
	// require_once("db_funcs.php");
	
	private $dblocation = "localhost";// mysql server address
	private $dbname     = "db";       // database name on the host or local machine
	private $dbuser     = "root";     // user of database
	private $dbpasswd   = "";         // user's password
	
	
	public function __construct($databaseName)
	{
		$this->dbname = $databaseName;
	}
}
?>