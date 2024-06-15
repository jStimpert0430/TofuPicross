class Grid{
    constructor(targetPuzzle){
        this.element = this.constructElement(targetPuzzle);
    }

	constructElement(targetPuzzle) {
        let gridElement = document.createElement("div");
        gridElement.classList.add("Grid");

        let statsPanel = new StatsPanel(targetPuzzle)
        gridElement.appendChild(statsPanel.element);
        
        for(let i = 0; i < 10; i++){
			let columnKey = new ColumnKey(i, false, targetPuzzle)
            gridElement.appendChild(columnKey.element);
            if(i == 4){
				let spacerElement = document.createElement("div");
				gridElement.appendChild(spacerElement);
			}
        }
        
        for(let i = 0; i < 10; i++){
			if(i == 5){
				for( let x = 0; x < 12; x++){
				let spacerElement = document.createElement("div");
				gridElement.appendChild(spacerElement);
				}
			}
            let rowKey = new RowKey(i, false, targetPuzzle)
            gridElement.appendChild(rowKey.element)
            for(let j = 0; j < 10; j++){
                let workingTile = new Tile(j, i, false);
                gridElement.appendChild(workingTile.element);
                if(j == 4){
				let spacerElement = document.createElement("div");
				gridElement.appendChild(spacerElement);
			}
            }
        }
        return gridElement
    }

}
