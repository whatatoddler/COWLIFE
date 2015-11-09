
// Temporäre Konstanten

var FPS = 60;

var PLAYER_MOVEMENT_SPEED = 100; // Pixels per second;
var PLAYER_MOVE_TARGET_DEAD_ZONE = 20;

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
	
	canvas.addEventListener('click', onCanvasClick, false);

	if(typeof(canvas.getContext) !== undefined) {
		ctx = canvas.getContext('2d');
	}
	loadAndDrawBgImageReturnImage(COWLIFE_WELCOME_SCREEN_IMAGE_FILE);
}


function onCanvasClick(event) {
	var x = event.clientX - canvas.offsetLeft + window.scrollX;
	var y = event.clientY - canvas.offsetTop + window.scrollY;
	player.moveTo(x,y);
	//alert('X: ' + x + ' Y: ' + y);
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
	canvas = document.getElementById(id);
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);
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
	scene.update();
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

		setInterval(draw, 1000/FPS); // Gameloop, sollte this.draw aufrufen, klappt noch nicht, deshalb der Umweg.
	},

	this.update = function() {
		player.update();
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
	this.targetPositionx = this.positionY;
	this.direction = 'right';
	this. isMoving = false;
	this.imagePath = PLAYER_COW_PIC;
	this.image = new Image();
	this.image.src = this.imagePath;
	var self = this;

	this.update = function() {
		if( (this.targetPositionx - PLAYER_MOVE_TARGET_DEAD_ZONE) > this.positionX) {
			this.direction = 'right';
			this.isMoving = true;
			this.positionX += PLAYER_MOVEMENT_SPEED / FPS;
		} 
		else if((this.targetPositionx + PLAYER_MOVE_TARGET_DEAD_ZONE) < this.positionX) {
			this.direction = 'left';
			this.isMoving = true;
			this.positionX -= PLAYER_MOVEMENT_SPEED / FPS;
		}
		else {
			this.isMoving = false;
		}

	}

	this.draw = function() {
		ctx.drawImage(this.image, this.positionX,  this.positionY);
	}

	this.moveTo = function(x,y) {
		//alert('X: ' + x + ' Y: ' + y);
		this.targetPositionx = x;
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