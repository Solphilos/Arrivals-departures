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


const revealInput = () => {
    const input = document.querySelector('.inputWindow');
    input.style.display = "flex";
}

const removeInput = () => {
    const input = document.querySelector('.inputWindow');
    input.style.display = "none";
}

//let newArrival = shipDataFactory('ROCINANTE', 'EROS', '71D', '44D16H', 'ON TIME');


// creates divs and populates them with static text descriptors 
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

// creates divs and populates them with variable data; i.e. name of ships, point of origin, ETA, etc. 
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



const assignShipData = () => {
    let ship = document.getElementById('ship').value;
    let origin = document.getElementById('pointOfOrigin').value;
    let dock = document.getElementById('dockLocation').value;
    let arrivalTime = document.getElementById('arrivalTime').value;
    let status = document.getElementById('statusData').value;
    popShipInfo("one", ship, origin, dock, arrivalTime, status);
}

document.querySelector('.submitShipValues').addEventListener('click', assignShipData)
