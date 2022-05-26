let Snake = function(canvas) {
	this.g = canvas;
	this.body = new Array();
	this.startPositionX = Constants.ZERO;
	
	this.start = function() {
		for(let i = Constants.ZERO; i < Constants.INITAL_BODY_PART; i++) {
			this.body.push(
				new BodyPart(
					this.startPositionX + (i * Constants.TILE_SIZE),
					Constants.ZERO, false, this.g
				)
			);
			
			if(i > Constants.ZERO) {
				this.body[i - 1].nextPosition = new Point(this.body[i].x, this.body[i].y);
			}
		}
		this.body[this.body.length - 1].isHead = true;
	}
	
	this.draw = function() {
		for(let bodyPart of this.body) {
			bodyPart.draw();
		}
	}
	
	this.update = function() {
		for(let bodyPart of this.body) {
			bodyPart.update();
		}
		this.updatePositions();
	}
	
	this.updatePositions = function() {
		for(let i = Constants.ZERO; i < this.body.length; i++) {
			if(i > Constants.ZERO) {
				this.body[i - 1].nextPosition = new Point(this.body[i].x, this.body[i].y);
			}
		}
	} 
	
}