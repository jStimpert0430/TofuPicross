class RightPanel{
    constructor(){
        this.element = this.constructElement();
    }

	constructElement() {
        let element = document.createElement("div");
        element.classList.add("RightPanel");
        let panelTopBarElement = document.createElement("div");
        panelTopBarElement.classList.add("PanelTopBar");
        let panelCircleButton = document.createElement("div");
        panelCircleButton.classList.add("CircleButton");
        panelTopBarElement.appendChild(panelCircleButton);
        element.appendChild(panelTopBarElement);
        let menuEntryContainerElement = document.createElement("div");
        menuEntryContainerElement.classList.add("MenuEntryContainer");
        element.appendChild(menuEntryContainerElement);
        return element;
    }

}
