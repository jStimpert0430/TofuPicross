class UI{
    constructor(targetPuzzle){
        this.element = this.constructElement(targetPuzzle);
        document.body.appendChild(this.element);
    }

	constructElement(targetPuzzle) {
        let element = document.createElement("div");
        element.classList.add("UI");
        let puzzleGrid = new Grid(targetPuzzle);
        element.appendChild(puzzleGrid.element);
        let rightPanel = new RightPanel();
        element.appendChild(rightPanel.element);
        return element;   
    }

}
