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
	    
	    $query = ' ';		// HIER MYSQL QUERY EINFÜGEN

		if(mysqli_query($connection, $query)) {
			echo ('Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}

		//

	    $query = ' ';		// HIER MYSQL QUERY EINFÜGEN

		if(mysqli_query($connection, $query)) {
			echo ('<br>Tabelle erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('<br><br>Fehler beim Erzeugen der Tabelle: ') . mysqli_error($connection);	
		}

		//

	    $query = ' ' ;		// HIER MYSQL QUERY EINFÜGEN

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
