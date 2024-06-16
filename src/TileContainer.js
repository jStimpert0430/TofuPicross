class TileContainer{
	constructor(x, y, occupied){
		this.x = x;
        this.y = y;
        this.occupied = occupied;
        this.element = this.constructElement();
        let mouseDown = false;
        let rightMouseDown = false
		
		
			
		document.addEventListener('contextmenu', function(ev) {
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
			
			
		//hover in
		this.element.addEventListener('mouseover', (event) => {
			let columnElements = document.getElementsByClassName("ColumnCount");
			columnElements[this.x].classList.add("SelectedColumn");
			let rowElements = document.getElementsByClassName("RowCount");
			rowElements[this.y].classList.add("SelectedRow");
			//add col coords class
			let selectedColumn = document.getElementsByClassName("ColPOS-" + this.x);
			for(let i = 0; i < selectedColumn.length; i++){
				if(i < this.y)
				selectedColumn[i].classList.add("SelectedColumn");
			}
			//add row coords class
			let selectedRow = document.getElementsByClassName("RowPOS-" + this.y);
			for(let i = 0; i < selectedRow.length; i++){
				if(i < this.x)
				selectedRow[i].classList.add("SelectedRow");
			}
			
			if (mouseDown && this.element.matches(':hover')) {
				event.target.children[0].classList.add("Active");
				if(!event.target.children[0].classList.contains("Moused")){
					event.target.children[0].classList.add("MouseDown");
				}
			}
				
			else if(rightMouseDown && this.element.matches(':hover')){
				event.target.children[0].classList.remove("Active");
				event.target.children[0].classList.remove("Moused");
				event.target.children[0].classList.remove("MouseDown");
			}
		});
		
		//unhover
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
			if(event.target.children[0].classList.contains("MouseDown")){
				event.target.children[0].classList.remove("MouseDown");
				event.target.children[0].classList.add("Moused");
			}
		});
	
		//mousedown
		this.element.addEventListener("mousedown", (event) => {
			if(mouseDown || event.button == 0){
				event.target.children[0].classList.add("Active");
				if(!event.target.children[0].classList.contains("Moused")){
					event.target.children[0].classList.add("MouseDown");
				}
			}
			else if(event.button == 2){
				event.target.children[0].classList.remove("Active");
				event.target.children[0].classList.remove("Moused");
				event.target.children[0].classList.remove("MouseDown");
			}
		});
		
		//mouseup
		this.element.addEventListener("mouseup", (event) => {
			if(event.button == 0){
				event.target.children[0].classList.remove("MouseDown");
				event.target.children[0].classList.add("Moused");
			}
		});
	}
	
	constructElement(){
		let workingContainer = document.createElement("div");
		workingContainer.classList.add("TileContainer");
		let workingTile = new Tile(this.x, this.y, this.occupied);
		workingContainer.appendChild(workingTile.element);
		return workingContainer;
	}
}
