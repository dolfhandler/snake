const Control = function() {
    this.gamepad = null;
    this.availableEvents = 'ongamepadconnected' in window;
    this.connected = false;
	
    this.start: function() {
        if(this.availableEvents) {
            window.addEventListener('gamepadconnected', this.connect);
            window.addEventListener('gamepaddisconected', this.disconnect);
        } else {
            this.update();
        }
    }
	
    this.connect: function(event) {
        this.gamepad = event.gamepad;
        this.identify();
    }
	
    this.disconnect: function(event) {
        console.log(`disconnected control index: ${event.gamepad.index} and id: ${event.gamepad.id}`);
    }
	
    this.update: function() {
        if(!this.availableEvents) {
            let controls = null;

            try {
                controls = navigator.getGamepads ? navigator.getGamepads() : (
                    navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []
                );
                this.gamepad = controls[1];

                if(!this.connected){
                    this.connected = true;
                    this.identify();
                }
            } catch (exception) {
                console.log(`exception: ${exception.message}`)
            }
        } 
        
        if(!this.gamepad) {
            return;
        }

        if(this.buttonPressed(this.gamepad.buttons[0])) {
            console.log('b0');
            dx+=speed;
        }
        if(this.buttonPressed(this.gamepad.buttons[1])) {
            console.log('b1');
        }
        if(this.buttonPressed(this.gamepad.buttons[2])) {
            console.log('b2');
            dx-=speed;
        }
        if(this.buttonPressed(this.gamepad.buttons[3])) {
            console.log('b3');
        }
        if(this.buttonPressed(this.gamepad.buttons[4])) {
            console.log('b4');
        }
        if(this.buttonPressed(this.gamepad.buttons[5])) {
            console.log('b5');
        }
        if(this.buttonPressed(this.gamepad.buttons[6])) {
            console.log('b6');
        }
        if(this.buttonPressed(this.gamepad.buttons[7])) {
            console.log('b7');
        }
        if(this.buttonPressed(this.gamepad.buttons[8])) {
            console.log('b8');
        }
        if(this.buttonPressed(this.gamepad.buttons[9])) {
            console.log('b9');
        }
        if(this.buttonPressed(this.gamepad.buttons[10])) {
            console.log('b10');
        }
        if(this.buttonPressed(this.gamepad.buttons[11])) {
            console.log('b11');
        }
        
        
        if(this.buttonPressed(this.gamepad.axes[0]).pressed) {
            console.log('axes0');
            const horizontalAxes = this.buttonPressed(this.gamepad.axes[0]).value;
            console.log('*******************',horizontalAxes);

            if(horizontalAxes>-0.003921568393707275 && r.x + r.width < screen.width){
                dx += speed;
            }

            if(horizontalAxes<-0.003921568393707275 && r.x > 0){
                dx -= speed;
            }

        }
        if(this.buttonPressed(this.gamepad.axes[1])) {
            const verticalAxes = this.buttonPressed(this.gamepad.axes[1]).value;
            console.log('*******************',verticalAxes);

            if(verticalAxes>-0.003921568393707275 && r.y + r.height < screen.height){
                dy += speed;
            }

            if(verticalAxes<-0.003921568393707275 && r.y > 0){
                dy -= speed;
            }
            
        }
        if(this.buttonPressed(this.gamepad.axes[2])) {
            console.log('axes2');
        }
        if(this.buttonPressed(this.gamepad.axes[3])) {
            console.log('axes3');
        }

        r.paint();
    }
	
    this.buttonPressed: function(button) {
        if(typeof(button) == 'object') {
            return {
                pressed: button.pressed,
                value: button.value
            };
        }else{
            return {
                pressed: true,
                value: button
            };
        }
    }
	
    this.identify: function() {
        console.log({
            index: this.gamepad.index,
            id: this.gamepad.id,
            buttons: this.gamepad.buttons.length,
            axes: this.gamepad.axes.length,
        });
    }
	
}