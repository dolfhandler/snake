var g = new Canvas(document.querySelector('#canvas'));
var snake = new Snake(g);
var keyboard = new KeyBoard();
var flag = 0;
/**
 * Events
 */
document.addEventListener('DOMContentLoaded', mainLoop);

function mainLoop() {
	update();
	draw();
	requestAnimationFrame(mainLoop);
}

function update() {
	startKeyEvent();
	keyboard.update();
	snake.update();
}

function draw() {
	g.clearCanvas();
	snake.draw();
}


function startKeyEvent() {
	if(flag == 0) {
		snake.start();
		keyboard.start();
		flag = 1;
	}
}
