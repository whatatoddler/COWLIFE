
// Temporäre Konstanten
var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 720;
var COWLIFE_WELCOME_SCREEN_IMAGE_FILE= 'images/cowlife_screen.png';

var CANVAS_ID = 'maincanvas';
var START_NEW_GAME_BUTTON_ID = 'startNewGameButton';




var PLAYER_COW_PIC= 'images/cow.png';
var PLAYER_START_POSITION_X = 50;
var PLAYER_START_POSITION_Y = 500;
var PLAYER_NAME = "Superkuh";

var SCENE_BG_PATH = [];
var SCENE_NAME =[];

SCENE_BG_PATH[0] = 'images/sc1_bg.png';
SCENE_NAME[0] = 'Day of the Cow';

var OBJECT_PIC_PATH = [];
var OBJECT_NAME = [];

OBJECT_PIC_PATH[0] = 'images/grass1.png';
OBJECT_NAME[0] = 'Grasbüschel';

var ctx;


window.onload=function() {
	
	setCanvasSize(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);
	bindElementWithClickFunction(START_NEW_GAME_BUTTON_ID, 'startNewGame()');
	bindElementWithClickFunction('clearButton', 'clearScreen()');
	bindElementWithClickFunction('drawButton', 'draw()');

	if(typeof(canvasToInit.getContext) !== undefined) {
		ctx = canvasToInit.getContext('2d');
	}
	loadAndDrawBgImageReturnImage(COWLIFE_WELCOME_SCREEN_IMAGE_FILE);
}



// zeichnet ein Bild ins Canvas
function loadAndDrawBgImageReturnImage(pathToImageFile) {
	var pic = loadImage(pathToImageFile);
	pic.addEventListener('load', function(){
		ctx.drawImage(pic,0,0);
	});
	return pic;
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


function bindElementWithClickFunction(id, functionString) {
	elementToBind = document.getElementById(id);
	elementToBind.setAttribute('onclick', functionString);
}
//Startet ein komplett neues Spiel
function startNewGame() {
	scene = new Scene(0); // erzeugt Scene Object
	scene.start();
}


//Objekte

function draw() {
	scene.draw();
}

// Das Scene Objekt
function Scene(sceneID) {
	
	this.id = sceneID,
	this.name = SCENE_NAME[sceneID],
	this.backgroundPath = SCENE_BG_PATH[sceneID],
	this.image = new Image(),
	this.image.src = this.backgroundPath, 

	this.start = function() { // startet die Scene
		clearScreen();
		player = new Player();
	},

	this.draw = function() {
		ctx.drawImage(this.image, 0, 0);
		player.draw();
	}

}

// Player Object
function Player() {
	this.name = PLAYER_NAME;
	this.positionX = PLAYER_START_POSITION_X,
	this.positionY = PLAYER_START_POSITION_Y,
	this.imagePath = PLAYER_COW_PIC;
	this.image = new Image();
	this.image.src = this.imagePath;

	this.draw = function() {
		ctx.drawImage(this.image, this.positionX,  this.positionY);
	}
}





// Hilfsfunktionen

// füllt das Canvas weiß
function clearScreen() {
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}


//Erzeugt ein Image Objhekt und gibt dieses zurück;
function loadImage(pathToImageFile) {
	var pic = new Image();
	pic.src = pathToImageFile;
	return pic;
}