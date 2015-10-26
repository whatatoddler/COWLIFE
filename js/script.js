
// Temporäre Konstanten
var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 720;
var COWLIFE_WELCOME_SCREEN_IMAGE_FILE= 'images/cowlife_screen.png';

var CANVAS_ID = 'maincanvas';
var START_NEW_GAME_BUTTON_ID = 'startNewGameButton';




var PLAYER_COW_PIC= 'images/cow.png';

var SCENE_BG_PATH = [];
var SCENE_NAME =[];

SCENE_BG_PATH[0] = 'images/sc1_bg.png';
SCENE_NAME[0] = 'Day of the Cow';

var OBJECT_PIC_PATH = [];
var OBJECT_NAME = [];

OBJECT_PIC_PATH[0] = 'images/grass1.png';
OBJECT_NAME[0] = 'Grasbüschel';


window.onload=function() {
	
	setCanvasSize(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
	bindStartNewGameButton(START_NEW_GAME_BUTTON_ID);

	if(typeof(canvasToInit.getContext) !== undefined) {
		ctx = canvasToInit.getContext('2d');
	}
	showFullScreenPic(COWLIFE_WELCOME_SCREEN_IMAGE_FILE);
}

// füllt das Canvas weiß
function clearScreen() {
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

// zeichnet ein Bild ins Canvas
function showFullScreenPic(pathToImageFile) {
	var pic = new Image();
	pic.src = pathToImageFile;
	pic.addEventListener('load', function(){
		ctx.drawImage(pic,0,0);
	});
}

// setzt HTML Sttribute für Canvas width/height
function setCanvasSize(id, width, height) {
	canvasToInit = document.getElementById(id);
	canvasToInit.setAttribute('width', width);
	canvasToInit.setAttribute('height', height);
}

// bindet onclick Event auf Start Button
function bindStartNewGameButton(id) {
	elementToBind = document.getElementById(id);
	elementToBind.setAttribute('onclick', 'startNewGame()');
}

//Startet ein komplett neues Spiel
function startNewGame() {
	var actualScene = new Scene(0); // erzeugt Scene Object
	actualScene.start();
}

// Das Scene Objekt
function Scene(sceneID) {
	id = sceneID,
	name = SCENE_NAME[sceneID],
	backgroundPath = SCENE_BG_PATH[sceneID],
	this.start = function() { // startet die Scene
		clearScreen();
		showFullScreenPic(backgroundPath);	
	}
}
