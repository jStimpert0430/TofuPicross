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
        }
        
        for(let i = 0; i < 10; i++){
            let rowKey = new RowKey(i, false, targetPuzzle)
            gridElement.appendChild(rowKey.element)
            for(let j = 0; j < 10; j++){
                let workingTile = new Tile(j, i, false);
                gridElement.appendChild(workingTile.element);
            }
        }
        return gridElement
    }

}
