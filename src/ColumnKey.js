class ColumnKey{
    constructor(colNum, occupied, targetPuzzle){
		this.colNum = colNum
        this.occupied = occupied;
        this.colKey = this.calcColumnKey(targetPuzzle);
        this.element = this.constructElement(this.colKey);

    }

    constructElement(colKey){
        let element = document.createElement("div");
        element.classList.add("ColumnCount");
        let colKeyText = "";
        for(let i = 0; i < colKey.length; i++){
			let workingElement = document.createElement("a");
			workingElement.innerHTML = colKey[i];
			element.appendChild(workingElement)
		}
		if (this.colNum % 2 == 0){
			element.style.backgroundColor = "rgb(53, 60, 66)";
		}
		
        return element
    }
    
    calcColumnKey(targetPuzzle){
		let colKey = [];
		let consecutiveCount = 0;
		for(let i = 0; i < targetPuzzle.puzzleShape[this.colNum].length; i++){
				if(targetPuzzle.puzzleShape[i][this.colNum] == 1){
					consecutiveCount++;
				}
				else{
					if(consecutiveCount != 0){
						colKey.push(consecutiveCount);
					}
					consecutiveCount = 0;
				}
		}
		if(consecutiveCount != 0){
			colKey.push(consecutiveCount);
		}
		if(colKey.length == 0){
			colKey.push(0);
		}
		
		return colKey
	}
}
