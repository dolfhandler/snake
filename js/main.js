var g = new Canvas(document.querySelector('#canvas'));
var food = new Food(g);
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
	food.update();
}

function draw() {
	g.clearCanvas();
	snake.draw();
	food.draw();
}


function startKeyEvent() {
	if(flag == 0) {
		keyboard.start();
		snake.start();
		food.start();
		flag = 1;
	}
}
