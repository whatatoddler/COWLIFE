
// Temporäre Konstanten
var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 720;
var COWLIFE_WELCOME_SCREEN_IMAGE_FILE= 'images/cowlife_screen.png';

var CANVAS_ID = 'maincanvas';
var START_NEW_GAME_BUTTON_ID = 'startNewGameButton';

window.onload=function() {
	
	setCanvasSize(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
	bindStartNewGameButton(START_NEW_GAME_BUTTON_ID);

	if(typeof(canvasToInit.getContext) !== undefined) {
		ctx = canvasToInit.getContext('2d');
	}
	showFullScreenPic(COWLIFE_WELCOME_SCREEN_IMAGE_FILE);
	
}


function showFullScreenPic(pathToImageFile) {
	var pic = new Image();
	pic.src = pathToImageFile;
	pic.addEventListener('load', function(){
		ctx.drawImage(pic,0,0);
	});
}

function setCanvasSize(id, width, height) {
	canvasToInit = document.getElementById(id);
	canvasToInit.setAttribute('width', width);
	canvasToInit.setAttribute('height', height);
}

function bindStartNewGameButton(id) {
	elementToBind = document.getElementById(id);
	elementToBind.setAttribute('onclick', 'startNewGame()');
}

function startNewGame() {
	alert('new game');
}
