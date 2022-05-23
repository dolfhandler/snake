let Snake = function(canvas) {
	this.g = canvas;
	this.body = new Array();
	this.startPositionX = 10;
	
	this.start = function() {
		for(let i = 0; i < 11; i++) {
			this.body.push(
				new BodyPart(
					this.startPositionX + (i * Constants.BODY_PART_SIZE),
					10, false, this.g
				)
			);
			
			if(i > 0) {
				this.body[i - 1].nextPosition = new Point(this.body[i].x, this.body[i].y);
			}
		}
		this.body[this.body.length -1].isHead = true;
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
		for(let i = 0; i < this.body.length; i++) {
			if(i > 0) {
				this.body[i - 1].nextPosition = new Point(this.body[i].x, this.body[i].y);
			}
		}
	} 
	
}