class RowKey{
    constructor(rowNum, occupied, targetPuzzle){
		this.rowNum = rowNum
        this.occupied = occupied;
        this.rowKey = this.calcRowKey(targetPuzzle);
        this.element = this.constructElement(this.rowKey);

    }

    constructElement(rowKey){
        let element = document.createElement("div");
        element.classList.add("RowCount");
        let rowKeyText = "";
        for(let i = 0; i < rowKey.length; i++){
			let workingElement = document.createElement("a");
			workingElement.innerHTML = rowKey[i];
			element.appendChild(workingElement)
		}
		if (this.rowNum % 2 == 0){
			element.classList.add("OddRow");
		}
		
        return element
    }
    
    calcRowKey(targetPuzzle){
		let rowKey = [];
		let consecutiveCount = 0;
		for(let i = 0; i < targetPuzzle.puzzleShape[this.rowNum].length; i++){
				if(targetPuzzle.puzzleShape[this.rowNum][i] == 1){
					consecutiveCount++;
				}
				else{
					if(consecutiveCount != 0){
						rowKey.push(consecutiveCount);
					}
					consecutiveCount = 0;
				}
		}
		if(consecutiveCount != 0){
			rowKey.push(consecutiveCount);
		}
		if(rowKey.length == 0){
			rowKey.push(0);
		}
		
		return rowKey
	}
}
