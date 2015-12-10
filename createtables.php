<?php
	
	if($_SERVER["REQUEST_METHOD"] == "POST") {
		
		require('includes/mysql.inc.php');

		$connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

		if(!$connection) {
			die('MYSQL Connection failed: '.mysqli_connect_error());
		}
		
		$isFailed = false;


		// Pro table erstmal einer dieser Abschnitte, wenns mehr wird macht es Sinn
		// ein Query Array per Schleife zu durchlaufen.
	    
	    $query = ' CREATE TABLE scenes
(
id INT UNIQUE PRIMARY KEY,
name VARCHAR(30) NOT NULL UNIQUE,
picturelink TEXT(240) NOT NULL,
objectid INT,
object2id INT,
object3id INT,
object4id INT,
object5id INT,
position1x INT,
position2x INT,
position3x INT,
position4x INT,
position5x INT,
position1y INT,
position2y INT,
position3y INT,
position4y INT,
position5y INT
)';	

		if(mysqli_query($connection, $query)) {
			echo ('Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}

		

	    $query = 'CREATE TABLE objects
(
id INT UNIQUE PRIMARY KEY NOT NULL,
picturelink TEXT(240)NOT NULL,
eventid INT,
name VARCHAR(30)NOT NULL UNIQUE
)



 ';		

		if(mysqli_query($connection, $query)) {
			echo ('<br>Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('<br><br>Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}



		$query = 'CREATE TABLE users
(
id INT UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR UNIQUE NOT NULL,
email VARCHAR UNIQUE NOT NULL,
password VARCHAR NOT NULL
)
  ';

		if(mysqli_query($connection, $query)) {
			echo ('<br>Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('<br><br>Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}



		

	    $query = 'CREATE TABLE events
(
id INT UNIQUE PRIMARY KEY NOT NULL,
name VARCHAR(30)NOT NULL UNIQUE,
code TEXT(500)
)
 ' ;	

		if(mysqli_query($connection, $query)) {
			echo ('<br>Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('<br><br>Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}

		//

		if($isFailed == false) {
			echo ('Alle Tabellen erfolgreich erzeugt');
		}
		else {
			echo ('<br><br>Fehler bei mindestens einer Tabelle');
		}
	}
?>
