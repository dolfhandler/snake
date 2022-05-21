let BodyPart = function(x, y, isHead, canvas) {
	this.x = x;
	this.y = y;
	this.width = Constants.BODY_PART_SIZE;
	this.height = Constants.BODY_PART_SIZE;
	this.speed = Constants.BODY_PART_SIZE;
	this.isHead = isHead;
	this.count = 0;
	this.delay = 30;
	this.g = canvas.getContext();
	this.color = Constants.BODY_PART_COLOR;
	this.backupPosition = new Point(0, 0);
	this.moved = false;
	
	this.draw = function() {
		this.g.fillStyle = this.color;
		this.g.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.update = function() {
		this.moveWithDelay();
	}
	
	this.move = function() {
		if(keyboard.keys[Constants.ADDRESS.LEFT]) {
			this.x -= this.speed;
			this.address = Constants.ADDRESS.LEFT;
		}
		
		if(keyboard.keys[Constants.ADDRESS.TOP]) {
			this.y -= this.speed;
			this.address = Constants.ADDRESS.TOP;
		}
		
		if(keyboard.keys[Constants.ADDRESS.RIGHT]) {
			this.x += this.speed;
			this.address = Constants.ADDRESS.RIGHT;
		}
		
		if(keyboard.keys[Constants.ADDRESS.BOTTOM]) {
			this.y += this.speed;
			this.address = Constants.ADDRESS.BOTTOM;
		}
		this.isMoved();
	}
	
	this.moveWithDelay = function() {
		if(this.count < this.delay) {
			this.count++;
		} else {
			this.count = 0;
			this.move();
		}
	}
	
	this.getPosition = function() {
		return new Point(this.x, this.y);
	}
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	this.isMoved = function() {
		this.moved = keyboard.keys[Constants.ADDRESS.LEFT] 
		|| keyboard.keys[Constants.ADDRESS.RIGHT]
		|| keyboard.keys[Constants.ADDRESS.UP]
		|| keyboard.keys[Constants.ADDRESS.DOWN];
	}
	
}