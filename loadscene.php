<?php

/*

Dieses Script wird der Ajax Request vom JavaScript aufgerufen. Hier findet der Zugriff auf die MySQL Datenbank statt.
Es werden die notwendigen Daten für eine Scene ausgelesen und die Daten werden zurück ans JS gegeben. 

*/

if($_SERVER["REQUEST_METHOD"] == "POST") {

	require('includes/mysql.inc.php');
	$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

	if(!$connection) {
		die('MYSQL Connection failed: '.mysqli_connect_error());
	}


	//Ab hier sollen die Daten aus der SQL DB ausgelesen werden
	$sceneID = $_POST['id'];
	$sceneName = 'Day of the Cow';
	$sceneBackgroudPath = 'images/sc1_bg.png';
	
	$sceneObjectPositionX = array();
	$sceneObjectPositionY = array();

	$objectId = array();
	$objectPicPath = array();
	$objectName = array();
	$objectEventId = array();


	// Hier die Ausgabe ans JS, nach JSon Notation:

	$responseString = '{"sceneID":"'.$sceneID.'", "sceneName":"'.$sceneName.'", "sceneBackgroudPath":"'.$sceneBackgroudPath.'"}';
	echo($responseString);
}

?>