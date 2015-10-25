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
	    
	    $query = '';

		if(mysqli_query($connection, $query)) {
			echo ('Tabelle XY erzeugt.');
		}
		else {
			$isFailed = true;
			echo ('Fehler beim Erzeugen der Tabelle XY: ') . mysqli_error($connection);	
		}

		//


		if($isFailed == false) {
			echo ('Alle Tabellen erfolgreich erzeugt');
		}
		else {
			echo ('Fehler bei mindestens einer Tabelle');
		}
	}
?>
