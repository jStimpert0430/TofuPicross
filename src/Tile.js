class Tile{
    constructor(x, y, occupied){
        this.x = x;
        this.y = y;
        this.occupied = occupied;
        this.element = this.constructElement();
    }

    constructElement(){
        let element = document.createElement("div");
        element.classList.add("Tile");
        if(this.x < 5 && this.y > 4){
			element.classList.add("oddTileGroup");
		}
		else if(this.x > 4 && this.y < 5){
			element.classList.add("oddTileGroup");
		}
		element.classList.add("ColPOS-" + this.x);
		element.classList.add("RowPOS-" + this.y);
		element.style.zIndex = "1";
        return element
    }
}


