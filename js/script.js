window.onload = function() {
	context = document.getElementById('maincanvas').getContext('2d'); 

	var pic = new Image();
	pic.src = "images/cow.png";
	pic.addEventListener("load", function(){
		context.drawImage(pic,200,200); // pic erst zeichnen wenn es geladen ist
	});
}
