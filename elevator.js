function elevator( id, numberOfFloors) {
    this.id = id;
    this.currentFloorIndex = 0;
    this.numberOfFloors = numberOfFloors;
}

elevator.prototype.MoveToFloor = function(floorNumber){
    let currentFloorIndex = floorNumber - 1;
    if(currentFloorIndex > this.numberOfFloors || currentFloorIndex < 0){
        return false;
    }

    let indexFn = this.currentFloorIndex < currentFloorIndex ? (index) => { return index++;} : (index) => {  return index--;};

    while(true){
        if(this.currentFloorIndex == currentFloorIndex){
            return true;
        }
        sleep(3000);
        currentFloorIndex = indexFn(currentFloorIndex);
    }
};

module.exports = elevator;