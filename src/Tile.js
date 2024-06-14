class Tile{
    constructor(x, y, occupied){
        this.x = x;
        this.y = y;
        this.occupied = occupied;
        this.element = this.constructElement();
        let mouseDown = false;
        let rightMouseDown = false
        
				document.addEventListener('contextmenu', function(ev) {
			ev.preventDefault();
		});
		
		
        

        document.addEventListener('mousedown', (event) => {
            if(event.button == 0 && event.button != 2){
                mouseDown = true;
            }
            else if(event.button != 1 && event.button == 2){
				rightMouseDown = true;
			}
        });
        document.addEventListener('mouseup', (event) => {
            if(event.button === 0){
                mouseDown = false;
            }
            else if(event.button === 2){
				rightMouseDown = false;
			}
        });
        
        
        // add mouseover event listener to the element
        this.element.addEventListener('mouseover', (event) => {
            if (mouseDown && this.element.matches(':hover')) {
              event.target.classList.add("Active");
              if(!event.target.classList.contains("Moused")){
				event.target.classList.add("MouseDown");
			  }

            }
            
            else if(rightMouseDown && this.element.matches(':hover')){
				event.target.classList.remove("Active");
				event.target.classList.remove("Moused");
				event.target.classList.remove("MouseDown");
			}
        });

        this.element.addEventListener("mousedown", (event) => {
			if(mouseDown || event.button == 0){
          event.target.classList.add("Active");
              if(!event.target.classList.contains("Moused")){
				event.target.classList.add("MouseDown");
			  }
			}
			else if(event.button == 2){
				event.target.classList.remove("Active");
				event.target.classList.remove("Moused");
				event.target.classList.remove("MouseDown");
			}
        });
        
          this.element.addEventListener("mouseup", (event) => {
			if(event.button == 0){
          event.target.classList.remove("MouseDown");
          event.target.classList.add("Moused");
			}
        });

        this.element.addEventListener("mouseout", (event) => {
			if(event.target.classList.contains("MouseDown")){
            event.target.classList.remove("MouseDown");
            event.target.classList.add("Moused");
		}
        });
        
        
    }

    constructElement(){
        let element = document.createElement("div");
        element.classList.add("Tile");
        return element
    }
}
