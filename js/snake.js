let Snake = function(canvas) {
	this.g = canvas;
	this.body = new Array();
	this.startPositionX = 10;
	this.flag = 0;
	this.head;
	
	this.start = function() {
		for(let i=0; i < 3; i++) {
			this.body.push(
				new BodyPart(
					this.startPositionX + (i * Constants.BODY_PART_SIZE),
					10, false, this.g
				)
			);
		}
		this.body[this.body.length -1].isHead = true;
		this.body[this.body.length -1].backupPosition = this.body[this.body.length -1].getPosition();
		this.head = this.body[this.body.length -1];
	}
	
	this.draw = function() {
		for(let bodyPart of this.body) {
			bodyPart.draw();
		}
	}
	
	this.update = function() {
		for(let i = this.body.length - 1; i >= 0; i--) {
			if(this.head.isMoved()) {
				if(this.body[i].isHead) {
					this.body[i].backupPosition = this.body[i].getPosition();
					this.body[i].update();
				} else {
					let currentPosition = new Point(this.body[i].getPosition().x, this.body[i].getPosition().y);
					this.body[i].setPosition(this.head.backupPosition.x, this.head.backupPosition.y);
					this.head.backupPosition = new Point(currentPosition.x, currentPosition.y);
				}
			}		
		}
	}
	
}