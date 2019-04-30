var elevator = require('./elevator');

function manager(numberOfElevator, numberOfFloors) {
    let nof = numberOfFloors < 1 ? 1 : numberOfFloors;
    this.elevators = [];
    this.numberOfFloors = numberOfFloors;
    for(let i = 0; i < numberOfElevator; i++){
        this.elevators.push(new elevator(nof));
    }
}

manager.prototype.request = function(floorNumber){
    if(floorNumber > this.numberOfFloors){
        return false;
    }
    function compare(a, b){

        if (a.inMaintenance() && !b.inMaintenance()) return 1;
        if (!a.inMaintenance() && b.inMaintenance()) return -1;
        if (a.inMaintenance() && b.inMaintenance()) return 0;

        if (a.occupied() && !b.occupied()) return 1;
        if (!a.occupied() && b.occupied()) return -1;
        if (a.occupied() && b.occupied()) return 0;

        let diffA = Math.abs(a.getCurrentFloor() - floorNumber);
        let diffB = Math.abs(b.getCurrentFloor() - floorNumber);
        if (diffA > diffB) return 1;
        if (diffA < diffB) return -1;
        return 0;
    }
    this.elevators.sort(compare);
    if(this.elevators[0].inMaintenance()){
        this.elevators[0].service();
    }

    while(this.elevators[0].occupied()){
        // wait to free up.
    }

    return this.elevators[0].MoveToFloor(floorNumber);
};

module.exports = manager;