let BodyPart = function(x, y, isHead, canvas) {
	this.x = x;
	this.y = y;
	this.width = Constants.TILE_SIZE;
	this.height = Constants.TILE_SIZE;
	this.speed = Constants.TILE_SIZE;
	this.isHead = isHead;
	this.count = 0;
	this.delay = 25;
	this.g = canvas.getContext();
	this.color = Constants.BODY_PART_COLOR;
	this.nextPosition = new Point(0, 0);
	this.address = Constants.ADDRESS.RIGHT;
	
	this.draw = function() {
		this.g.fillStyle = this.color;
		this.g.fillRect(this.x, this.y, this.width, this.height);
	}
	
	this.update = function() {
		this.moveWithDelay();
	}
	
	this.move = function() {
		this.changeAddress();
		this.advance();
			this.followHead();
	}
	
	this.changeAddress = function() {
		if(this.isHead) {
			if(this.address != Constants.ADDRESS.RIGHT && keyboard.left) {
				this.address = Constants.ADDRESS.LEFT;
			}
			
			if(this.address != Constants.ADDRESS.DOWN && keyboard.up) {
				this.address = Constants.ADDRESS.UP;
			}
			
			if(this.address != Constants.ADDRESS.LEFT && keyboard.right) {
				this.address = Constants.ADDRESS.RIGHT;
			}
			
			if(this.address != Constants.ADDRESS.UP && keyboard.down) {
				this.address = Constants.ADDRESS.DOWN;
			}
		}
	}
	
	this.advance = function() {
		if(this.isHead) {
			if(this.address == Constants.ADDRESS.LEFT) {
				this.x -= this.speed;
			}
			
			if(this.address == Constants.ADDRESS.UP) {
				this.y -= this.speed;
			}
			
			if(this.address == Constants.ADDRESS.RIGHT) {
				this.x += this.speed;
			}
			
			if(this.address == Constants.ADDRESS.DOWN) {
				this.y += this.speed;
			}
		}
	}
	
	this.followHead = function() {
		if(!this.isHead) {
			this.setPosition(this.nextPosition);
		}
	}
	
	this.moveWithDelay = function() {
		if(this.count < this.delay) {
			this.count++;
		} else {
			this.count = 0;
			this.move();
		}
	}
	
	this.getPoint = function() {
		return new Point(this.x, this.y);
	}
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}
	
	this.setPosition = function(point) {
		this.x = point.x;
		this.y = point.y;
	}
	
}