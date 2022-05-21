let Canvas = function(element) {
	this.element = element;
	this.ctx = element.getContext(Constants.CONTEXT_TYPE);
	
	this.clearCanvas = function() {
		this.ctx.clearRect(
			Constants.ZERO, 
			Constants.ZERO, 
			this.element.offsetWidth, 
			this.element.offsetHeight
		);
	}
	
	this.getContext = function() {
		return this.ctx;
	}
	
	this.getElement = function() {
		return this.element;
	}
}