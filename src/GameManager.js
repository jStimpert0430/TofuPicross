class GameManager{
	constructor(){
		this.timeSeconds = 30;
		this.timeMinutes = 0;
		this.timeHours = 0;
		this.mistakes = 0;
		this.cursorY = 0;
		this.cursorX = 0;
		this.state = "idle";
		this.puzzle = new Puzzle();
		this.inputBoard = [];
		this.gameUI = "";
	}

	initGame(){
		this.cursorY = 0;
		this.cursorX = 0;
		this.puzzle = new Puzzle();
		this.inputBoard = [];
		this.populateInputBoard(this.inputBoard);
		this.gameUI = new UI(gameManager.puzzle);
		//create puzzle based on level id selected
		//create game UI
		//create game controller
		//bind controller to UI
		//display ready button
		//create and start game loop
	}

	initTitleScreen(){
		this.titleScreenUI = new TitleScreenPanel()
	}

	populateInputBoard(inputBoard){
		for(let i = 0; i < 10; i++){
			let workingRow = [];
			for(let j = 0; j < 10; j++){
				workingRow.push(0);
			}
			inputBoard.push(workingRow);	
		}
	}



}
