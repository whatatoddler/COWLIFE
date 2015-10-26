
// Temporäre Konstanten
var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 720;
var COWLIFE_WELCOME_SCREEN_IMAGE_FILE= 'images/cowlife_screen.png';

var CANVAS_ID = 'maincanvas';
var START_NEW_GAME_BUTTON_ID = 'startNewGameButton';

window.onload=function() {
	var ctx = setCanvasSizeAndReturn2DContext(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
	bindStartNewGameButton(START_NEW_GAME_BUTTON_ID);

	showWelcomeScreen(ctx, COWLIFE_WELCOME_SCREEN_IMAGE_FILE);
}



function showWelcomeScreen(context, pathToImageFile) {
	var pic = new Image();
	pic.src = pathToImageFile;
	pic.addEventListener('load', function(){
		context.drawImage(pic,0,0);
	});
}

function setCanvasSizeAndReturn2DContext(id, width, height) {
	canvasToInit = document.getElementById(id);
	canvasToInit.setAttribute('width', width);
	canvasToInit.setAttribute('height', height);

	var contextToReturn = canvasToInit.getContext('2d');
	return contextToReturn;
}

function bindStartNewGameButton(id) {
	elementToBind = document.getElementById(id);
	elementToBind.setAttribute('onclick', 'startNewGame()');
}

function startNewGame() {
	alert("new game");
}
