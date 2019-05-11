<?php
require_once("config.php");

$con = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
if ($con->connect_error) {
	echo("<b>Failed to access database: </b>" . $con->connect_error);

} else {
	$con->query("CREATE TABLE `" . DB_NAME . "`.`click` ( `zongxuan` INT NOT NULL , `sgjn` INT NOT NULL , `lncz` INT NOT NULL , `xybkm` INT NOT NULL ) ENGINE = InnoDB; ");
	$con->query("INSERT INTO `click` (`zongxuan`, `sgjn`, `lncz`, `xybkm`) VALUES ('0', '0', '0', '0'); ")
	
	$con->query("CREATE TABLE `" . DB_NAME . "`.`admin` ( `username` VARCHAR NOT NULL , `password` VARCHAR NOT NULL , `permission` INT NOT NULL ) ENGINE = InnoDB;");

	/* TO-DO: 建立默认的管理员账号 */

	echo("<b>done.</b>");
}




?>
