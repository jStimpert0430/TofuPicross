class UI{
    constructor(targetPuzzle){
        this.element = this.constructElement(targetPuzzle);
        document.body.appendChild(this.element);
        let workingElement = document.getElementsByClassName("CircleButton")[0];

		workingElement.addEventListener("click", function(){
		let workingPanelElement = document.getElementsByClassName("RightPanel")[0];
		if(!workingPanelElement.classList.contains("Active")){
			workingPanelElement.classList.add("Active");
			workingElement.innerHTML = ">"
		}
		else{
			workingPanelElement.classList.remove("Active");
			workingElement.innerHTML = "<";
		}
		})
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
