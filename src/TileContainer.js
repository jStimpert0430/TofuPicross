class TileContainer{
	constructor(x, y, occupied){
		this.x = x;
        this.y = y;
        this.occupied = occupied;
        this.mouseDown = false;
        this.rightMouseDown = false
		this.element = this.constructElement();
		this.bindElementInput();
	}
	
	constructElement(){
		let workingContainer = document.createElement("div");
		workingContainer.classList.add("TileContainer");
		let workingTile = new Tile(this.x, this.y, this.occupied);
		workingContainer.appendChild(workingTile.element);
		return workingContainer;
	}

	bindElementInput(){
		document.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
		});
		
		//track mousedown	
		document.addEventListener('mousedown', (event) => {
			if(event.button == 0 && event.button != 2){
				this.mouseDown = true;
			}
			else if(event.button != 1 && event.button == 2){
				this.rightMouseDown = true;
			}
		});
		
		
		//track mouseup
		document.addEventListener('mouseup', (event) => {
			if(event.button === 0){
				this.mouseDown = false;
			}
			else if(event.button === 2){
				this.rightMouseDown = false;
			}
		});
			
			
		//hover in
		this.element.addEventListener('mouseover', (event) => {
			this.hilightSelectedColumn();
			this.hilightSelectedRow();
			if (this.mouseDown && this.element.matches(':hover')) {
				event.target.children[0].classList.add("Active");
				if(!event.target.children[0].classList.contains("Moused")){
					event.target.children[0].classList.add("MouseDown");
				}
			}
			else if(this.rightMouseDown && this.element.matches(':hover')){
				event.target.children[0].classList.remove("Active");
				event.target.children[0].classList.remove("Moused");
				event.target.children[0].classList.remove("MouseDown");
				this.removeTile();
			}
		});
		
		//unhover
		this.element.addEventListener("mouseout", (event) => {
			this.unHilightSelectedColumn();
			this.unHilightSelectedRow();
			if(event.target.children[0].classList.contains("MouseDown")){
				event.target.children[0].classList.remove("MouseDown");
				event.target.children[0].classList.add("Moused");
				this.fillTile();
			}
		});
	
		//mousedown
		this.element.addEventListener("mousedown", (event) => {
			if(this.mouseDown || event.button == 0){
				event.target.children[0].classList.add("Active");
				if(!event.target.children[0].classList.contains("Moused")){
					event.target.children[0].classList.add("MouseDown");
				}
			}
			else if(event.button == 2){
				event.target.children[0].classList.remove("Active");
				event.target.children[0].classList.remove("Moused");
				event.target.children[0].classList.remove("MouseDown");
				this.removeTile();
			}
		});
		
		//mouseup
		this.element.addEventListener("mouseup", (event) => {
			if(event.button == 0){
				event.target.children[0].classList.remove("MouseDown");
				event.target.children[0].classList.add("Moused");
				this.fillTile();
			}
		});
	}

	fillTile(){
		if(this.checkValidMove()){
			gameManager.inputBoard[this.x][this.y] =  1;
			console.log(gameManager.inputBoard.toString());
		}
	}

	checkValidMove(){
		console.log("Checking " + this.x.toString() + this.y.toString())
		if(gameManager.puzzle.puzzleShape[this.y][this.x] == 1){
			console.log("valid move");
			return true;
		}
		else{
			console.log("invalid move");
			gameManager.mistakes++;
			return false;
		}
	}

	removeTile(){
		gameManager.inputBoard[this.x][this.y] =  0;
	}

	hilightSelectedRow(rowNum){
		this.hilightRowKey();
		let selectedRow = document.getElementsByClassName("RowPOS-" + this.y);
		for(let i = 0; i < selectedRow.length; i++){
			if(i < this.x)
			selectedRow[i].classList.add("SelectedRow");
		}
		
	}

	hilightSelectedColumn(colNum){
		this.hilightColumnKey();
		let selectedColumn = document.getElementsByClassName("ColPOS-" + this.x);
		for(let i = 0; i < selectedColumn.length; i++){
			if(i < this.y)
			selectedColumn[i].classList.add("SelectedColumn");
		}
	}

	unHilightSelectedRow(rowNum){
		this.unHilightRowKey();
		let selectedRow = document.getElementsByClassName("RowPOS-" + this.y)
		for(let i = 0; i < selectedRow.length; i++){
			selectedRow[i].classList.remove("SelectedRow");
		}
	}

	unHilightSelectedColumn(colNum){
		this.unHilightColumnKey();
		let selectedColumn = document.getElementsByClassName("ColPOS-" + this.x)
		for(let i = 0; i < selectedColumn.length; i++){
			selectedColumn[i].classList.remove("SelectedColumn");
		}
	}

	hilightColumnKey(colNum){
		let columnElements = document.getElementsByClassName("ColumnCount");
		columnElements[this.x].classList.add("SelectedColumn");
	}

	hilightRowKey(rowNum){
		let rowElements = document.getElementsByClassName("RowCount");
		rowElements[this.y].classList.add("SelectedRow");
	}

	unHilightColumnKey(colNum){
		let columnElements = document.getElementsByClassName("ColumnCount");
		columnElements[this.x].classList.remove("SelectedColumn");
	}

	unHilightRowKey(rowNum){
		let rowElements = document.getElementsByClassName("RowCount");
		rowElements[this.y].classList.remove("SelectedRow");
	}

	setPos(){

	}
}
