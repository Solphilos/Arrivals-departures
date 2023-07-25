// temporary
const populateDescription = () => {
    const shipNameField = document.createElement('div');
    const originField = document.createElement('div');
    const dockField = document.createElement('div');
    const arrivesField = document.createElement('div');
    const statusField = document.createElement('div');
    descriptionBoxes.appendChild(shipNameField);
    descriptionBoxes.appendChild(originField);
    descriptionBoxes.appendChild(dockField);
    descriptionBoxes.appendChild(arrivesField);
    descriptionBoxes.appendChild(statusField);
}

// creates divs in which data will be populated
const makeDivs = () => {
    const dataBoxes = document.createElement('div');
    const descriptionBoxes = document.createElement('div');
    const mainContainer = document.querySelector('.mainContainer');
    dataBoxes.setAttribute('id', 'dataBox');
    descriptionBoxes.setAttribute('id', 'descriptionBox');
    mainContainer.appendChild(dataBoxes);
    mainContainer.appendChild(descriptionBoxes);
    const shipNameField = document.createElement('div');
    const originField = document.createElement('div');
    const dockField = document.createElement('div');
    const arrivesField = document.createElement('div');
    const statusField = document.createElement('div');
    descriptionBoxes.appendChild(shipNameField);
    descriptionBoxes.appendChild(originField);
    descriptionBoxes.appendChild(dockField);
    descriptionBoxes.appendChild(arrivesField);
    descriptionBoxes.appendChild(statusField);
    shipNameField.textContent = "SHIP NAME";
    originField.textContent = "ORIGIN";
    dockField.textContent = "DOCK";
    arrivesField.textContent = "ARRIVES";
    statusField.textContent = "STATUS";
}


// loops and runs "makeDivs" 12 times, creating 24 divs total
for (let i = 0; i < 12; i++) {
    makeDivs();
}


