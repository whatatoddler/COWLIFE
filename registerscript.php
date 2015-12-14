<?php


if($_SERVER["REQUEST_METHOD"] == "POST") {
	$user = $_POST['user'];
	$password = $_POST['password'];

	//Hier sollten zunächst Plausibilitätsprüfungen erfolgen

	if(registerUser($user, $password)) {
		echo('Registrierung erfolgreich '.$user);
	} 
	else {
		echo('Registrierung nicht erfolgreich');
	}
}

function registerUser($user, $password) {
	if(  ) {// <-- Hier müssen die eingegebenen Daten geprüft werden, auch um SQL Injections zu verhindern
			// Die Registrierung darf nur erfolgen, wenn Benutzer noch nicht existiert.
 	// Hier SQL Query für DB Eintrag
 		return true;
	}
	return false;
}


?>