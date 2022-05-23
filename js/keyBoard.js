let KeyBoard = function() {
	this.amountKeys = Constants.AMOUNT_KEYS;
	this.keys = new Array();
	this.left = false;
    this.up = false;
    this.right = false;
    this.down = false;
    this.shoot = false;
	
	this.start = function() {
		this.keys.length = this.amountKeys;
        document.onkeydown = this.saveKey;
        document.onkeyup = this.clearKey;
	}
	
	this.saveKey = function(e) {
		//se toma la variable keyboard del ambito global
		keyboard.keys[e.keyCode] = true;
	}
	
	this.clearKey = function(e) {
		//se toma la variable keyboard del ambito global
		keyboard.keys[e.keyCode] = false;
	}
	
	this.update = function () {
        this.left = this.keys[Constants.VK_LEFT];
        this.up = this.keys[Constants.VK_UP];
        this.right = this.keys[Constants.VK_RIGHT];
        this.down = this.keys[Constants.VK_DOWN];
        this.shoot = this.keys[Constants.VK_A];
    }
}