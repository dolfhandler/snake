let Food = function (canvas) {
	this.point;
	this.width = Constants.TILE_SIZE;
	this.height = Constants.TILE_SIZE;
	this.color = Constants.FOOT_COLOR;
	this.g = canvas.getContext();
	this.count = Constants.ZERO;
	this.delay = 600;

	this.start = function () {
		this.generate();
	}

	this.draw = function () {
		if (this.point == undefined) return;

		this.g.fillStyle = this.color;
		this.g.fillRect(this.point.x, this.point.y, this.width, this.height);
	}

	this.update = function () {
		this.generateWithDelay();
	}

	this.generate = function () {
		let stageWidth = canvas.getElement().offsetWidth - 2;
		let stageHeight = canvas.getElement().offsetHeight - 2;
		console.log(stageWidth, ' ', stageHeight);
		let topX = Math.floor(stageWidth / this.width);
		let topY = Math.floor(stageHeight / this.height);
		this.point = new Point(
			Math.floor((Math.random() * topX)) * this.width,
			Math.floor((Math.random() * topY)) * this.height
		);

		if (this.isInsideSnakeBody()) {
			this.generate();
		}
	}

	this.isInsideSnakeBody = function () {
		const snakeBody = snake.body.filter(part =>
			part.x == this.point.x && part.y == this.point.y
		);
		return (snakeBody.length > Constants.ZERO);
	}

	this.generateWithDelay = function () {
		if (this.count < this.delay) {
			this.count++;
		} else {
			this.count = Constants.ZERO;
			this.generate();
		}
	}

	this.reGenerate = function () {
		this.count = 601;
	}

}