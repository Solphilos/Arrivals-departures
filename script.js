

// creates divs in which data will be populated
/*
const makeDivs = () => {
    const dataBoxes = document.createElement('div');
    const descriptionBoxes = document.createElement('div');
    const mainContainer = document.querySelector('main');
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
*/

// loops and runs "makeDivs" 12 times, creating 24 divs total
/*
for (let i = 0; i < 12; i++) {
    makeDivs();
}
*/

const shipDataFactory = (ship, origin, dock, arrival, status) => {
    return {ship, origin, dock, arrival, status}
}

const popToArray = (newArrival, ship, origin, dock, arrival, status) => {
    let dataArray = [];
    newArrival = shipDataFactory(ship, origin, dock, arrival, status);
    dataArray.push(newArrival);
    console.log(newArrival.dock);
};

popToArray('shipOne', 'Rocinante', 'Eros', '13B', '13D1HR', 'Delayed');  


//let newArrival = shipDataFactory('ROCINANTE', 'EROS', '71D', '44D16H', 'ON TIME');


// creates divs and populates them with text
const popDescriptions = () => {
    const descriptionBoxes = document.getElementsByClassName('descriptionBox');
    for (let i = 0; i < descriptionBoxes.length; i++) {
        const shipNameField = document.createElement('div');
        const originField = document.createElement('div');
        const dockField = document.createElement('div');
        const arrivesField = document.createElement('div');
        const statusField = document.createElement('div');
        descriptionBoxes[i].appendChild(shipNameField);
        descriptionBoxes[i].appendChild(originField);
        descriptionBoxes[i].appendChild(dockField);
        descriptionBoxes[i].appendChild(arrivesField);
        descriptionBoxes[i].appendChild(statusField);
        shipNameField.textContent = "SHIP NAME";
        originField.textContent = "ORIGIN";
        dockField.textContent = "DOCK";
        arrivesField.textContent = "ARRIVES";
        statusField.textContent = "STATUS";
    } 
        
}

const popShipInfo = (id, ship, originPoint, dockNum, arrival, stat) => {
    const dataBoxes = document.getElementById(id);
    const shipName = document.createElement('div');
    const origin = document.createElement('div');
    const dock = document.createElement('div');
    const arrives = document.createElement('div');
    const status = document.createElement('div');
    shipName.classList.add('shipData');
    origin.classList.add('shipData');
    dock.classList.add('shipData');
    arrives.classList.add('shipData');
    status.classList.add('shipData');
    shipName.setAttribute('id', 'shipName');
    origin.setAttribute('id', 'origin');
    dock.setAttribute('id', 'dock');
    arrives.setAttribute('id', 'arrives');
    status.setAttribute('id', 'status');
    dataBoxes.appendChild(shipName);
    dataBoxes.appendChild(origin);
    dataBoxes.appendChild(dock);
    dataBoxes.appendChild(arrives);
    dataBoxes.appendChild(status);
    shipName.textContent = ship;
    origin.textContent = originPoint;
    dock.textContent = dockNum;
    arrives.textContent = arrival;
    status.textContent = stat;
    
}

popDescriptions();

popShipInfo('one', 'ROCINANTE', 'EROS', '71B', '12D13HR', 'ON TIME');
popShipInfo('two', 'EXCALIBUR', 'CERES', '51A', '1D12HR', 'SCHEDULED');
popShipInfo('three', 'INTREPID', 'EARTH', '72A', '3D14HR', 'ON TIME');

