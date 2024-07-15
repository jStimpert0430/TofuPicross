class PlayerController{
    constructor(){
        this.posx = 0;
        this.posy = 0;
        this.bindInputs();
    }
    
    bindInputs(){
		document.onkeydown = function(event) {
			switch (event.keyCode){
				case 37:
				//leftkey
				console.log("leftkey");
				break;
				case 38:
				console.log("upKey");
				//upkey
				break;
				case 39:
				console.log("rightkey");
				//rightKey
				break;
				case 40:
				//downkey
				console.log("downkey");
				break;
			}
		}
	}

}
