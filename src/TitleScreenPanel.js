class TitleScreenPanel{
    constructor(){
        this.element = this.constructElement();
        document.body.appendChild(this.element);
    }
    constructElement(){
        let element = document.createElement("div");
        element.classList.add("UI");
        let titlePanel = document.createElement("div");
        titlePanel.classList.add("TitlePanel");
        let titleText = document.createElement("div");
        titleText.classList.add("TitleText");
        titleText.innerHTML = "TO<br>FU"
        titlePanel.appendChild(titleText);
        let titleTextsub = document.createElement("div");
        titleTextsub.classList.add("TitleTextSub");
        titleTextsub.innerHTML = "PICROSS";
        let startText = document.createElement("div");
        startText.classList.add("StartText");
        startText.innerHTML = "Click to start";
        titlePanel.appendChild(titleTextsub);
        titlePanel.appendChild(startText);
        element.appendChild(titlePanel);
        return element;
    }
}