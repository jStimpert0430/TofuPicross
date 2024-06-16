class Tile{
    constructor(x, y, occupied){
        this.x = x;
        this.y = y;
        this.occupied = occupied;
        this.element = this.constructElement();
        let mouseDown = false;
        let rightMouseDown = false
        
		/*document.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
		});
		
		
        

        document.addEventListener('mousedown', (event) => {
            if(event.button == 0 && event.button != 2){
                mouseDown = true;
            }
            else if(event.button != 1 && event.button == 2){
				rightMouseDown = true;
			}
        });
        document.addEventListener('mouseup', (event) => {
            if(event.button === 0){
                mouseDown = false;
            }
            else if(event.button === 2){
				rightMouseDown = false;
			}
        });
        
        
        // add mouseover event listener to the element
        this.element.addEventListener('mouseover', (event) => {
			let columnElements = document.getElementsByClassName("ColumnCount");
          columnElements[this.x].classList.add("SelectedColumn");
          	let rowElements = document.getElementsByClassName("RowCount");
			rowElements[this.y].classList.add("SelectedRow");
			let selectedColumn = document.getElementsByClassName("ColPOS-" + this.x)
			for(let i = 0; i < selectedColumn.length; i++){
				if(i < this.y)
				selectedColumn[i].classList.add("SelectedColumn");
			}
			let selectedRow = document.getElementsByClassName("RowPOS-" + this.y)
			for(let i = 0; i < selectedRow.length; i++){
				if(i < this.x)
				selectedRow[i].classList.add("SelectedRow");
			}
            if (mouseDown && this.element.matches(':hover')) {
              event.target.classList.add("Active");
              if(!event.target.classList.contains("Moused")){
				event.target.classList.add("MouseDown");
			  }

            }
            
            else if(rightMouseDown && this.element.matches(':hover')){
				event.target.classList.remove("Active");
				event.target.classList.remove("Moused");
				event.target.classList.remove("MouseDown");
			}
        });

        this.element.addEventListener("mousedown", (event) => {
			if(mouseDown || event.button == 0){
          event.target.classList.add("Active");
              if(!event.target.classList.contains("Moused")){
				event.target.classList.add("MouseDown");
			  }
			}
			else if(event.button == 2){
				event.target.classList.remove("Active");
				event.target.classList.remove("Moused");
				event.target.classList.remove("MouseDown");
			}
        });
        
          this.element.addEventListener("mouseup", (event) => {
			if(event.button == 0){
          event.target.classList.remove("MouseDown");
          event.target.classList.add("Moused");
			}
        });

        this.element.addEventListener("mouseout", (event) => {
			let columnElements = document.getElementsByClassName("ColumnCount");
			let rowElements = document.getElementsByClassName("RowCount");
			rowElements[this.y].classList.remove("SelectedRow");
			columnElements[this.x].classList.remove("SelectedColumn");
			let selectedColumn = document.getElementsByClassName("ColPOS-" + this.x)
			for(let i = 0; i < selectedColumn.length; i++){
				selectedColumn[i].classList.remove("SelectedColumn");
			}
			let selectedRow = document.getElementsByClassName("RowPOS-" + this.y)
			for(let i = 0; i < selectedRow.length; i++){
				selectedRow[i].classList.remove("SelectedRow");
			}
			if(event.target.classList.contains("MouseDown")){
            event.target.classList.remove("MouseDown");
            event.target.classList.add("Moused");
		}
        });*/
        
        
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


