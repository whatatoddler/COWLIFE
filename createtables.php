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
	    
	    $query = 'CREATE TABLE scenes
		(
		id SMALLINT,
		name VARCHAR,
		picturelink TEXT,
		objectid SMALLINT,
		object2id SMALLINT,
		object3id SMALLINT,
		object4id SMALLINT,
		object5id SMALLINT,
		position1x SMALLINT,
		position2x SMALLINT,
		position3x SMALLINT,
		position4x SMALLINT,
		position5x SMALLINT,
		position1y SMALLINT,
		position2y SMALLINT,
		position3y SMALLINT,
		position4y SMALLINT,
		position5y SMALLINT,
		UNIQUE(id, name),
		PRIMARY KEY (id)
		)';

		if(mysqli_query($connection, $query)) {
			echo ('Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}


	    $query = "CREATE TABLE objects
		(
		id SMALLINT(size),
		picturelink TEXT,
		eventid SMALLINT(size),
		name VARCHAR(size),
		position SMALLINT,
		UNIQUE(id, name),
		PRIMARY KEY (id)
		)";

		if(mysqli_query($connection, $query)) {
			echo ('<br>Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('<br><br>Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}


	    $query = 'CREATE TABLE events
		(
		ID SMALLINT(size),
		NAME VARCHAR(size),
		CODE MEDIUMTEXT,
		UNIQUE(id, name),
		PRIMARY KEY (id)
		)';

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
