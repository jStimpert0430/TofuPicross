class GameManager{
	constructor(){
		let timeSeconds = 30;
		let timeMinutes = 0;
		let timeHours = 0;
		let levelName = "NoName";
		let mistakes = 0;
		let puzzle = new Puzzle();
		let inputBoard = [];
		let cursotY = 0;
		let cursorX = 0;
		for(let i = 0; i < 10; i++){
			for(let j = 0; j < 10; j++){
				inputBoard.push(0);
			}	
		}
	}
}
