class StatsPanel{
	constructor(targetPuzzle){
		this.element = this.constructElement(targetPuzzle);
	}
	
	
	constructElement(targetPuzzle){
		let element = document.createElement("div");
		element.classList.add("StatsBox")
		let elementLevelText = document.createElement("div");
		elementLevelText.classList.add("Timer");
		elementLevelText.appendChild(document.createTextNode(gameManager.puzzle.puzzleName))
		element.appendChild(elementLevelText)
		let elementMistakesText = document.createElement("div");
		elementMistakesText.classList.add("Mistakes");
		elementMistakesText.appendChild(document.createTextNode("Mistakes: " + gameManager.mistakes))
		element.appendChild(elementMistakesText)
		let elementTimerText = document.createElement("div");
		elementTimerText.classList.add("Timer");
		elementTimerText.appendChild(document.createTextNode(targetPuzzle.puzzleTimeLimitHours.toString().padStart(2, '0') + ":" + targetPuzzle.puzzleTimeLimitMinutes.toString().padStart(2, '0')))
		element.appendChild(elementTimerText)
		return element
	}
	
}
