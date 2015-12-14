<?php


if($_SERVER["REQUEST_METHOD"] == "POST") {
	$user = $_POST['user'];
	$password = $_POST['password'];

	//Hier sollten zunächst Plausibilitätsprüfungen erfolgen

	if(login($user, $password)) {
		echo('Hallo '.$user);
	} 
	else {
		echo('Login nicht erfolgreich');
	}
}

function login($user, $password) {
	if(  ) {// <-- Hier müssen die eingegebenen Daten geprüft werden
 		return true;
	}
	return false;
}


?>